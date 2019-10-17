<template>
  <div>
    <h3 slot="header" class="card-title">Consulta</h3>
    <b-card title="" sub-title="">
          <h5 v-if="this.consulta.especialista.especialidade==='MEDICO'" slot="header" class="card-title">{{this.consulta.especialista.tipo}}</h5>
          <p>Paciente {{atendimento.paciente.nome}}</p>
          <p v-if="this.consulta.status? status ='Realizada' : status ='Pendente' " >Status: {{status}}</p>
          <p class="card-text">
              Data: {{this.consulta.horario.diaria.diaria}}
          </p>
          <p class="card-text">
              Codigo: {{this.consulta.id}}
          </p>

          <div v-if="this.consulta.status">
            <label>Avaliação</label>
            <p class="card-text">
                {{this.consulta.avaliacao}}
            </p>
          </div>

          <div v-if="this.consulta.status">
            <label>Procedimento Realizado</label>
            <p class="card-text">
                {{this.consulta.procedimentoRealizado}}
            </p>
          </div>

          <div v-if="this.consulta.status">
            <label>Observação</label>
            <p class="card-text">
                {{this.consulta.observacao}}
            </p>
          </div>
      </b-card>
      <div class="row" v-if="this.consulta.status">  
            <div class="col-md-10"><h3 slot="header" class="card-title">Receitas da Consulta</h3></div>
            <div class="col-md-1"><b-button class="card-link" v-on:click="receitar(consulta.id)" >Receitar</b-button></div>
      </div>
      <b-card>
        <div>
            <div v-for="receita in receitas" :key="receita">
              <b-card title="" sub-title="">
                <h3 slot="header" class="card-title">Receita</h3>
                <p>Dr {{receita.consulta.especialista.nome}}</p>
                <p>Data de emissão: {{receita.dataEmissao}}</p>
                <p>Validade: {{receita.validade}}</p>
                <p>Possologia: {{receita.posologia}}</p>
                <p>Descriçao: {{receita.descrição}}</p>
                <p>Medicamento: {{receita.medicamento}}</p>
                <p>Pincipio ativo: {{receita.principioAtivo}}</p>
            </b-card>
          </div>
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
        receitas: {}
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
      getReceitas: function() {
        axios.get("http://localhost:9000/receita/consulta/" + this.id).then(res => {
          this.receitas = res.data
          console.log(this.receitas)
        })
      },
      receitar: function(id) {
        this.$router.push('/admin/receitar/' + id)
        console.log(id)
      },
    },
    mounted() {
      this.getConsulta()
      this.getReceitas()
    }
  }
</script>

<style>

</style>