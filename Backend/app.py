from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
import pickle
import os

app = Flask(__name__)
CORS(app)

# Path to GBM and LSTM model files (relative to this file's directory)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
gbm_model_path = os.path.join(BASE_DIR, 'models', 'road_wear_gbm_model.pkl')
lstm_model_path = os.path.join(BASE_DIR, 'models', 'road_wear_lstm_model.h5')

# Check if the model files exist
if not os.path.exists(gbm_model_path):
    raise FileNotFoundError(f"GBM model file not found at {gbm_model_path}")

if not os.path.exists(lstm_model_path):
    raise FileNotFoundError(f"LSTM model file not found at {lstm_model_path}")

# Load the LSTM model
lstm_model = load_model(lstm_model_path)

# Load the GBM model
try:
    with open(gbm_model_path, 'rb') as f:
        gbm_model = pickle.load(f)
    print("GBM model loaded successfully.")
    print("GBM model type:", type(gbm_model))
except Exception as e:
    print(f"Error loading GBM model: {e}")
    raise

@app.route('/')
def health_check():
    return jsonify({"status": "ok", "message": "Predictive Asset Stewardship API is running"})

@app.route('/api/predict-road-wear', methods=['GET'])
def predict_road_wear():
    # Example data for prediction (replace with real data)
    traffic_data = np.random.rand(10)  # Simulated traffic data (10 features)
    weather_data = np.random.rand(10)  # Simulated weather data (10 features)

    # Combine traffic and weather data into a single input array (20 features)
    input_data = np.concatenate((traffic_data, weather_data), axis=0).reshape(1, 20)  # Shape (1, 20)

    # If you have 20 features, keep only the first 19 features (as the model expects 19 features)
    input_data = input_data[:, :19]  # Select only the first 19 features

    # Reshape the data to match (None, 1, 19) for LSTM input
    input_data = input_data.reshape(1, 1, 19)  # Shape (1, 1, 19)

    # Use LSTM model to extract features
    lstm_features = lstm_model.predict(input_data)

    # Flatten the lstm_features (convert to a 1D array)
    lstm_features_flat = lstm_features.flatten()

    # Ensure the GBM model is correctly loaded and is a valid scikit-learn model
    if hasattr(gbm_model, 'predict'):
        # Use GBM model to make the final prediction based on LSTM features
        predicted_wear = gbm_model.predict([lstm_features_flat])
        print("Prediction successful.")
    else:
        return jsonify({"error": "GBM model not loaded correctly."}), 500

    # Return prediction as JSON
    return jsonify({
        "predictedWear": float(predicted_wear[0]),
        "forecastTime": '2025-03-21T14:00:00'
    })

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
