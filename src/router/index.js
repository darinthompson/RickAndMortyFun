import Vue from "vue";
import VueRouter from "vue-router";
import BookList from "../views/BookList.vue";
import BookShow from "../views/BookShow.vue";
import BookCreate from "../views/BookCreate.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "book-list",
    component: BookList
  },
  {
    path: "/book/:id",
    name: "book-show",
    component: BookShow,
    props: true
  },
  {
    path: "/create",
    name: "book-create",
    component: BookCreate
  }
];

const router = new VueRouter({
  routes
});

export default router;
