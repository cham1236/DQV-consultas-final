<template>
  <card>
    <b-row>
      <b-col  md="4">
      <label for="#diaria">Selecione Diária</label>
      <v-date-picker
          id="diaria"
          mode='single'
          v-model='dataConsulta'
          show-caps
          :disabled-dates='{ weekdays: [1, 7] }'
          :min-date='new Date()'>
      </v-date-picker>
      </b-col>
      <b-col md="4">
        <fg-input type="number"
                    label="Duração das Consultas (em Minutos)"
                    placeholder="30"
                    v-model="tempoConsulta">
          </fg-input>
      </b-col>
      <b-col md='4'>
        <br><b-btn variant="primary" block v-on:click="pegarHorarios">Cadastrar Diaria</b-btn>
      </b-col>
    </b-row>

    <b-row>
     <b-col>
         <b-table :items="horarios"></b-table>
      </b-col>
    </b-row>
  </card>
</template>

<script>
import Card from 'src/components/UIComponents/Cards/Card.vue'
const axios=require('axios') 

   
export default {
  components:{
      Card
  },
  data() {
    
    return {
      dataConsulta: null,
      tempoConsulta: null,
      horarios: [],

      diaria: {
        diaria: null,
        tempoConsulta: null,
        validado: false,
        aprovado: false

      }
    };
  },
  methods:{
      addHorarios: function() {
      this.arrayHorarios.push({
          dataConsulta: this.dataConsulta.toDateString, 
          horaInicio: this.horaInicio, 
          horaFim: this.horaFim, 
          status: 'Pendente'
          });
    },

    pegarHorarios: function(){
      this.diaria.diaria = this.dataConsulta;
      this.diaria.tempoConsulta = this.tempoConsulta;
      axios.post('http://localhost:9000/diaria'/ + this.$root.$data.pessoa.id).then(response => {
        this.diaria = response.data;
        axios.get('http://localhost:9000/diariaespecialista/' + this.diaria.id).then(function (response) {
            // Success
            this.horarios = response.data;
          },function (error) {
            // Error
            console.log(response.error)
          });      
        // this.$root.$data.coordenadores;
        console.log(this.coordenadores);
        
        }, error => {
            console.log(error);
        });
    }
  }
};

</script>
