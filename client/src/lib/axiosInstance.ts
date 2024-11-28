import axios, { AxiosInstance, AxiosError } from 'axios';

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
  timeout: 30000,  // Timeout in ms (adjust as needed)
  headers: {
    'Content-Type': 'application/json',
    // Add additional headers if needed
  },
});

// Request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token to request if available
    const token = sessionStorage.getItem('authToken');  // Replace with your token storage logic
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle any errors before request is sent
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error: AxiosError) => {
    // Handle global errors
    if (error.response) {
      // Server responded with a status outside the range 2xx
      console.error('API error:', error.response.data);
      // You can dispatch global error handling actions or show notifications
    } else if (error.request) {
      // No response received (e.g., network error)
      console.error('Network error:', error.message);
    } else {
      // General error
      console.error('Error:', error.message);
    }
    // Optionally, you can also reject the error if you want to handle it in the calling code
    return Promise.reject(error);
  }
);

export default axiosInstance;
