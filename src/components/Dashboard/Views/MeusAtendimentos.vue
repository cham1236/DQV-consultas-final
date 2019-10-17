<template>
  <div>
    <div v-for="consulta in consultas" :key="consulta">
        <b-card title="" sub-title="">
          <h3 slot="header" class="card-title">{{consulta.consulta.especialista.especialidade}}</h3>
          <h5 v-if="consulta.consulta.especialista.especialidade==='MEDICO'" slot="header" class="card-title">{{consulta.consulta.especialista.tipo}}</h5>
          <p>Paciente {{consulta.paciente.nome}}</p>
          <p v-if="consulta.consulta.status? status ='Realizada' : status ='Pendente' " >Status: {{status}}</p>
          <p class="card-text">
              Data: {{consulta.consulta.horario.diaria.diaria}}
          </p>
          <p class="card-text">
              Codigo: {{consulta.consulta.id}}
          </p>
          <div class="row">  
            <div class="col-md-10"><b-button class="card-link" v-on:click="verDetalhe (consulta.id)" >Detalhes</b-button></div>
            <div v-if="!consulta.consulta.status" class="col-md-1"><b-button class="card-link" v-on:click="atender (consulta.id)" >Atender</b-button></div>
          </div>
      </b-card>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'App',
    created () {
      this.$http.get('http://localhost:9000/agendamento/especialista/'+this.$root.$data.pessoa.id).then(response => {
        this.$root.$data.minhasConsultas = response.body;
        console.log(this.$root.$data.pessoa.id);
        this.consultas=this.$root.$data.minhasConsultas;
        }, response => {
            console.log(response);
        })
        
    },
    
    data(){
      return{
        consultas:{},
        consulta:{},
        status:'',
        cor:'',
        bool:false,
        fields: [ 'especialidade', 'dataCons', 'detalhes' ]
      }
    },

    methods: {
      verDetalhe (id) {
        this.$router.push('/admin/meusAtendimentos/' + id)
      },
      atender (id) {
        this.$router.push('/admin/realizarAtendimento/' + id)
      },
      setBool: function() {
        if (this.bool == true) {
          this.bool = false
        } else {
         this.bool = true
        }
        return this.bool
      },
      getConsulta: function callByReference(varObj) { 
        this.$root.$data.consulta = varObj;
        console.log(varObj); 
      } 
     }
  }
</script>

<style>

</style>