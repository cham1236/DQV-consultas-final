<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Agendar Atendimento</h4>
            </template>
            <b-form-group> 
              <b-form-select v-model="selected" :options="especialidades" class="mb-3"></b-form-select>

              <!--Seleção de médicos-->
              <b-form-select v-if="selected == 'ginecologista'" v-model="medico" :options="ginecologia"></b-form-select>
              <b-form-select v-if="selected == 'cardio'" v-model="medico" :options="cardiologista"></b-form-select>
              <b-form-select v-if="selected == 'dentista'" v-model="medico" :options="dentista"></b-form-select>
              <b-form-select v-if="selected == 'psicologo'" v-model="medico" :options="psicologia"></b-form-select>


              <!--Seleção de Data e Hora Disponível-->

              <date-picker v-model="value4" lang="en" type="datetime" format="YYYY-MM-DD hh:mm:ss a" :time-picker-options="{ start: '00:00', step: '00:30', end: '23:30' }"></date-picker>
              <b-form-input v-if="medico != null" type="date"></b-form-input>             
              <b-form-input type='text' placeholder="prontuário"></b-form-input>
              <b-butt
            </b-form-group>
                         
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
  const tableData = [{
    id: 1,
    name: 'Dakota Rice',
    salary: '$36.738',
    country: 'Niger',
    city: 'Oud-Turnhout'
  },
  {
    id: 2,
    name: 'Minerva Hooper',
    salary: '$23,789',
    country: 'Curaçao',
    city: 'Sinaai-Waas'
  },
  {
    id: 3,
    name: 'Sage Rodriguez',
    salary: '$56,142',
    country: 'Netherlands',
    city: 'Baileux'
  },
  {
    id: 4,
    name: 'Philip Chaney',
    salary: '$38,735',
    country: 'Korea, South',
    city: 'Overland Park'
  },
  {
    id: 5,
    name: 'Doris Greene',
    salary: '$63,542',
    country: 'Malawi',
    city: 'Feldkirchen in Kärnten'
  }]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        selected: null,
        medico: null,
        especialidades: [
          { value: null, text: 'Escolha uma Especialidade' },
          { value: 'cardio', text: 'Cardiologista' },
          { value: 'dentista', text: 'Dentista' },
          { value: 'ginecologista', text: 'Ginecologista' },
          { value: 'psicologo', text: 'Psicólogo' }
        ],
        cardiologista: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Marcela', text: 'Fernanda'},
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
        psocologia: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Maria', text: 'Maria'},
          {value: 'Alice', text: 'Alice'},            
        ],             
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
</style>
