<template>
<card>
  <b-row class="justify-content-md-center">
  
      <h2><strong>Validar Diárias</strong></h2>

  </b-row>  
  <b-row class="justify-content-md-center">
    <b-col md="4">
      <b-form-select v-model="selected" :options="especialidades" ></b-form-select>
    </b-col>
    <b-col md="4">
      <b-form-select v-if="(tipo==false)" v-model="medico" :options="especialistasLista"></b-form-select>
      <b-form-select v-if="(selected == 'MEDICO')&&(tipo)" v-model="medico" :options="especialistasLista" ></b-form-select>
    </b-col>
    <b-col md="4">
      <b-form-select v-if="(medico != null)&&(tipo)" v-model="medicoSelecionado" :options="medicosLista"></b-form-select>
    </b-col>
  </b-row>  

  <br>
  <b-row class="justify-content-md-center">
    <b-col md="8">
      <v-date-picker
        :min-date='new Date()'
        is-expanded
        is-inline =true
        v-model="dataSelecionada">
      </v-date-picker>

    <p>{{dataSelecionada}}</p>
    </b-col>
  </b-row>

  <b-row class="justify-content-md-center">
    <b-col md="4">
      <b-btn block=true v-on:click="aprovar" variant="primary">Aprovar Diaria</b-btn> 
    </b-col>
    <b-col md="4">
      <b-btn block=true v-on:click="validar" variant="primary">Validar Diaria</b-btn>
    </b-col> 
  </b-row>

</card>
</template>

<script>
import Card from 'src/components/UIComponents/Cards/Card.vue'

export default {
  components:{
      Card
  },
  data() {
    return {
      tipo: false,
      selected: null,
      medico: null,
      medicoSelecionado: null,
      dataSelecionada: null,
      dataConsulta: [],
      horarios:[],
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

    };
  },
  methods:{
    

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
};

</script>
