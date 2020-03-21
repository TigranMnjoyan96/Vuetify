import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/home/Home.vue";
import Login from "../components/auth/Login.vue";
import Registration from "../components/auth/Registration.vue";
import NewBooks from "../components/books/NewBooks.vue";
import BookList from "../components/books/BookList.vue";
import Book from "../components/books/Book.vue";
import Orders from "../components/user/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration
  },
  {
    path: "/new",
    name: "newbooks",
    component: NewBooks
  },
  {
    path: "/list",
    name: "booklist",
    component: BookList
  },
  {
    path: "/book/:id",
    name: "book",
    props: true,
    component: Book
  },
  {
    path: "/orders",
    name: "orders",
    component: Orders
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
