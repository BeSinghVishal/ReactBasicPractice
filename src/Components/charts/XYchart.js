import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

export const create_XYchart = (data, type = "Line") => {
  //theme
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_kelly);

  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.data = data;

  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  chart.cursor = new am4charts.XYCursor();
  chart.legend = new am4charts.Legend();
  chart.legend.useDefaultMarker = true;
  //arg.chart = chart;

  // const newData = () => {
  //   let seriesId = chart.series.length + 1;
  //   const updt_data = chart.data.map((data_item) => {
  //     return (data_item = {
  //       ...data_item,
  //       [`value${seriesId}`]: Math.random() * 150
  //     });
  //   });
  //   return [updt_data, `value${seriesId}`];
  // };

  const addseries_to_XYchart = () => {
    // callback returning key and updated data with each data object updted with a random value under new key
    //const [data_updt, key] = callback();
    //assigning updated data to chart data
    //chart.data = data_updt;
    //pushing new series
    let series;
    if (type === "Line") {
      series = chart.series.push(new am4charts.LineSeries());
    }
    if (type === "column") {
      series = chart.series.push(new am4charts.ColumnSeries());
    }

    // series.dataFields.valueY = `value${seriesId}`;
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Consumption";
    series.strokeWidth = 3;
  };

  addseries_to_XYchart();
  //   addseries_to_XYchart(newData);
  //   addseries_to_XYchart(newData);
  //   addseries_to_XYchart(newData);
};
