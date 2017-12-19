/*
 Highcharts JS v6.0.3 (2017-11-14)

 (c) 2009-2017 Highsoft AS

 License: www.highcharts.com/license
*/
(function (a) {
  "object" === typeof module && module.exports ? module.exports = a : a(Highcharts)
})(function (a) {
  a.theme = {
    colors: [
      "#2497f4",
      "#00adef",
      "#01bcd6",
      "#02968b",
      "#8cc44a",
      "#cbdd38",
      "#feea3d",
      "#fec108",
      "#fe9823",
      "#e5694a",
      "#f76186",
      "#e4002c",
      "#e13fab",
      "#c581dc",
      "#7d85e8",
      "#79aff5",
      "#59678c"
    ],
    colorAxis: {maxColor: "#2497f4", minColor: "#fe9823"},
    plotOptions: {map: {nullColor: "#fcfefe"}},
    navigator: {maskFill: "rgba(170, 205, 170, 0.5)", series: {color: "#95C471", lineColor: "#fe9823"}}
  };
  a.setOptions(a.theme)
});
