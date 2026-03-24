<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge" alt="Status: Live" />
  <img src="https://img.shields.io/badge/Python-3.10-blue?style=for-the-badge&logo=python&logoColor=white" alt="Python 3.10" />
  <img src="https://img.shields.io/badge/Flask-Backend-black?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
  <img src="https://img.shields.io/badge/TensorFlow-LSTM-orange?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow" />
  <img src="https://img.shields.io/badge/Deployed-Vercel%20%2B%20Render-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployed" />
</p>

# 🛣️ Predictive Asset Stewardship with AI & Data Analytics

> **AI-powered Road Wear Prediction System** — Predict road deterioration before it happens using hybrid LSTM + GBM machine learning models, real-time traffic data, and live weather intelligence.

<p align="center">
  <a href="https://astreonai.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🔗%20View%20Live%20Dashboard-astreonai.vercel.app-blue?style=for-the-badge&logoColor=white" alt="Live Demo" />
  </a>
</p>

---

## 🎯 Problem Statement

Road infrastructure degrades over time due to traffic loads, weather conditions, and material fatigue. Traditional maintenance is **reactive** — repairs happen *after* damage is visible, leading to:
- 🚧 Higher repair costs
- ⚠️ Safety hazards for commuters
- 🕐 Traffic disruptions during emergency repairs

**Our solution**: A **predictive system** that forecasts road wear *before* it becomes critical, enabling proactive and cost-effective maintenance planning.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🤖 **Hybrid ML Model** | LSTM (time-series) + GBM (gradient boosting) for accurate Road Wear Index prediction |
| 🌦️ **Live Weather Integration** | Real-time temperature, humidity & wind data via OpenWeatherMap API |
| 📊 **Interactive Dashboard** | 10+ Chart.js visualizations — wear trends, traffic composition, speed distribution, forecasts |
| 🚨 **Smart Alerts** | Color-coded alerts (✅ Safe · ⚠️ Warning · 🔴 Critical) with audio notifications |
| 🗺️ **Route Mapping** | Visual road segments map showing 11 monitored routes in Pune |
| 📈 **Scenario Forecasting** | Adjust traffic & weather sliders to simulate future wear conditions |
| 🔄 **Real-Time Updates** | Dashboard auto-refreshes every 60 seconds with latest data |
| 📅 **Historical Analysis** | 2-month RWI trends with route-wise comparison tables |

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────┐
│                    FRONTEND (Vercel)                  │
│          HTML + JavaScript + Chart.js + TailwindCSS   │
│               https://astreonai.vercel.app            │
└───────────────────────┬──────────────────────────────┘
                        │ API Calls
                        ▼
┌──────────────────────────────────────────────────────┐
│                   BACKEND (Render)                    │
│                  Flask + Gunicorn                     │
│                                                      │
│   ┌─────────────┐    ┌─────────────┐                │
│   │  LSTM Model  │───▶│  GBM Model  │──▶ Prediction │
│   │  (.h5 file)  │    │ (.pkl file) │                │
│   └─────────────┘    └─────────────┘                │
└───────────────────────┬──────────────────────────────┘
                        │
                        ▼
              ┌───────────────────┐
              │  OpenWeatherMap   │
              │       API         │
              └───────────────────┘
