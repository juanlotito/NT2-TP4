import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter) 

  import Formulario from './components/Formulario.vue'
  import Api from './components/Api.vue'

  export const router= new VueRouter ({
      mode: 'history',
      routes: [
          {path:'/', component: Formulario},
          {path: '/formulario', component: Formulario},
          {path: '/api', component: Api},
      ]
  })