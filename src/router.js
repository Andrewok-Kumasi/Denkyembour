import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutAuthor from "@/components/AboutAuthor.vue";
import ProjectPage from "@/components/ProjectPage.vue";
import ResearchPage from "@/components/ResearchPage.vue";
import PublicationPage from "@/components/PublicationPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutAuthor",
    component: AboutAuthor,
  },
  {
    path: "/project",
    name: "Project",
    component: ProjectPage,
  },
  {
    path: "/research",
    name: "ResearchPage",
    component: ResearchPage,
  },
  {
    path: "/publication",
    name: "PublicationPage",
    component: PublicationPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/my-app",
  routes,
});

export default router;
