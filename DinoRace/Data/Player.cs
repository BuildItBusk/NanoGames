using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace DinoRace.Data
{
    public class Player
    {
        public string Color { get; set; }
        public string IconPath => "./gfx/" + Color + ".png";
        public int Position { get; set; } = 1;

    }
}
