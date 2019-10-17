<template>
  <div>
    <h3 slot="header" class="card-title">Emissão de receita</h3>
    <b-card title="" sub-title="">
          <h5 v-if="this.consulta.especialista.especialidade==='MEDICO'" slot="header" class="card-title">{{this.consulta.especialista.tipo}}</h5>
          <p>Paciente {{atendimento.paciente.nome}}</p>
          <p class="card-text">
              Data de Nascimento: {{atendimento.paciente.dataNascimento}}
          </p>
          <p class="card-text">
              Codigo da consulta: {{this.consulta.id}}
          </p>
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Medicamento"
                      placeholder="Medicamento"
                      v-model="receita.medicamento">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Principio Ativo"
                      placeholder="Principio Ativo"
                      v-model="receita.principioAtivo">
            </fg-input>
          </div>
          <div class="col-md-2">
            <label>Válida até:</label>
            <v-date-picker
                id="diaria"
                mode='single'
                v-model='receita.validade'
                show-caps
                :min-date='new Date()'>
            </v-date-picker>
          </div>
        </div>
        
        <label>Posologia</label>
        <b-form-textarea v-model="receita.posologia" rows="5" style="height:100%;"></b-form-textarea>
        <br>
        <label>Instruções</label>
        <b-form-textarea v-model="receita.descrição" rows="5" style="height:100%;"></b-form-textarea>
        <br>
         <div class="row">  
            <div class="col-md-9"></div>
            <div class="col-md-3"><b-button class="card-link" v-on:click="receitar ()" >Receitar</b-button></div>
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
        consulta: {},
        atendimento: {},
        receita: {
          validade: null,
          posologia: null,
          descrição: null,
          medicamento: null,
          principioAtivo: null
        }
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
      receitar: function() {
        console.log(this.receita)
        this.$http.post('http://localhost:9000/receita/' + this.consulta.id, this.receita).then(function (response) {
          this.$router.push('/admin/meusAtendimentos/' + this.atendimento.id)
          console.log(response.data);
        },function (error) {
          // Error
          console.log(response.error)
        });
      }
    },
    mounted() {
      this.getConsulta()
    }
  }
</script>

<style>

</style>