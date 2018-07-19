<template>
  <div class="mb-3">
    <b-card-group deck class="row">
            <b-card bg-variant="secondary"
                text-variant="white"
                class="text-center" v-for="receita in receitas" v-bind:data="receita" v-bind:key="receita">
            <h3>Receita</h3><br>
            <h5>Remedio: <span>{{receita.remedio}}</span></h5>
            <h5>uso: <span>{{receita.uso}}</span></h5>
            <h5>Paciente: <span>{{receita.paciente}}</span></h5>
            <h5>Médico: <span>{{receita.medico}}</span></h5>
            <h5>Data: <span>{{receita.data}}</span></h5> 
          </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        receitas:[
          {
            remedio: '1 caixa de paracetamol',
            uso: 'Tomar 1 comprimido a cada 6 horas ate acabar a caixa',
            paciente: 'Carlos Azevedo',
            medico: 'Alessandro Lima',
            data: '12/07/2018',
          },
          {
            remedio: '1 caixa de paracetamol',
            uso: 'Uma injecao de amoxilina',
            paciente: 'Vanilson',
            medico: 'Alessandro Lima',
            data: '12/07/2018',
          },
          {
            remedio: '1 caixa de paracetamol',
            uso: 'Tomar 1 comprimido a cada 6 horas ate acabar a caixa',
            paciente: 'Caio Walker',
            medico: 'Alessandro Lima',
            data: '12/07/2018',
          },
          {
            remedio: '1 caixa de paracetamol',
            uso: 'Tomar 1 comprimido a cada 6 horas ate acabar a caixa',
            paciente: 'Alex Douglas',
            medico: 'Alessandro Lima',
            data: '12/07/2018',
          },
        ]
      }
    }
  }

</script>
<style>
  
</style>
