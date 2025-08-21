// Analytical and simulation functions for wear metrics

function calculateWearIndex(trafficVolume, weatherSeverity) {
    // Example basic formula
    return (trafficVolume * 0.5 + weatherSeverity * 0.5) / 20;
}

// Function to calculate error metrics between actual and predicted wear
function calculateMetrics() {
    const actual = window.wearChart.data.datasets[0].data.map(Number);
    const predicted = window.wearChart.data.datasets[1].data.map(Number);
    const n = actual.length;

    let sumAbsError = 0;
    let sumSquaredError = 0;
    let sumActual = 0;
    let ssTotal = 0;
    let ssResidual = 0;

    for (let i = 0; i < n; i++) {
        const error = predicted[i] - actual[i];
        sumAbsError += Math.abs(error);
        sumSquaredError += error * error;
        sumActual += actual[i];
    }

    const mae = (sumAbsError / n).toFixed(2);
    const rmse = Math.sqrt(sumSquaredError / n).toFixed(2);
    const meanActual = sumActual / n;

    for (let i = 0; i < n; i++) {
        ssTotal += Math.pow(actual[i] - meanActual, 2);
        ssResidual += Math.pow(actual[i] - predicted[i], 2);
    }

    const r2 = (1 - (ssResidual / ssTotal)).toFixed(3);

    // Output metrics to the dashboard
    document.getElementById('metricsOutput').innerHTML = `
        <p><strong>Mean Absolute Error (MAE):</strong> ${mae}</p>
        <p><strong>Root Mean Square Error (RMSE):</strong> ${rmse}</p>
        <p><strong>R² Score:</strong> ${r2} ${r2 >= 0.9 ? '✅' : '⚠️'}</p>
    `;
}
