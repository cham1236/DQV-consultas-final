<template>
  <div>
    <h3 slot="header" class="card-title">Atendimento ao paciente</h3>
    <b-card title="" sub-title="">
          <h5 v-if="this.consulta.especialista.especialidade==='MEDICO'" slot="header" class="card-title">{{this.consulta.especialista.tipo}}</h5>
          <p>Paciente {{atendimento.paciente.nome}}</p>
          <p class="card-text">
              Data de Nascimento: {{atendimento.paciente.dataNascimento}}
          </p>
          <p class="card-text">
              Codigo da consulta: {{this.consulta.id}}
          </p>
        <label>Avaliação</label>
        <b-form-textarea v-model="avaliacao" rows="5" style="height:100%;"></b-form-textarea>
        <label>Procedimento Realizado</label>
        <b-form-textarea v-model="procedimentoRealizado" rows="5" style="height:100%;"></b-form-textarea>
        <label>Observação</label>
        <b-form-textarea v-model="observacao" rows="5" style="height:100%;"></b-form-textarea>
        <br>
         <div class="row">  
            <div class="col-md-9"></div>
            <div class="col-md-3"><b-button class="card-link" v-on:click="finalizarAtendimento ()" >Finalizar Atendimento</b-button></div>
        </div>
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
        avaliacao: '',
        procedimentoRealizado:'',
        observacao:'',
        consulta: {},
        atendimento: {}
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
        axios.get("http://localhost:9000/agendamento/" + this.id).then(res => {
          this.atendimento = res.data
          this.consulta = this.atendimento.consulta
          console.log(this.consulta)
        })
      },
      finalizarAtendimento: function() {
        this.consulta.avaliacao = this.avaliacao
        this.consulta.procedimentoRealizado = this.procedimentoRealizado
        this.consulta.observacao = this.observacao
        this.consulta.status = true

        this.$http.put('http://localhost:9000/consulta', this.consulta).then(function (response) {
              alert("Atendimento finalizado.");
              this.$router.push('/admin/meusAtendimentos/' + this.atendimento.id)
              console.log(response.data);
            },function (error) {
              // Error
              console.log(response.error)
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