```

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Python 3.10 | Core language |
| Flask | REST API framework |
| TensorFlow / Keras | LSTM model for time-series feature extraction |
| scikit-learn | GBM model for wear prediction |
| NumPy / Pandas | Data processing |
| Gunicorn | Production WSGI server |

### Frontend
| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| JavaScript (ES6+) | Dashboard logic & real-time updates |
| Chart.js | Interactive data visualizations |
| TailwindCSS | Responsive UI styling |
| Bootstrap Icons | Iconography |

### Infrastructure
| Service | Purpose |
|---|---|
| **Vercel** | Frontend hosting (static site) |
| **Render** | Backend hosting (Python web service) |
| **OpenWeatherMap** | Live weather data API |

---

## 📁 Project Structure

```
Predictive-Asset-Stewardship-with-Al-Data-Analytics/
│
├── Backend/
│   ├── app.py                              # Flask API server
│   ├── requirements.txt                    # Python dependencies
│   ├── Procfile                            # Render start command
│   ├── render.yaml                         # Render service config
│   ├── .python-version                     # Python version pin (3.10)
│   ├── models/
│   │   ├── road_wear_lstm_model.h5         # Trained LSTM model
│   │   ├── road_wear_gbm_model.pkl         # Trained GBM model
│   │   └── scaler.pkl                      # Feature scaler
│   ├── final_preprocessed_road_data.csv    # Processed dataset
│   ├── simulated_road_data.csv             # Raw simulated data
│   └── data processing file.ipynb          # Data preparation notebook
│
├── Frontend/
│   ├── index.html                          # Main dashboard page
│   ├── script.js                           # Real-time update logic
│   ├── wearMetrics.js                      # MAE, RMSE, R² calculations
│   ├── styless.css                         # Additional styles
│   ├── vercel.json                         # Vercel deployment config
│   └── .env.example                        # Environment variable docs
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Git

### Run Locally

```bash
# Clone the repository
git clone https://github.com/RenukaN-com/Predictive-Asset-Stewardship-with-Al-Data-Analytics.git
cd Predictive-Asset-Stewardship-with-Al-Data-Analytics

# Backend
cd Backend
pip install -r requirements.txt
python app.py
# API runs at http://localhost:5000

# Frontend — just open in browser
cd ../Frontend
# Open index.html in your browser, or use a local server:
python -m http.server 8080
# Dashboard at http://localhost:8080
```

---

## 📊 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check — returns API status |
| `GET` | `/api/predict-road-wear` | Returns predicted Road Wear Index using LSTM + GBM models |

### Sample Response

```json
{
  "predictedWear": 6.42,
  "forecastTime": "2025-03-21T14:00:00"
}
```

---

## 📈 ML Model Performance

| Metric | Value |
|---|---|
| **Mean Absolute Error (MAE)** | Computed in real-time |
| **Root Mean Square Error (RMSE)** | Computed in real-time |
| **R² Score** | Displayed with ✅ (≥ 0.9) or ⚠️ (< 0.9) indicator |

The hybrid model pipeline:
1. **LSTM** extracts temporal features from traffic + weather time-series data
2. **GBM** uses extracted features to predict the final Road Wear Index (0–10 scale)

---

## 🗺️ Monitored Routes (Pune, India)

| # | Route | Material |
|---|---|---|
| 1 | Shivajinagar Bus Stand Road | Asphalt |
| 2 | Old Mumbai-Pune Highway (NH 60) | Concrete |
| 3 | Mumbai-Pandharpur Road | Asphalt |
| 4 | Sangamwadi Bridge | Concrete |
| 5 | Sangam Bridge (Ground Level) | Asphalt |
| 6 | RTO Road | Concrete |
| 7 | Mumbai-Pandharpur Road (Outbound) | Asphalt |
| 8 | Old Mumbai-Pune Highway (Outbound) | Concrete |
| 9 | Exit Ramp to JM Road | Asphalt |
| 10 | COEP Road | Concrete |
| 11 | Exit Ramp to RTO Road | Asphalt |

---

## 🌐 Deployment

| Component | Platform | URL |
|---|---|---|
| **Frontend** | Vercel | [astreonai.vercel.app](https://astreonai.vercel.app/) |
| **Backend** | Render | Deployed as web service |

---

## 🔮 Future Roadmap

- [ ] IoT sensor integration for real-time field data
- [ ] GIS-based visualization with interactive maps
- [ ] Mobile app for field engineers
- [ ] Automated maintenance scheduling with cost optimization
- [ ] Multi-city expansion with regional models

---

## 👥 Team

Built as part of an academic project (Aug 2024 — May 2025)

---

## 📄 License

This project is for academic and demonstration purposes.

---

<p align="center">
  <b>Built with ❤️ for smarter infrastructure</b><br/>
  <a href="https://astreonai.vercel.app/">View Live Dashboard →</a>
</p>
