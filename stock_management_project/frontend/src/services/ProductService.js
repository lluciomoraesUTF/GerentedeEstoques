import axios from "axios";

const API_URL = "http://localhost:8000/api/products/";

export default {
  getProducts() {
    return axios.get(API_URL);
  },
  getProduct(id) {
    return axios.get(`${API_URL}${id}/`);
  },
  createProduct(product) {
    return axios.post(API_URL, product);
  },
  updateProduct(id, product) {
    return axios.put(`${API_URL}${id}/`, product);
  },
  deleteProduct(id) {
    return axios.delete(`${API_URL}${id}/`);
  },
};
