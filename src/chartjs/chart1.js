const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const values = [0, 10, 5, 2, 20, 30, 45];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
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
