<template>
    <div>
      <h2>Detalhes do Produto</h2>
      <p><strong>Nome:</strong> {{ product.name }}</p>
      <p><strong>Preço:</strong> {{ product.price }}</p>
      <button @click="$router.push('/products')">Voltar</button>
    </div>
  </template>
  
  <script>
  import ProductService from "../services/ProductService";
  
  export default {
    data() {
      return {
        product: {},
      };
    },
    methods: {
      async fetchProduct() {
        try {
          const response = await ProductService.getProduct(this.$route.params.id);
          this.product = response.data;
        } catch (error) {
          console.error("Erro ao buscar detalhes:", error);
        }
      },
    },
    created() {
      this.fetchProduct();
    },
  };
  </script>
  