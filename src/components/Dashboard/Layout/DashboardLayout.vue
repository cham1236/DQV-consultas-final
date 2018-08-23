<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <!--LINKS DO PACIENTE  -->
      <center> <strong> Paciente </strong></center>

      <sidebar-link to="/admin/noticias">
        <i class="nc-icon nc-paper-2"></i>
        <p>Noticias</p>
      </sidebar-link>

      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>Dados Pessoais</p>
      </sidebar-link>

      <sidebar-link to="/admin/agendarAtendimento">
        <i class="nc-icon nc-notes"></i>
        <p>Agendar Atendimento</p>
      </sidebar-link>

      <sidebar-link to="/admin/receitas">
        <i class="nc-icon nc-single-copy-04"></i>
        <p>Minhas receitas</p>
      </sidebar-link>

      <sidebar-link to="/admin/MinhasConsultas">
        <i class="nc-icon nc-ambulance"></i>
        <p>Minhas consultas</p>
      </sidebar-link>

      <sidebar-link to="/admin/marcarConsultaPaciente">
        <i class="nc-icon nc-notes"></i>
        <p>Marcar consulta</p>
      </sidebar-link>

      <!--LINKS DO SERVIDOR -->      

      <div v-if="this.$root.$data.pessoa.situacao==='ATIVO'">

        <br><center><strong> Atendente </strong></center><br>

        <sidebar-link to="/admin/marcarConsulta">
          <i class="nc-icon nc-notes"></i>
          <p>Marcar consulta</p>
        </sidebar-link>

        <sidebar-link to="/admin/listarConsultas">
          <i class="nc-icon nc-ambulance"></i>
          <p>Consultas do paciente</p>
        </sidebar-link>
      
      </div>
        
      <!--LINKS DO COORDENADOR  -->
      <div v-if="this.$root.$data.pessoa.coordenador==true">
        <br><center><strong> Coordenador </strong></center><br>
        
        <sidebar-link to="/admin/cadastrarUsuario">
          <i class="nc-icon nc-notes"></i>
          <p>Cadastar Paciente</p>
        </sidebar-link>

        <sidebar-link to="/admin/cadastrarEspecialista">
          <i class="nc-icon nc-notes"></i>
          <p>Cadastar Especialista</p>
        </sidebar-link>
        
        <sidebar-link to="/admin/cadastrarCoordenador">
          <i class="nc-icon nc-notes"></i>
          <p>Cadastar Coordenador</p>
        </sidebar-link>

        <sidebar-link to="/admin/marcarConsulta">
          <i class="nc-icon nc-notes"></i>
          <p>Marcar consulta</p>
        </sidebar-link>

        <sidebar-link to="/admin/listarConsultas">
          <i class="nc-icon nc-ambulance"></i>
          <p>Consultas do paciente</p>
        </sidebar-link>

        <sidebar-link to="/admin/confirmarHorario">
          <i class="nc-icon nc-tag-content"></i>
          <p>Confirmar Horarios</p>
        </sidebar-link>

      </div>
      
      <!--LINKS DO MÉDICO  -->
      <div v-if="this.$root.$data.pessoa.especialidade==='MEDICO'">
        <br><center><strong> Médico </strong></center><br>

        <sidebar-link to="/admin/definirHorario">
          <i class="nc-icon nc-tag-content"></i>
          <p>Definir Horarios</p>
        </sidebar-link>

        <sidebar-link to="/admin/meusAtendimentos">
          <i class="nc-icon nc-bullet-list-67"></i>
          <p>Meus Atendimentos</p>
        </sidebar-link>

        <sidebar-link to="/admin/receitasprescritas">
          <i class="nc-icon nc-ambulance"></i>
          <p>Receitas Prescritas</p>
        </sidebar-link>

      </div>
      

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      getConsultas: function (){
        
        
        this.$http.get('http://localhost:9000/agendamento/pessoa/').then(response => {
        this.$root.$data.minhasConsultas = response.body;
        console.log(response.body);
        }, response => {
            console.log(response.mensage);
        })
    }
    }
  }

</script>
