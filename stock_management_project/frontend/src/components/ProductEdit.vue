<template>
  <div>
    <h2>Editar Produto</h2>
    <form @submit.prevent="updateProduct">
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
        description: "",
        quantity: 0,
        price: 0.0,
        supplier: "",
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
