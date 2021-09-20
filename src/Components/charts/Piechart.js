import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export const create_Piechart = (data) => {
  //theme
  let chart2 = am4core.create("chartdiv", am4charts.PieChart);
  //chart2.data = this.state.data;
  chart2.data = data;
  //chart2 = chart2;

  let series2 = chart2.series.push(new am4charts.PieSeries());
  // series2.dataFields.value = "value";
  series2.dataFields.value = "litres";
  series2.dataFields.category = "country";

  chart2.legend = new am4charts.Legend();
  chart2.legend.position = "right";
  chart2.legend.maxHeight = 110;
  chart2.legend.scrollable = true;
};
