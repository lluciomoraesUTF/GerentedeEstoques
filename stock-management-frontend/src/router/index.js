import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ProductCreate from '../components/ProductCreate.vue';
import ProductEdit from '../components/ProductEdit.vue';
import ProductDetails from '../components/ProductDetails.vue';

// Definição das rotas
const routes = [
  { path: '/', name: 'products', redirect: '/products' }, // Redireciona da raiz para '/products'
  { path: '/products', component: ProductList },
  { path: '/products/new', component: ProductCreate },
  { path: '/products/:id/edit', component: ProductEdit },
  { path: '/products/:id', component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
