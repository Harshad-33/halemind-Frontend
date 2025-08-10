import axios from 'axios';

// In production, use the backend URL from Netlify's environment variable VITE_API_BASE
// In development, fall back to '/api' so local proxy works
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api',
  timeout: 10000,
});

export default api;
