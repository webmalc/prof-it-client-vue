import Vue from 'vue'
import Router from 'vue-router'
import ContentItem from '@/components/ContentItem'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: ContentItem
    }
  ]
})
