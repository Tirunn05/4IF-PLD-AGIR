import axios from 'axios';

export const api = axios.create({
  // Ici on combine tout : l'URL de base + le préfixe gameNR + le préfixe NestJS api
  baseURL: `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_APP_PREFIX}/api` 
});