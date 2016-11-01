var data = [
	{name:'ramesh',subject:'maths',score:87, color: 'steelblue' },
	{name:'suresh',subject:'maths',score:45, color: 'steelblue'},
	{name:'pokemon',subject:'english',score:65, color: 'orange'},
	{name:'mary',subject:'kannada',score:44, color: 'green' },
	{name:'riya',subject:'science',score:72, color: 'red'},
	{name:'katie',subject:'social studies',score:82, color: 'darkviolet'},
	{name:'katie',subject:'maths',score:98, color: 'steelblue'},
	{name:'ramesh',subject:'bengali',score:25, color: 'brown'},
	{name:'suresh',subject:'science',score:55, color: 'red'},
	{name:'riya',subject:'tamil',score:75, color: 'magenta'},
	{name:'pokemon',subject:'sports',score:95, color: 'grey'},
	{name:'pokemon',subject:'social studies',score:32, color: 'darkviolet'}
];

var color = d3.scaleOrdinal()
          .domain(['maths','english','kannada','science','social studies', 'bengali', 'tamil', 'sports'])
          .range(['steelblue', 'orange', 'green', 'red', 'darkviolet', 'brown', 'magenta', 'grey']);

var display = function(){
  var bars = d3.select('body').select('.container')
    .selectAll('div')
    .data(data);

  bars.enter().append('div')
    .text(function(d){return d.name+" "+ d.score })
    .style('text-align', 'center')
    .style('width', function(d){return (d.score*10)+'px'})
    .classed('bars', true)
    .style('background-color', function(d){ return d.color});

    var buttonNames = ['name','subject','score'];

    d3.select("body").select('.container').selectAll("input")
      .data(buttonNames).enter().append("input")
      .attr("type","button")
      .attr("class","button")
      .attr("value", function (d,i){return d;} )
      .attr("onclick", "sortdata()");



}
//
var sortdata = function () {
  data.sort(function(a, b) {
      return a.score - b.score
    });
display();
    }


window.onload = display;
