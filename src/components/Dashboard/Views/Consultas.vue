<template>
    <b-list-group>
          <b-list-group-item v-for="consulta in $root.$data.consultas" v-bind:data="consulta" v-bind:key="consulta" v-if="consulta.cpfPaciente == $root.$data.CPF">
            <h5>Especialidade: <span>{{consulta.especialidade}}</span></h5>
            <h5>Médico: <span>{{consulta.medico}}</span></h5>
            <h5>Data: <span>{{consulta.dataCons}}</span></h5>
            <h5>Status: <span>{{consulta.status}}</span></h5>
          </b-list-group-item>
    </b-list-group>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        bool:false
      }
    },

    methods: {
      setBool: function() {
        if (this.bool == true) {
          this.bool = false
        } else {
         this.bool = true
        }
        return this.bool
      }
     }
  }
</script>

<style>

</style>