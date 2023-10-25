/////////////////////////////////////////////////////////
// gateway chart//
function gateway() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const data = {
    labels: daysOfWeek, // Use day names as labels
    datasets: [
      {
        label: "Upload (Mbps)",
        borderColor: "rgba(255, 99, 132, 1)", // Red color for upload
        data: [10, 12, 8, 15, 10, 14, 12], // Upload data for each day
        fill: false,
      },
      {
        label: "Download (Mbps)",
        borderColor: "rgba(75, 192, 192, 1)", // Teal color for download
        data: [50, 60, 45, 55, 58, 52, 56], // Download data for each day
        fill: false,
      },
    ],
  };

  // Chart configuration
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Day of the Week",
          },
        },
        y: {
          title: {
            display: true,
            text: "Speed (Mbps)",
          },
        },
      },
    },
  };

  // Create a Chart.js chart
  const ctx = document.getElementById("internetChart").getContext("2d");
  new Chart(ctx, config);
}
gateway();

function sensor() {
  const timestamps = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];
  const sensorData = [80, 90, 85, 88, 92]; // Replace with actual sensor performance data

  // Chart configuration
  const data = {
    labels: timestamps,
    datasets: [
      {
        label: "Sensor Performance",
        borderColor: "rgba(75, 192, 192, 1)",
        data: sensorData,
        fill: false,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Time",
          },
        },
        y: {
          title: {
            display: true,
            text: "Performance",
          },
        },
      },
    },
  };

  // Create a Chart.js chart
  const ctx = document.getElementById("sensorChart").getContext("2d");
  new Chart(ctx, config);
}
sensor();

function navigator(){
    const sensorLabels = ["North", "East", "South", "West"];
    const sensorData = [80, 90, 85, 88]; // Replace with actual sensor performance data

    // Chart configuration
    const data = {
        labels: sensorLabels,
        datasets: [
            {
                label: "Sensor Performance",
                data: sensorData,
                borderColor: "rgba(75, 192, 192, 0.7)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                pointBackgroundColor: "rgba(75, 192, 192, 1)",
            },
        ],
    };

    const config = {
        type: "radar",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "Sensor Navigator chart",
                },
            },
            scales: {
                r: {
                    beginAtZero: true,
                    suggestedMin: 0,
                    suggestedMax: 100,
                },
            },
        },
    };

    // Create a Chart.js radar chart
    const ctx = document.getElementById("radarChart").getContext("2d");
    new Chart(ctx, config);
}
navigator()