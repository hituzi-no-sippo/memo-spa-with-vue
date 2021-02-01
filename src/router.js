import { createRouter, createWebHistory } from 'vue-router'
import TitleList from './views/TitleList.vue'
import EditView from './views/EditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: { TitleList },
    props: true,
  },
  {
    path: '/edit/:index',
    name: 'editViewOpen',
    components: { TitleList, EditView },
    props: {
      TitleList: true,
      EditView: true,
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
