<template>
  <div>
    <h2>Detalhes do Produto</h2>
    <p><strong>Nome:</strong> {{ product.name }}</p>
    <p><strong>Descrição:</strong> {{ product.description }}</p>
    <p><strong>Quantidade:</strong> {{ product.quantity }}</p>
    <p><strong>Preço:</strong> R$ {{ product.price.toFixed(2) }}</p>
    <p><strong>Fornecedor:</strong> {{ product.supplier }}</p>
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
