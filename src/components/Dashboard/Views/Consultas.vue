<template>
    <b-list-group>
          <b-list-group-item v-for="consulta in consultas" v-bind:data="consulta" v-bind:key="consulta">
            <h5>Especialidade: <span>{{consulta.especialidade}}</span></h5>
            <h5>Médico: <span>{{consulta.medico}}</span></h5>
            <h5>Data: <span>{{consulta.data}}</span></h5>
            <h5>Hora: <span>{{consulta.hora}}</span></h5>
            <h5>Prontuario: <span>{{consulta.prontuario}}</span></h5>
            <h5>Status: <span>{{consulta.status}}</span></h5>
          </b-list-group-item>
    </b-list-group>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        bool:false,
        consultas:[
          {
            especialidade: 'Cardiologista',
            medico: 'Alessandro Lima',
            data: '12/09/2034',
            hora: '12:55',
            prontuario: 'AB1238',
            status: 'Pendente'
          },
          {
            especialidade: 'Cardiologista',
            medico: 'Carlos Azevedo',
            data: '12/09/2034',
            hora: '12:55',
            prontuario: 'AB1238',
            status: 'Pendente'
          }
        ]
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