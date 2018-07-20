<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      
      <sidebar-link to="/admin/noticias">
        <i class="nc-icon nc-paper-2"></i>
        <p>Noticias</p>
      </sidebar-link>

      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>Dados Pessoais</p>
      </sidebar-link>

      <sidebar-link to="/admin/atendimento" v-if="($root.$data.perfil == 'paciente')">
        <i class="nc-icon nc-notes"></i>
        <p>Agendar Atendimento</p>
      </sidebar-link>

      <sidebar-link to="/admin/receitas" v-if="($root.$data.perfil == 'paciente')">
        <i class="nc-icon nc-single-copy-04"></i>
        <p>Minhas receitas</p>
      </sidebar-link>

      <sidebar-link to="/admin/consultas" v-if="($root.$data.perfil == 'paciente')">
        <i class="nc-icon nc-ambulance"></i>
        <p>Minhas consultas</p>
      </sidebar-link>

      <sidebar-link to="/admin/marcarcons" v-if="($root.$data.perfil == 'atendente') || ($root.$data.perfil == 'coordenador')">
        <i class="nc-icon nc-ambulance"></i>
        <p>Marcar consulta</p>
      </sidebar-link>

      <sidebar-link to="/admin/conspaciente" v-if="($root.$data.perfil == 'atendente') || ($root.$data.perfil == 'coordenador')">
        <i class="nc-icon nc-ambulance"></i>
        <p>Cons do paciente</p>
      </sidebar-link>

      <sidebar-link to="/admin/meusatendimentos" v-if="($root.$data.perfil == 'medico')">
        <i class="nc-icon nc-ambulance"></i>
        <p>Meus Atendimentos</p>
      </sidebar-link>

      <sidebar-link to="/admin/receitasprescritas" v-if="($root.$data.perfil == 'medico')">
        <i class="nc-icon nc-ambulance"></i>
        <p>Receitas Prescritas</p>
      </sidebar-link>

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
      }
    }
  }

</script>
