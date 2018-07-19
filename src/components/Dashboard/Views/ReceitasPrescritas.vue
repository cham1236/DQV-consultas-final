<template>
  <div class="mb-3">
    <b-card-group deck class="row">
            <b-card bg-variant="secondary"
                text-variant="white"
                class="text-center" v-for="receita in $root.$data.receitas" v-bind:data="receita" v-bind:key="receita" v-if="receita.medico == $root.$data.medico">
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
        
      }
    }
  }

</script>
<style>
  
</style>
