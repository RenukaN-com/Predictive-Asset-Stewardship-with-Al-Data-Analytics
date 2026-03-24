// JavaScript to handle real-time data updates and interactions for Road Wear Prediction Dashboard

// Initial placeholder data (simulate real-time scenario)
let weatherData = {
    temperature: 32,
    humidity: 65,
    windSpeed: 15,
    trafficVolume: 1234
};

let roadWearIndex = 5.8;

// Update Road Wear Status dynamically
function updateRoadWearStatus() {
    const statusEl = document.getElementById('wearStatus');
    const indicatorEl = document.getElementById('wearIndicator');
    const wearValEl = document.getElementById('wearValue');

    wearValEl.innerText = roadWearIndex.toFixed(1);

    if (roadWearIndex <= 4) {
        statusEl.innerText = 'Safe';
        indicatorEl.className = 'w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md';
        indicatorEl.innerHTML = '<i class="bi bi-check-lg text-white text-xl"></i>';
    } else if (roadWearIndex <= 7) {
        statusEl.innerText = 'Warning';
        indicatorEl.className = 'w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-md';
        indicatorEl.innerHTML = '<i class="bi bi-exclamation-lg text-white text-xl"></i>';
    } else {
        statusEl.innerText = 'Critical';
        indicatorEl.className = 'w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-md';
        indicatorEl.innerHTML = '<i class="bi bi-x-lg text-white text-xl"></i>';
    }
}

// Update weather block
function updateWeather() {
    document.getElementById('temperature').innerText = `${weatherData.temperature}°C`;
    document.getElementById('humidity').innerText = `${weatherData.humidity}%`;
    document.getElementById('windSpeed').innerText = `${weatherData.windSpeed} km/h`;
}

// Alert display for wear condition
function showAlert() {
    const alertList = document.getElementById('alertsList');
    let alertMessage = '';
    if (roadWearIndex > 7) {
        alertMessage = `<div class="alert-item border-l-4 bg-red-50 border-red-300 p-4 rounded shadow-sm pulse-animation">
            <div class="flex"><div class="flex-shrink-0"><i class="bi bi-exclamation-triangle-fill text-red-500 text-xl"></i></div>
            <div class="ml-3"><p class="text-sm font-medium">🚧 Critical Alert! Maintenance required for high wear levels.</p>
            <p class="text-xs text-gray-500 mt-1">Just now</p></div></div></div>`;
    } else if (roadWearIndex > 5) {
        alertMessage = `<div class="alert-item border-l-4 bg-yellow-50 border-yellow-300 p-4 rounded shadow-sm">
            <div class="flex"><div class="flex-shrink-0"><i class="bi bi-exclamation-circle-fill text-yellow-500 text-xl"></i></div>
            <div class="ml-3"><p class="text-sm font-medium">⚠️ Warning: Increased wear detected. Plan maintenance soon.</p>
            <p class="text-xs text-gray-500 mt-1">Just now</p></div></div></div>`;
    }
    if (alertMessage !== '') {
        alertList.innerHTML = alertMessage + alertList.innerHTML;
    }
}

// Simulate data updates
function fetchRealTimeData() {
    weatherData.temperature += Math.random() > 0.5 ? 1 : -1;
    weatherData.humidity += Math.random() > 0.5 ? 2 : -2;
    weatherData.windSpeed += Math.random() > 0.5 ? 1 : -1;
    weatherData.trafficVolume += Math.floor(Math.random() * 20) - 10;

    roadWearIndex = Math.min(10, Math.max(0, roadWearIndex + (Math.random() > 0.5 ? 0.1 : -0.1)));

    updateWeather();
    updateRoadWearStatus();
    showAlert();
}

// Set periodic updates
setInterval(fetchRealTimeData, 60000); // every 1 minute

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    updateWeather();
    updateRoadWearStatus();
    showAlert();
});
