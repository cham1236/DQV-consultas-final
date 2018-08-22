<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Marcar consulta</h4>
            </template>
             
            <b-form-fieldset method="POST"> 

              <!--Seleção do Especialidade-->

              <b-form-select v-model="selected" :options="especialidades" class="mb-3"></b-form-select>

              <!--Seleção do Especialista-->
              
              <b-form-select v-if="(tipo==false)" v-model="medico" :options="especialistasLista"></b-form-select>

              <!--Seleção de Tipo de Medico-->

              <b-form-select v-if="(selected == 'MEDICO')&&(tipo)" v-model="medico" :options="tiposMedico"></b-form-select>

              <!--Seleção do Medico-->

              <br>
              <b-form-select v-if="(medico != null)&&(tipo)" v-model="medicoSelecionado" :options="medicosLista"></b-form-select>
             
             <!--Seleção de Data e Hora Disponível-->

             <date-picker v-if="medico != null" v-model="value" lang="pt-br" type="datetime" format="DD-MM-YYYY hh:mm:ss a" :minute-step="10" :not-before="new Date()" ></date-picker>             
            
             <!--Confirmar agendamento-->
            <b-button v-if="value != ''" type="submit">Concluir</b-button>
            </b-form-fieldset>
                         
          </card>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import DatePicker from 'vue2-datepicker'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
  const tableData = [{}]
  const axios=require('axios')
  export default {
    components: {
      LTable,
      Card,
      DatePicker
    },
    
    data () {
      return {
        tipo: false,
        selected: null,
        medico: null,
        medicoSelecionado: null,
        especialistas: [],
        CPFPaciente: null,
        diariasEspecialistas: [],
        especialidades: [
          { value: null, text: 'Escolha uma Especialidade' },
          { value: 'MEDICO', text: 'Médico' },
          { value: 'ASSISTENTE_SOCIAL', text: 'Assistente Social' },
          { value: 'PSICOLOGO', text: 'Psicólogo' },
          { value: 'NUTRICIONISTA', text: 'Nutricionista' },
          { value: 'ORTODONTISTA', text: 'Ortodontista' }
        ],
        tiposMedico:[
          { value: null, text: 'Escolha uma Especialidade' },
          { value: 'CARDIOLOGISTA', text: 'Cardiologista' },
          { value: 'GINECOLOGISTA', text: 'Ginecologista' },
          { value: 'MEDICO_DO_TRABALHO', text: 'Médico do trabalho' },
        ],
        
        especialistasLista: [
          {value: null, text: 'Escolha um:'}
        ],
        medicosLista: [
          {value: null, text: 'Escolha um:'}
        ],
        



        
        value : '',
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
    methods: {
      getEspecialista: function (){
        axios.post('http://localhost:9000/especialista/especialidade',{"especialidade": this.selected.value}).then(response => {
        this.especialistas = response.data;
        // this.coordenadores.map(coordenador => {
        //   this.coord=coordenador;
        //   this.listaCoordenadores.push({value: coordenador.id, text: coordenador.nome});
          
        // })
        
        // this.$root.$data.coordenadores;
        // console.log(this.coordenadores);
        
        }, error => {
            console.log(error);
        });       
      },
      
    },
    watch: {
      selected: function (val){
          if(this.selected==="MEDICO"){
            this.tipo=true;
          }else{
            this.tipo=false;
            axios.post('http://localhost:9000/especialista/especialidade',{especialidade: this.selected}).then(response => {
            this.especialistas = response.data;
            this.especialistasLista = [{value: null, text: 'Escolha um:'}];
            this.especialistas.map(especialista => {
              this.especialistasLista.push({value: especialista.id, text: especialista.nome});
              
            })
            
            // this.$root.$data.coordenadores;
            // console.log(this.coordenadores);
            
            }, error => {
                console.log(error);
            });              
          }
           
      },

      medico: function (val){
          console.log(this.medico);
          if(this.tipo){
            axios.post('http://localhost:9000/medico/especialidade',{tipo: this.medico}).then(response => {
            this.especialistas = response.data;
            this.medicosLista = [{value: null, text: 'Escolha um:'}];
            this.especialistas.map(especialista => {
              this.medicosLista.push({value: especialista.id, text: especialista.nome});
              
            })
            
            console.log(this.medicos);
            // this.$root.$data.coordenadores;
            // console.log(this.coordenadores);
            
            }, error => {
                console.log(error);
            });   
          }
           
      },

      medicoSelecionado: function (val){
          if(this.tipo){
            axios.get('http://localhost:9000/diaria/especialista/' + this.medicoSelecionado).then(response => {
            this.diariasEspecialistas = response.data;
            
            // this.medicosLista = [{value: null, text: 'Escolha um:'}];
            // this.especialistas.map(especialista => {
            //   this.medicosLista.push({value: especialista.id, text: especialista.nome});
              
            // })
            
            // console.log(this.medicos);
            // this.$root.$data.coordenadores;
            // console.log(this.coordenadores);
            
            }, error => {
                console.log(error);
            });   
          }
           
      }
    }
  }
</script>

<style>
</style>
