import { createRouter, createWebHashHistory } from 'vue-router';

import NxWelcome from 'app/NxWelcome.vue';
import productsRoutes from 'routes/products.routes';

const routes = [{ path: '/', component: NxWelcome }, ...productsRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
