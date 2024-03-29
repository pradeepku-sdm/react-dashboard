import React from 'react';
import "../charts.scss";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PieController,
    ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    PieController,
    ArcElement,
    Tooltip,
    Title,
    Legend
);

export const pieOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Pie Chart',
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return context.label + ': ' + context.parsed.toFixed(2) + '%';
                },
            },
        },
    },
};

const pieLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

export const pieData = {
    labels: pieLabels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            hoverOffset: 4,
        },
    ],
};

export function Piechart() {
    return <Pie options={pieOptions} data={pieData} className='customSize' />;
}
