import Chart from 'chart.js/auto';
import data_points from './data.json';

(async function () {
  const data = data_points;

  new Chart(document.getElementById('acquisitions'), {
    type: 'line',
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: 'Fat %',
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
