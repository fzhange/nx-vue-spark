import { createRouter, createWebHashHistory } from 'vue-router';

import HelloWorld from '../components/hello-world/index.vue';
import NxWelcome from '../app/NxWelcome.vue';

const routes = [
  { path: '/', component: NxWelcome },
  { path: '/about', component: HelloWorld },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
