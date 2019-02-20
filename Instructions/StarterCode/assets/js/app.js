// @TODO: YOUR CODE HERE!
//Containing box & Area
var width = parseInt(d3.select(#scatter).style("width"));
var height = width - width / 3.9;
var margin = 20;
var labelArea = 110;
var tPadBot = 40;
var tPadLeft = 40;

//svg graph
var svg = d3
    .select(#scatter)
    .append("svg")
    .attr("width",width)
    .attr("height", height)
    .attr("class","chart");

//Set the radius for each dot that will appear in the graph.
var circRadius;
function crGet() {
    if(width<=530) {
        circRadius = 5;
    }
    else {
        circRadius = 10;
    }
}
crGet();

