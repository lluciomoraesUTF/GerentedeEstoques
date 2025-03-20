<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Usuário:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
      <p @click="toggleForm">Não possui uma conta? Cadastre-se</p>
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
  methods: {
    async handleLogin() {
      try {
        await AuthService.login(this.username, this.password);
        alert("Login realizado com sucesso!");
        this.$router.push("/home");
      } catch (error) {
        alert("Erro ao realizar login!");
        console.error(error);
      }
    },
    toggleForm() {
      this.$router.push("/register");
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
