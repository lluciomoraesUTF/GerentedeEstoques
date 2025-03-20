<template>
  <div>
    <h1>Lista de Produtos</h1>
    <button @click="$router.push('/products/new')">Adicionar Produto</button>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="viewProduct(product.id)">Detalhes</button>
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

export default  {
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
    viewProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    editProduct(id) {
      this.$router.push(`/products/${id}/edit`);
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
/* Estilos básicos */
</style>
