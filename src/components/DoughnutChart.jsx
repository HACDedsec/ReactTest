// DoughnutChart.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new window.Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, []);

  return (
    <canvas ref={chartRef} width="400" height="400"></canvas>
  );
};

export default DoughnutChart;
