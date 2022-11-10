const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const values = [65, 80, 30, 2, 150, 15, 75];

const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];

const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor,
        borderColor,
        borderWidth: 1,
        data: values,
    }]
};

const options = {
    layout: {
        padding: 20
    }
};

const plugins = [];

export const config = {
    type: 'bar',
    data,
    options,
    plugins,
};
