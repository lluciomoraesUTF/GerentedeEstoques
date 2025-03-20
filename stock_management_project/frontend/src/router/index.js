import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";
import ProductCreate from "../components/ProductCreate.vue";
import ProductEdit from "../components/ProductEdit.vue";
import ProductDetails from "../components/ProductDetails.vue";
import LoginVue from "../components/LoginVue.vue";
import CadastroVue from "../components/CadastroVue.vue";

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/products/create",
    name: "ProductCreate",
    component: ProductCreate,
  },
  {
    path: "/products/edit/:id",
    name: "ProductEdit",
    component: ProductEdit,
    props: true,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginVue,
  },
  {
    path: "/register",
    name: "Cadastro",
    component: CadastroVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
