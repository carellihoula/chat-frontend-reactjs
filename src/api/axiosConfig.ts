import axios from "axios";

// basic Configuration Axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // Remplacez par l'URL de votre backend en production
  headers: {
    "Content-Type": "application/json",
  },
});

//Add an interceptor to include the authentication token in requests if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Vérifier si les headers existent déjà, sinon les initialiser
      config.headers = config.headers || {};
      // Ajouter le token d'authentification dans l'en-tête Authorization
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Gérer les erreurs de configuration de la requête
    return Promise.reject(error);
  }
);

export default axiosInstance;
