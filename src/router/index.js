import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/demo/01_RefView.vue')
    },
    {
      path: '/attribute',
      name: 'attribute',
      component: () => import('../views/demo/02_AttributeView.vue')
    },
    {
      path: '/v-on',
      name: 'v-on',
      component: () => import('../views/demo/03_VOnView.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('../views/demo/04_VModelView.vue')
    },
    {
      path: '/v-if',
      name: 'v-if',
      component: () => import('../views/demo/05_VifView.vue')
    },
    {
      path: '/v-for',
      name: 'v-for',
      component: () => import('../views/demo/06_VForView.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/demo/07_refView.vue')
    }
  ]
});

export default router;
