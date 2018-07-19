import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import Login from '../components/GeneralViews/Login.vue'
// Admin pages
import Noticias from 'src/components/Dashboard/Views/Noticias.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Atendimento from 'src/components/Dashboard/Views/Atendimento.vue'
import Receitas from 'src/components/Dashboard/Views/Receitas.vue'
import Consultas from 'src/components/Dashboard/Views/Consultas.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
<<<<<<< HEAD
    redirect: '/admin/noticias'
=======
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'    
>>>>>>> da18c5c5bf459037d5f643448b4094c00a015a90
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/noticias',
    children: [
      {
        path: 'noticias',
        name: 'Noticias',
        component: Noticias
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'atendimento',
        name: 'Atendimento',
        component: Atendimento
      },
      {
        path: 'receitas',
        name: 'Receitas',
        component: Receitas
      },
      {
        path: 'consultas',
        name: 'Consultas',
        component: Consultas
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
