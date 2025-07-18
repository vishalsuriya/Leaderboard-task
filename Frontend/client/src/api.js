import axios from 'axios';

const API_BASE_URL = axios.create({
  baseURL: 'https://leaderboard-task-zzpe.onrender.com/api',
});

export default API_BASE_URL;
