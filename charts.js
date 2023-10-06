const temperatureChartCtx = document.getElementById('temperatureChart').getContext('2d');
const humidityChartCtx = document.getElementById('humidityChart').getContext('2d');
const co2ChartCtx = document.getElementById('co2Chart').getContext('2d');
const oxygenChartCtx = document.getElementById('oxygenChart').getContext('2d');
const overallStatsCtx = document.getElementById('overallStatsChart').getContext('2d');

function generateRandomData() {
  const numDataPoints = 10;

  const timestamps = [];
  const temperatures = [];
  const humidities = [];
  const co2Levels = [];
  const oxygenLevels = [];

  const now = new Date();
  for (let i = numDataPoints - 1; i >= 0; i--) {
    timestamps.push(new Date(now - i * 1000).toLocaleTimeString());
    temperatures.push(Math.random() * 30 + 20);
    humidities.push(Math.random() * 50 + 30);
    co2Levels.push(Math.random() * 500 + 300);
    oxygenLevels.push(Math.random() * 5 + 18);
  }

  updateTemperatureBarChart(timestamps, temperatures);
  updateHumidityBarChart(timestamps, humidities);
  updateCO2BarChart(timestamps, co2Levels);
  updateOxygenBarChart(timestamps, oxygenLevels);

  updateOverallStatsPolarChart(temperatures, humidities, co2Levels, oxygenLevels);
}

function updateTemperatureBarChart(timestamps, temperatures) {
  new Chart(temperatureChartCtx, {
    type: 'bar',
    data: {
      labels: timestamps,
      datasets: [{
        label: 'Temperature (°C)',
        data: temperatures,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function updateHumidityBarChart(timestamps, humidities) {
  new Chart(humidityChartCtx, {
    type: 'bar',
    data: {
      labels: timestamps,
      datasets: [{
        label: 'Humidity (%)',
        data: humidities,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function updateCO2BarChart(timestamps, co2Levels) {
  new Chart(co2ChartCtx, {
    type: 'bar',
    data: {
      labels: timestamps,
      datasets: [{
        label: 'CO2 Level (ppm)',
        data: co2Levels,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function updateOxygenBarChart(timestamps, oxygenLevels) {
  new Chart(oxygenChartCtx, {
    type: 'bar',
    data: {
      labels: timestamps,
      datasets: [{
        label: 'Oxygen Level (%)',
        data: oxygenLevels,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function updateOverallStatsPolarChart(temperatures, humidities, co2Levels, oxygenLevels) {
  new Chart(overallStatsCtx, {
    type: 'bar',
    data: {
      labels: ['Temperature', 'Humidity', 'CO2 Level', 'Oxygen Level'],
      datasets: [{
        data: [calculateAverage(temperatures), calculateAverage(humidities), calculateAverage(co2Levels), calculateAverage(oxygenLevels)],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function calculateAverage(array) {
  const sum = array.reduce((acc, val) => acc + val, 0);
  return sum / array.length;
}

generateRandomData();
