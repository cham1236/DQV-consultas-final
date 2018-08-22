<template>
  <div>
    <h3 slot="header" class="card-title">{{this.consulta.especialista.especialidade}}</h3>
    <b-card title="" sub-title="">
          <h5 v-if="this.consulta.especialista.especialidade==='MEDICO'" slot="header" class="card-title">{{this.consulta.especialista.tipo}}</h5>
          <p>Dr {{this.consulta.especialista.nome}}</p>
          <p v-if="this.consulta.status? status ='Realizada' : status ='Pendente' " >Status: {{status}}</p>
          <p class="card-text">
              Data: {{this.consulta.horario.diaria.diaria}}
          </p>
          <p class="card-text">
              Codigo: {{this.consulta.id}}
          </p>
      </b-card>
  </div>
</template>

<script>
const axios = require('axios')
  export default {
    props: ['id'],
    name: 'App',
    data(){
      return{
        bool:false,
        consulta: {}
      }
    },
    computed: {
      
    },
    methods: {
      setBool: function() {
        if (this.bool == true) {
          this.bool = false
        } else {
         this.bool = true
        }
        return this.bool
      },
      getConsulta: function() {
        axios.get("http://localhost:9000/consulta/" + this.id).then(res => {
          this.consulta = res.data
        })
      }
    },
    mounted() {
      this.getConsulta()
    }
  }
</script>

<style>

</style>