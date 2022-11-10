// Include the core fusioncharts file from core
import FusionCharts from 'fusioncharts/core';
// Include the chart from viz folder
import Column2D from 'fusioncharts/viz/column2d';
// Include the fusion theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
// Add the chart and theme as dependency
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(Column2D);
FusionCharts.addDep(FusionTheme);

// Preparing the chart data
const chartData = [
    {
        label: "Venezuela",
        value: "290"
    },
    {
        label: "Saudi",
        value: "260"
    },
    {
        label: "Canada",
        value: "180"
    },
    {
        label: "Iran",
        value: "140"
    },
    {
        label: "Russia",
        value: "115"
    },
    {
        label: "UAE",
        value: "100"
    },
    {
        label: "US",
        value: "30"
    },
    {
        label: "China",
        value: "30"
    }
];

// Create a JSON object to store the chart configurations
const chartConfig = {
    //Specify the chart type
    type: "column2d",
    //Set the container object
    renderAt: "fusion-chart-container",
    //Specify the width of the chart
    width: "100%",
    //Specify the height of the chart
    height: "100%",
    //Set the type of data
    dataFormat: "json",
    dataSource: {
        chart: {
            //Set the chart caption
            caption: "Countries With Most Oil Reserves [2017-18]",
            //Set the chart subcaption
            subCaption: "In MMbbl = One Million barrels",
            //Set the x-axis name
            xAxisName: "Country",
            //Set the y-axis name
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            //Set the theme for your chart
            theme: "fusion"
        },
        // Chart Data from Step 2
        data: chartData
    }
};

FusionCharts.ready(function () {
    let fusioncharts = new FusionCharts(chartConfig);
    fusioncharts.render();
});
