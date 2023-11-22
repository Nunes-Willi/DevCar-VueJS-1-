import axios from "axios";

const api = axios.create({
  baseURL: "https://exercicio-garagem-django-1-dev-qrxg.1.us-1.fl0.io/api/",
});

export default api;
