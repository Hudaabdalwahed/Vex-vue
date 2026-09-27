import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import BlogView from "@/views/BlogView.vue";
import BlogDetailsView from "@/views/BlogDetailsView.vue";
import ContactView from "@/views/ContactView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductView,
  },
  {
    path: "/product-details/:id",
    name: "product-details",
    component: ProductDetailsView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/blog-details/:id",
    name: "blogdetails",
    component: BlogDetailsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
