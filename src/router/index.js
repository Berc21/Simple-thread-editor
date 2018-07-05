import Vue from 'vue'
import Router from 'vue-router'
import ThreadEditor from '@/components/ThreadEditor'
import CreateButton from '@/components/CreateButton'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {

      path: '/create-thread',
      name: 'ThreadEditor',
      component: ThreadEditor
    },
    {
      path: '/',
      name: 'CreateButton',
      component: CreateButton
    }
  ]
})
