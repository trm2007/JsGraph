import pattern from "patternomaly";

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const values = [15, 60, 3, 22, 50, 10, 25];

const backgroundColor = [
    pattern.draw('square', '#ff6384'),
    pattern.draw('circle', '#36a2eb'),
    pattern.draw('diamond', '#cc65fe'),
    pattern.draw('triangle', '#ffce56')
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        data: values,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor,
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
