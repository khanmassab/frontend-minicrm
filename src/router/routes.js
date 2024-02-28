import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AdminLogin from '../components/Auth/AdminLogin.vue';
import Companies from '../components/Admin/Companies.vue';
import Employees from '../components/Admin/Employees.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/companies",
    name: "Companies",
    component: Companies,
  },
  {
    path: "/employees",
    name: "Employees",
    component: Employees,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
