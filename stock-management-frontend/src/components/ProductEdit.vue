<template>
    <div>
      <h2>Editar Produto</h2>
      <form @submit.prevent="updateProduct">
        <div>
          <label>Nome:</label>
          <input type="text" v-model="product.name" required />
        </div>
        <div>
          <label>Preço:</label>
          <input type="number" v-model="product.price" required />
        </div>
        <button type="submit">Salvar Alterações</button>
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
      async fetchProduct() {
        try {
          const response = await ProductService.getProduct(this.$route.params.id);
          this.product = response.data;
        } catch (error) {
          console.error("Erro ao buscar produto:", error);
        }
      },
      async updateProduct() {
        try {
          await ProductService.updateProduct(this.$route.params.id, this.product);
          this.$router.push("/products");
        } catch (error) {
          console.error("Erro ao atualizar produto:", error);
        }
      },
    },
    created() {
      this.fetchProduct();
    },
  };
  </script>
  