<template>
  <form>
    <b-list-group>
        <div>
          <md-button class="md-raised md-primary" v-on:click="setBool">Click me</md-button>
          <h1>{{msg}}</h1>
          <md-content v-if="bool" class="md-elevation-8" v-for="livro in consultas">
            {{livro.nome}}<br>
            {{livro.autor}}<br>
            {{livro.ano}}<br><br><br>
          </md-content>
        </div>
    </md-content>
  </form>
</template>

<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    name: 'App',
    data(){
      return{
        bool:false,
        consultas:[
          {
            especialidade: '',
            medico: '',
            data: '',
            hora: '',
            protuario: '',
            status: ''
          }
        ]
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