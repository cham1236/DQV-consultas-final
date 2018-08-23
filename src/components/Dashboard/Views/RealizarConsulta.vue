<template>
<div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Realizar Consulta</h4>
            </template>

              CPF do paciente:
              <b-form-input v-model="CPFPaciente" placeholder="CPF"></b-form-input>
              <br>
              <b-btn variant="primary" block v-on:click="pegarHorarios">Pesquisar Paciente</b-btn>


                         
          </card>
        </div>
      </div>
    </div>
</div>
</template>

<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

export default {
    components: {
      Card
    },
    data(){
        return{
        consultas: {},
        CPFPaciente: null
        }
    },
    methods:{
        pegarConsulta: function(){
            this.$http.get('http://localhost:9000/agendamento/pessoa/'+CPFPaciente).then(response => {
            this.$root.$data.minhasConsultas = response.body;
            console.log(this.$root.$data.pessoa.id);
            this.consultas=this.$root.$data.minhasConsultas;
        }, response => {
            console.log(response);
        })
        }
    }
}
</script>
