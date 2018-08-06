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

    <!-- <b-list-group>
          <b-list-group-item v-for="consulta in $root.$data.consultas" v-bind:data="consulta" v-bind:key="consulta" v-if="consulta.cpfPaciente == $root.$data.CPF">
            <h5>Especialidade: <span>{{consulta.especialidade}}</span></h5>
            <h5>Médico: <span>{{consulta.medico}}</span></h5>
            <h5>Data: <span>{{consulta.dataCons}}</span></h5>
            <h5>Status: <span>{{consulta.status}}</span></h5>
          </b-list-group-item>
    </b-list-group> -->
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