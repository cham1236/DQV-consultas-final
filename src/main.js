import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data:{
    CPF: '87262789222',
    perfis: [
      { value: 'paciente', text: 'Paciente' },
      { value: 'atendente', text: 'Atendente' },
      { value: 'coordenador', text: 'Coordenador' },
      { value: 'medico', text: 'Médico' }
    ],
    perfil: 'paciente',
    consultas:[
      {
        especialidade: 'Cardiologista',
        medico: 'Alessandro Lima',
        dataCons: '12-09-2018 12:55:00 pm',
        status: 'Pendente',
        cpfPaciente: '87262789222' 
      },
      {
        especialidade: 'Cardiologista',
        medico: 'Carlos Azevedo',
        dataCons: '12-09-2018 12:55:00 pm',
        status: 'Pendente',
        cpfPaciente: '738393922929'
      }
    ]
  }
})
