<template>

<b-table :items=$root.$data.consultas :fields="fields">

    <template slot="detalhes" slot-scope="row">

      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Esconder' : 'Mostrar'}} Detalhes
      </b-button>
 
    </template>

    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Medico:</b></b-col>
          <b-col>{{ row.item.medico }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Status:</b></b-col>
          <b-col>{{ row.item.status }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>CPF:</b></b-col>
          <b-col>{{ row.item.cpfPaciente }}</b-col>
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
        bool:false,
        fields: [ 'especialidade', 'dataCons', 'detalhes' ]
      }
    },

    methods: {
      setBool: function() {
        if (this.bool == true) {
          this.bool = false
        } else {
         this.bool = true
        }
        return this.bool
      }
     }
  }
</script>

<style>

</style>