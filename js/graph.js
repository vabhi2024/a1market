const ctx = document.getElementById("rateChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Diesel",
      "Petrol",
      "CNG",
      "LPG",
      "Gold",
      "Silver",
      "Mentha Oil"
    ],
    datasets: [{
      label: "Market Price ₹",
      data: [
        95.36,
        101.86,
        95.75,
        979.50,
        149796,
        223682,
        1290
      ],
      backgroundColor: [
        "#16a34a",
        "#22c55e",
        "#4ade80",
        "#eab308",
        "#f59e0b",
        "#9ca3af",
        "#06b6d4"
      ]
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 250000,
        ticks: {
          stepSize: 50000
        }
      }
    }
  }
});
