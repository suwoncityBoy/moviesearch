import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'

export default createRouter({
  // Hash 모드
  history: createWebHashHistory(),

  scrollBehavior() {       
    return { top : 0}
  },

  // routes는 페이지들을 구분 해 줌
  routes: [
    {       
      path: '/',      // 메인페이지로 접근  
      component: Home   // 해당 페이지 컴포넌트 실행
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    // {
    //   path: '/movie',
    //   component: Movie
    // },
    {
      path: '/about',   // about 페이지로 이동
      component: About     // 해당 페이지 컴포넌트 실행
    },
    {
      path: '/:NotFound(.*)',
      component: NotFound
    }
  ]
})