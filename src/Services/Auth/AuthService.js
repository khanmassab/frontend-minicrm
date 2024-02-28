import { apiCall } from '../apiConfig.js';

const AuthService = {
  async login(method, endpoint, formData) 
  {
      const body = JSON.stringify({ 
        email: formData.email, 
        password: formData.password 
      });

      const response = await apiCall(method, endpoint, body);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response}`);
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      window.location.href = '/';
  },
  logout() 
  {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  },
  isAuthenticated() 
  {
    const token =  localStorage.getItem('token') !== null;
    return token;
  }
};


export default AuthService;
