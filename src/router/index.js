import Vue from 'vue'
import VueRouter from 'vue-router'
import Result from '../components/Result'
import Player from "../components/Player";
import Comment from "../components/Comment";
import Video from "../components/Video";

Vue.use(VueRouter)

const routes = [
  {
    path: "/result/:keyword?",
    component: Result,
  },
  {
    path: "/play/:id?",
    component: Player,
  },
  {
    path: "/comment/:id?",
    component: Comment,
  },
  {
    path: "/video/:mvid?",
    component: Video,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
