using System;
using System.Collections.Generic;
using System.Linq;

namespace DinoRace.Data
{
    public sealed class GameBoard
    {
        private string[] colors = { "Blue", "Green", "Pink", "Red", "Teal", "Yellow" }; 
        
        public GameBoard(int numberOfPlayers, int numberOfFields)
        {
            int maxNumberOfPlayers = colors.Length;
            if (numberOfPlayers > maxNumberOfPlayers)
                throw new ArgumentException($"The maximum allowed number of players is {maxNumberOfPlayers}.");

            int maxNumberOfFields = 10;
            if (numberOfFields < 2 || numberOfFields > maxNumberOfFields)
                throw new ArgumentException($"The number of fields must be between 2 and {maxNumberOfFields}.");

            GeneratePlayers(numberOfPlayers);
            NumberOfFields = numberOfFields;
        }

        public bool GameOver => GameWinner != null;

        public Player GameWinner { get; private set; } = null;

        public int NumberOfFields { get; }

        public int PlayerCount => Players.Count;

        public List<Player> Players { get; } = new List<Player>();
        
        public string MovePlayer(int playerIndex)
        {
            var player = Players[playerIndex];
            player.Position++;
            CheckForGameWinner();
            return player.Color;
        }        

        public void ResetGame()
        {
            foreach (var player in Players)
                player.Position = 1;

            GameWinner = null;
        }

        private void CheckForGameWinner()
        {
            foreach (var player in Players)
            {
                if (player.Position >= NumberOfFields)
                    GameWinner = player;
            }
        }
        
        private void GeneratePlayers(int numberOfPlayers)
        {
            for (int i = 0; i < numberOfPlayers; i++)
                Players.Add(new Player{ Color = colors[i] });
        }
    }
}