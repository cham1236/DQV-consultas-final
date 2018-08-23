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

            <div v-for="consulta in consultas" :key="consulta">

                <b-card title="" sub-title="">
                    <h3 slot="header" class="card-title">{{consulta.consulta.especialista.especialidade}}</h3>
                    <h5 v-if="consulta.consulta.especialista.especialidade==='MEDICO'" slot="header" class="card-title">{{consulta.consulta.especialista.tipo}}</h5>
                    <p>Dr {{consulta.consulta.especialista.nome}}</p>
                    <p v-if="consulta.consulta.status? status ='Realizada' : status ='Pendente' " >Status: {{status}}</p>
                    <p class="card-text">
                        Data: {{consulta.consulta.horario.diaria.diaria}}
                    </p>
                    <p class="card-text">
                        Codigo: {{consulta.consulta.id}}
                    </p>
                    <div class="row">  
                        <div class="col-md-10"><b-button class="card-link" v-on:click="verDetalhe (consulta.consulta.id)" >Detalhes</b-button></div>
                    </div>
                </b-card>
            </div>                       
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
