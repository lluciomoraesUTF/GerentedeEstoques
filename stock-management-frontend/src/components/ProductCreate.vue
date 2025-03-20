<template>
    <div>
      <h2>Criar Produto</h2>
      <form @submit.prevent="createProduct">
        <div>
          <label>Nome:</label>
          <input type="text" v-model="product.name" required />
        </div>
        <div>
          <label>Preço:</label>
          <input type="number" v-model="product.price" required />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  </template>
  
  <script>
  import ProductService from "../services/ProductService";
  
  export default {
    data() {
      return {
        product: {
          name: "",
          price: 0,
        },
      };
    },
    methods: {
      async createProduct() {
        try {
          await ProductService.createProduct(this.product);
          this.$router.push("/products");
        } catch (error) {
          console.error("Erro ao criar produto:", error);
        }
      },
    },
  };
  </script>
  