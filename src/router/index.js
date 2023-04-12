import { createRouter, createWebHistory } from 'vue-router'
import Home from  "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path : "/",
    name :"Home",
    component : Home,
    meta:{
      title : "Ip Address Tracker"
    }
  }
   
  ]
})

router.beforeEach((to , from , next) =>{
  document.title =  `${to.meta.title}`
  next()
})
export default router
