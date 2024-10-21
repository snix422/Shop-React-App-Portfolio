import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios"

const apiClient = axios.create ({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
      },
    timeout: 5000
});

const requestLogger = (config:InternalAxiosRequestConfig) => {
    console.log(
        `Zapytanie ${config.method?.toUpperCase()} pod ${config.url} zarejestrowano o ${new Date().toISOString()}`
      );
      return config;
}

apiClient.interceptors.request.use(
    requestLogger,
    (error:AxiosError) => {
      return Promise.reject(error);
    }
  );
  
  apiClient.interceptors.response.use((response:AxiosResponse) => {
    return new Promise<AxiosResponse>((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  }, (error:AxiosError) => {
    return Promise.reject(error);
  });
  
  export default apiClient;
    