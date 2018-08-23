import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import Login from '../components/GeneralViews/Login.vue'
// Admin pages
import Noticias from 'src/components/Dashboard/Views/Noticias.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import AgendarAtendimento from 'src/components/Dashboard/Views/AgendarAtendimento.vue'
import Receitas from 'src/components/Dashboard/Views/Receitas.vue'
import MinhasConsultas from 'src/components/Dashboard/Views/MinhasConsultas.vue'
import MarcarConsulta from 'src/components/Dashboard/Views/MarcarConsulta.vue'
import MarcarConsultaPaciente from 'src/components/Dashboard/Views/MarcarConsultaPaciente.vue'
import ListarConsultas from 'src/components/Dashboard/Views/ListarConsultas.vue'
import MeusAtendimentos from 'src/components/Dashboard/Views/MeusAtendimentos.vue'
import ReceitasPrescritas from 'src/components/Dashboard/Views/ReceitasPrescritas.vue'
import DefinirHorario from 'src/components/Dashboard/Views/DefinirHorario.vue'
import CadastrarUsuario from 'src/components/Dashboard/Views/CadastrarUsuario.vue'
import ConfirmarHorario from 'src/components/Dashboard/Views/ConfirmarHorario.vue'
import CadastrarEspecialista from 'src/components/Dashboard/Views/CadastrarEspecialista.vue'
import Consulta from 'src/components/Dashboard/Views/Consulta.vue'
import ValidarDiarias from 'src/components/Dashboard/Views/ValidarDiarias.vue'
import RealizarConsulta from 'src/components/Dashboard/Views/RealizarConsulta.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
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
        path: 'agendarAtendimento',
        name: 'AgendarAtendimento',
        component: AgendarAtendimento
      },
      {
        path: 'receitas',
        name: 'Receitas',
        component: Receitas
      },
      {
        path: 'minhasConsultas',
        name: 'MinhasConsultas',
        component: MinhasConsultas
      },
      {
        path: 'minhasConsultas/:id',
        name: 'Consulta',
        component: Consulta,
        props: true
      },
      {
        path: 'marcarConsulta',
        name: 'MarcarConsulta',
        component: MarcarConsulta
      },
      {
        path: 'marcarConsultaPaciente',
        name: 'MarcarConsultaPaciente',
        component: MarcarConsultaPaciente
      },
      {
        path: 'listarConsultas',
        name: 'ListarConsultas',
        component: ListarConsultas
      },
      {
        path: 'meusAtendimentos',
        name: 'MeusAtendimentos',
        component: MeusAtendimentos
      },
      {
        path: 'receitasprescritas',
        name: 'ReceitasPrescritas',
        component: ReceitasPrescritas
      },
      {
        path: 'definirHorario',
        name: 'DefinirHorario',
        component: DefinirHorario
      },
      {
        path: 'validarDiarias',
        name: 'ValidarDiarias',
        component: ValidarDiarias
      },
      {
        path: 'cadastrarUsuario',
        name: 'CadastrarUsuario',
        component: CadastrarUsuario
      },
      {
        path: 'cadastrarEspecialista',
        name: 'CadastrarEspecialista',
        component: CadastrarEspecialista
      },
      {
        path: 'confirmarHorario',
        name: 'ConfirmarHorario',
        component: ConfirmarHorario
      },
      {
        path: 'realizarConsulta',
        name: 'RealizarConsulta',
        component: RealizarConsulta
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
