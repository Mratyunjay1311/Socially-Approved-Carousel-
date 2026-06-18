# Socially Approved Video Carousel

## 🚀 Project Overview
This project is a social-media style video carousel inspired by modern short-video platforms. It includes an outer video feed and an inner modal-based carousel with advanced video interactions.

---

## 🛠 Tech Stack
- React (Vite)
- Node.js
- Express
- Swiper.js
- Axios

---

## 📦 Features

### Frontend
- Outer video carousel (20–30 videos optimized)
- Modal-based inner carousel
- Swiper slider (3 videos at a time)
- Video play/pause system
- Like & Share functionality
- Progress tracking
- Loading states

### Backend
- REST API using Express
- Dummy JSON database
- GET /videos
- POST /like
- POST /share

---

## ⚙️ Performance Optimization
- Lazy video loading using IntersectionObserver
- Only active slide plays
- Videos pause when out of viewport
- DOM optimized for 30–40 videos

---

## 📡 API Endpoints

### Get Videos
GET /videos/allVideos

### Like Video
POST /videos/like

### Share Video
POST /videos/share

---

## ▶️ How to Run

### Backend