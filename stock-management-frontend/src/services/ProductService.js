import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api"; 
export default {
  getProducts() {
    return axios.get(`${API_URL}/products/`);
  },
  createProduct(product) {
    return axios.post(`${API_URL}/products/`, product);
  },
  updateProduct(productId, product) {
    return axios.put(`${API_URL}/products/${productId}/`, product);
  },
  deleteProduct(productId) {
    return axios.delete(`${API_URL}/products/${productId}/`);
  },
  getProduct(productId) {
    return axios.get(`${API_URL}/products/${productId}/`);
  },
};
