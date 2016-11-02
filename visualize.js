var data = [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55, },
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
];

var color = d3.scaleOrdinal(d3.schemeCategory20);

var display = function(){
  var bars = d3.select('body').select('.container')
    .selectAll('div')
    .data(data);

  bars.enter().append('div')
    .text(function(d){return d.name+" "+ d.score })
    .style('text-align', 'center')
    .style('width', function(d){return (d.score*10)+'px'})
    .classed('bars', true)
    .style('background-color',function(d){
    return color(d.subject)});


  var button = d3.select('.button-container').selectAll('button')
    .data(Object.keys(data[0 ]))
    .enter().append('button')
    .attr('type','button')
    .attr('id',function (d) {console.log(d);return d;})
    .text(function (d) {
      return d;
    })
    .attr('onclick','updateChart(this.id)');

  var legend = d3.select('.legend-container').selectAll('div')
    .data(d3.map(data, function(d){return d.subject;}).keys())
    .enter().append('div')
    .text(function(d){console.log(d); return d})
    .classed('legend', true)
    .style('background-color', function(d){
      return color(d)
    });

}

var updateChart = function(id) {
   var bars = d3.select('.container').selectAll('.bars');
   bars.sort((a, b) => d3.ascending(a[id], b[id]));

}

window.onload = display;
