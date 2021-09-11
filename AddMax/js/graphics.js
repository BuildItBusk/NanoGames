function drawDots(numDots) {
    const svgns = "http://www.w3.org/2000/svg";
    let newDot = document.createElementNS(svgns, "circle");
    newDot.setAttribute("cx", "5");
    newDot.setAttribute("cy", "5");
    newDot.setAttribute("r", "5");

    const svg = document.querySelector("svg");
    svg.appendChild(newDot);
}