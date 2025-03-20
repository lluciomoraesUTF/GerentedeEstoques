<template>
  <div style="text-align: center">
    <h1>Lista de Produtos</h1>
    <button @click="$router.push('/products/create')">Adicionar Produto</button>
    <table style="margin: 20px auto; border-collapse: collapse">
      <thead>
        <tr>
          <th style="padding: 10px; border: 1px solid #ddd">Nome</th>
          <th style="padding: 10px; border: 1px solid #ddd">Preço</th>
          <th style="padding: 10px; border: 1px solid #ddd">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td style="padding: 10px; border: 1px solid #ddd">
            {{ product.name }}
          </td>
          <td style="padding: 10px; border: 1px solid #ddd">
            R$ {{ product.price.toFixed(2) }}
          </td>
          <td style="padding: 10px; border: 1px solid #ddd">
            <button @click="editProduct(product.id)">Editar</button>
            <button @click="deleteProduct(product.id)">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductService from "../services/ProductService";

export default {
  name: "ProductList",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await ProductService.getProducts();
        this.products = response.data;
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    },
    editProduct(id) {
      this.$router.push(`/products/edit/${id}`);
    },
    async deleteProduct(id) {
      try {
        await ProductService.deleteProduct(id);
        this.fetchProducts();
      } catch (error) {
        console.error("Erro ao deletar produto:", error);
      }
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style>
/* Estilo básico para centralização */
body {
  text-align: center;
  font-family: Arial, sans-serif;
}
table {
  width: 50%;
}
button {
  margin: 5px;
}
</style>
