<template>
  <div>
    <h2>Cadastro</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label>Usuário:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Cadastrar</button>
      <p @click="toggleForm">Já possui uma conta? Faça login</p>
    </form>
  </div>
</template>

<script>
import AuthService from "../services/AuthService";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    const user = AuthService.getCurrentUser();
    if (!user) {
      alert("Você precisa estar logado para acessar esta página!");
      this.$router.push("/login");
    }
  },
  methods: {
    async handleRegister() {
      try {
        await AuthService.register(this.username, this.password);
        alert("Cadastro realizado com sucesso!");
        this.$router.push("/login");
      } catch (error) {
        alert("Erro ao realizar cadastro!");
        console.error(error);
      }
    },
    toggleForm() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
p {
  cursor: pointer;
  color: blue;
}
</style>
