const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const values = [15, 60, 3, 22, 50, 10, 25];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(99, 255, 132)',
        borderColor: 'rgb(99, 255, 132)',
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
    type: 'line',
    data,
    options,
    plugins,
};
