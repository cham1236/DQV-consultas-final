<template>

  <b-table :items="receitas" :fields="fields">

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

  name: 'receita',
  created () {
    this.$http.get('http://localhost:9000/receitas').then(response => {
      this.receitas = response.body
    }, response => {
      // error callback
    })
  },

  data () {
    return {
      fields: [ 'medico', 'data', 'detalhes' ],
      receitas: []
    }
  }
}

</script>

<style>
  
</style>