<template>
  <div>
    <h2>Criar Produto</h2>
    <form @submit.prevent="createProduct">
      <div>
        <label>Nome:</label>
        <input type="text" v-model="product.name" required />
      </div>
      <div>
        <label>Descrição:</label>
        <textarea v-model="product.description"></textarea>
      </div>
      <div>
        <label>Quantidade:</label>
        <input type="number" v-model="product.quantity" required />
      </div>
      <div>
        <label>Preço:</label>
        <input type="number" v-model="product.price" step="0.01" required />
      </div>
      <div>
        <label>Fornecedor:</label>
        <input type="text" v-model="product.supplier" required />
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
        description: "",
        quantity: 0,
        price: 0.0,
        supplier: "",
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
