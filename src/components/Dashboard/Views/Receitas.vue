<template>

  <b-table :items=$root.$data.receitas :fields="fields">

    <template slot="detalhes" slot-scope="row">

      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Esconder' : 'Mostrar'}} Detalhes
      </b-button>
 
    </template>

    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Remédio:</b></b-col>
          <b-col>{{ row.item.remedio }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Modo de Usar:</b></b-col>
          <b-col>{{ row.item.uso }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Paciente:</b></b-col>
          <b-col>{{ row.item.paciente }}</b-col>
        </b-row>
      </b-card>
    </template>

  </b-table>

</template>

<script>

  export default {
    name: 'App',
    data(){
      return{

        fields: [ 'medico', 'data', 'detalhes' ]
        
      }
    }
  }

</script>

<style>
  
</style>