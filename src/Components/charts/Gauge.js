import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export const create_gchart = (data) => {
  let gchart = am4core.create("chartdiv", am4charts.GaugeChart);
  let axis = gchart.xAxes.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  gchart.innerRadius = -20;
  gchart.radius = am4core.percent(70);
  //this.gchart = gchart;
  //data.gchart = gchart;
  let hand = gchart.hands.push(new am4charts.ClockHand());
  hand.value = data;
  hand.startWidth = 15;
  hand.innerRadius = 50;
  console.log(hand);
  //console.log(data);

  const axisrangefill = (value, endValue, color) => {
    let range = axis.axisRanges.create();
    range.value = value;
    range.endValue = endValue;
    range.axisFill.fillOpacity = 1;
    range.axisFill.fill = am4core.color(color);
    range.axisFill.zIndex = -1;
    return range;
  };

  axis.axisRanges.values.push(axisrangefill(0, 70, "#88AB75"));
  axis.axisRanges.values.push(axisrangefill(70, 85, "#f5cc00"));
  axis.axisRanges.values.push(axisrangefill(85, 100, "#f50000"));
};
