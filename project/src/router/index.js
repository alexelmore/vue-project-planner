import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddProject from "../views/AddProject.vue";
import EditProject from "../views/EditProject.vue";
import NotFound from "../views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProject,
  },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: EditProject,
    props: true,
  },
  // Not found 404 catch all
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
