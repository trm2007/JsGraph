import { Chart, CategoryScale, PointElement, LinearScale, BarController, BarElement, LineController, LineElement } from "chart.js";

Chart.register(CategoryScale, PointElement, LinearScale, BarController, BarElement, LineController, LineElement);

import { config as config1 } from "./chart1";
import { config as config2 } from "./chart2";
import { config as config3 } from "./chart3";
import { config as config4 } from "./chart4";

const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
);

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);
const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
);
const myChart4 = new Chart(
    document.getElementById('myChart4'),
    config4
);
