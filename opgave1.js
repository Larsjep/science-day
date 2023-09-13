import Chart from 'chart.js/auto';
import data_points from './data.json';

export function opgave1() {
  var data = data_points;

  var chart = new Chart(document.getElementById('plot1'), {
    type: 'scatter',
    data: {
      //labels: data.map((row) => row.year),
      backgroundColor: 'rgb(255, 99, 123)',
      datasets: [
        {
          label: 'Measured',
          data: data.map((row) => {
            return { x: row.ref, y: row.measured };
          }),
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          beginAtZero: true,
        },
        y: {
          type: 'linear',
          position: 'left',
          max: 13,
          beginAtZero: true,
        },
      },
    },
  });

  document.getElementById('Recalculate').onclick = function () {
    var slope = document.getElementById('Slope').value;
    console.info(document.getElementById('Slope'));
    chart.data.datasets[0].data = data.map((row) => {
      return { x: row.ref, y: row.measured * slope };
    });
    chart.update();
  };
}
