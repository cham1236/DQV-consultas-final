<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Agendar Atendimento</h4>
            </template>
            
            <b-form-fieldset method="POST"> 
              
              <b-form-select v-model="selected" :options="especialidades" class="mb-3"></b-form-select>

              <!--Seleção de médicos-->
              <b-form-select v-if="selected == 'ginecologista' " v-model="medico" :options="ginecologia"></b-form-select>
              <b-form-select v-if="selected == 'cardio' " v-model="medico" :options="cardiologista"></b-form-select>
              <b-form-select v-if="selected == 'dentista' " v-model="medico" :options="dentista"></b-form-select>
              <b-form-select v-if="selected == 'psicologo' " v-model="medico" :options="psicologia"></b-form-select>


              <!--Seleção de Data e Hora Disponível-->

             <v-date-picker :mode='single' :availableDates='[new Date(),new Date(2018,7,25)]' v-model="dataConsulta"></v-date-picker>             
             <!--Confirmar agendamento-->
            <b-button v-on:click="addConsulta" v-if="dataConsulta != null" type="submit">Agendar</b-button>
            </b-form-fieldset>
                         
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
  const tableData = [{}]
  export default {
    components: {
      LTable,
      Card,
    },
    data () {
      return {
        especialidade: null,
        medico: null,
        dataConsulta: null,
        selected: null,
        especialidades: [
          { value: null, text: 'Escolha uma Especialidade' },
          { value: 'cardio', text: 'Cardiologista' },
          { value: 'dentista', text: 'Dentista' },
          { value: 'ginecologista', text: 'Ginecologista' },
          { value: 'psicologo', text: 'Psicólogo' }
        ],
        cardiologista: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Fernanda', text: 'Fernanda'},
          {value: 'Algusta', text: 'Algusta'},
          {value: 'Ricardo', text: 'Ricardo'},
          {value: 'Renata', text: 'Renata'}              
        ],
        ginecologia: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Fernanda', text: 'Fernanda'},
          {value: 'Algusta', text: 'Algusta'},
          {value: 'Ricardo', text: 'Ricardo'},
          {value: 'Renata', text: 'Renata'}              
        ],
        dentista: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Angela', text: 'Angela'},
          {value: 'Aline', text: 'Aline'},
          {value: 'Rodrigo', text: 'Rodrigo'},
          {value: 'Carlos', text: 'Carlos'}              
        ],
        psicologia: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Maria', text: 'Maria'},
          {value: 'Alice', text: 'Alice'}            
        ],
        
        shortcuts: [
          {
            text: 'Today',
            onClick: () => {
              this.time3 = [ new Date(), new Date() ]
            }
          }
        ],
        timePickerOptions:{
          start: '00:00',
          step: '00:30',
          end: '23:30'
        }
      }

    },
    methods:{
      addConsulta: function() {
      this.$root.$data.consultas.push({especialidade: this.especialidade, medico: this.medico, dataConsulta: this.dataConsulta, status: 'Pendente', cpfPaciente: this.$root.$data.CPF});
    }
  }
}
</script>

<style>
</style>
