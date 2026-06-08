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
87.81,
94.57,
92.75,
960,
16150,
295000,
1050
],

backgroundColor:[
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

responsive:true,

scales: {

y: {

min:0,
max:1500,

ticks:{
stepSize:500
}

}

}

}

});