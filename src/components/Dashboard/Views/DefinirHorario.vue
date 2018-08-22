<template>

<div>
<b-row class="justify-content-md-center">
<b-col cols="3">
<v-date-picker
    mode='single'
    v-model='dataConsulta'
    show-caps
    :disabled-dates='{ weekdays: [1, 7] }'>
</v-date-picker>
</b-col>

<b-col>
<b-form-select v-model="horaInicio" :options="horarios" class="mb-3" />
</b-col>

<b-col>
<b-form-select v-model="horaFim" :options="horarios" class="mb-3" />
</b-col>

<b-col md="2">
<button class="btn btn-success" v-on:click="addHorarios">Adicionar</button>
</b-col>

</b-row>

<b-row>
<b-col>
<br><br><b-table :items="arrayHorarios"></b-table>
</b-col>
</b-row>

<b-col align-self="end">
<button class="btn btn-success" v-on:click="addHorarios">Adicionar</button>
</b-col>

</div>
</template>

<script>

export default {
  data() {
    return {
      dataConsulta: new Date(),
      arrayHorarios:[],
      horarios:[
          { value: '8:00', text: '8:00 da manhã' },
          { value: '8:30', text: '8:30 da manhã' },
          { value: '9:00', text: '9:00 da manhã' },
          { value: '9:30', text: '9:30 da manhã' },
          { value: '10:00', text: '10:00 da manhã' },
          { value: '10:30', text: '10:30 da manhã' },
          { value: '11:00', text: '11:00 da manhã' },
          { value: '11:30', text: '11:30 da manhã' },
          { value: '12:00', text: '12:00 da manhã' },
          { value: '12:30', text: '12:30 da manhã' },
      ]

    };
  },
  methods:{
      addHorarios: function() {
      this.arrayHorarios.push({
          dataConsulta: this.dataConsulta, 
          horaInicio: this.horaInicio, 
          horaFim: this.horaFim, 
          status: 'Pendente'
          });
    }
  }
};

</script>
