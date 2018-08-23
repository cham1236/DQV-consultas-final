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
              <h5>Selecione a especialidade</h5>
              <b-form-select v-model="selected" :options="especialidades" class="mb-3"></b-form-select>

              <!--Seleção do Especialista-->
              <h5 v-if="(tipo==false)&&(selected!=null)">Selecione o especialista</h5>
              <b-form-select v-if="(tipo==false)&&(selected!=null)" v-model="especialista" :options="especialistasLista"></b-form-select>

              <!--Seleção de Tipo de Medico-->
              <h5 v-if="(selected == 'MEDICO')&&(tipo)">Selecione o tipo de médico</h5>
              <b-form-select v-if="(selected == 'MEDICO')&&(tipo)" v-model="medico" :options="tiposMedico"></b-form-select>

              <!--Seleção do Medico-->
              <h5 v-if="(medico != null)&&(tipo)">Selecione o médico</h5>
              <b-form-select v-if="(medico != null)&&(tipo)" v-model="medicoSelecionado" :options="medicosLista"></b-form-select>
             
             <!--Seleção de Data Disponível-->
             <h5 v-if="(medicoSelecionado != null)||(especialista != null)">Selecione a data</h5>
             <v-date-picker :mode='single' :availableDates='listaDiarias' v-model="dataConsulta" v-if="(medicoSelecionado != null)||(especialista != null)"></v-date-picker>             
              
            
             <!--Seleção de Hora Disponível-->
             <h5 v-if="(dataConsulta != null)">Selecione a hora</h5>
             <b-form-select v-if="(dataConsulta != null)" v-model="idHorarioselecionado" :options="horariosLista"></b-form-select>

             <!--Confirmar agendamento-->
            <b-button v-if="idHorarioselecionado != null" v-on:click="marcarConsulta()" type="submit">Concluir</b-button>
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
        consulta: null,
        tipo: false,
        selected: null,
        medico: null,
        especialista: null,
        medicoSelecionado: null,
        diariaSelecionada: null,
        idHorarioselecionado: null,
        especialistas: [],
        CPFPaciente: null,
        dataConsulta:null,
        data1: "",
        diariasEspecialistas: [],
        horariosEspecialista: [],
        listaDiarias: [],
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
        horariosLista: [
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
      marcarConsulta: function (){
        axios.post('http://localhost:9000/agendamento/' + this.idHorarioselecionado,{"paciente": this.$root.$data.pessoa}).then(response => {
        this.consulta = response.data;
        console.log(this.consulta);
        
        }, error => {
            console.log(error);
        });       
      },
      
    },
    watch: {
      selected: function (val){
          if(this.selected==="MEDICO"){
            this.tipo=true;
            this.dataConsulta = null;
          }else{
            this.tipo=false;
            this.dataConsulta = null;
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
            this.dataConsulta = null;
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
            this.listaDiarias = [];
            this.dataConsulta = null;
            this.diariasEspecialistas.map(diaria => {
              this.listaDiarias.push(new Date(diaria.diaria));
              
            })
            
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
           
      },

      especialista:function (val){
          if(!this.tipo){
            axios.get('http://localhost:9000/diaria/especialista/' + this.especialista).then(response => {
            this.diariasEspecialistas = response.data;
            this.dataConsulta = null;
            this.listaDiarias = [];
            this.diariasEspecialistas.map(diaria => {
              this.listaDiarias.push(new Date(diaria.diaria));
              
            })
            
            
            }, error => {
                console.log(error);
            });   
          }
           
      },

      dataConsulta: function (val){
        
        this.diariasEspecialistas.map(diaria => {
              this.data1=new Date(diaria.diaria);
              if(this.data1.getDate()==this.dataConsulta.getDate()){
                this.diariaSelecionada=diaria;
              }
            })
      },

      diariaSelecionada: function (val){
        axios.get('http://localhost:9000/horario/diariaespecialista/' + this.diariaSelecionada.id).then(response => {
            this.horariosEspecialista = [];
            this.horariosEspecialista = response.data;
            this.horariosLista = [{value: null, text: 'Escolha um:'}];
            this.horariosEspecialista.map(horario => {
              this.horariosLista.push({value: horario.id, text: horario.horaInico});
              
            })
            
            
            }, error => {
                console.log(error);
            });
        
      }

    }
  }
</script>

<style>
</style>
