<template>
  <div>
    <div v-for="receita in $root.$data.minhasReceitas" :key="receita">
        <b-card title="" sub-title="">
          <h3 slot="header" class="card-title">{{receita.consulta.especialista.especialidade}}</h3>
          <p>Dr {{receita.consulta.especialista.nome}}</p>
          <p>Data de emissão: {{receita.dataEmissao}}</p>
          <p>Validade: {{receita.validade}}</p>
          <p>Possologia: {{receita.posologia}}</p>
          <p>Descriçao: {{receita.descrição}}</p>
          <p>Medicamento: {{receita.medicamento}}</p>
          <p>Pincipio ativo: {{receita.principioAtivo}}</p>
      </b-card>
    </div>
  </div>  
</template>

<script>

  export default {

  name: 'receita',
  created () {
      this.$http.get('http://localhost:9000/receita/pessoa/'+this.$root.$data.pessoa.id).then(response => {
        this.$root.$data.minhasReceitas = response.body;
        console.log(this.$root.$data.pessoa.id);
        }, response => {
            console.log(response);
        })
        this.receitas=this.$root.$data.minhasReceitas;
    },

  data () {
    return {
      fields: [ 'medico', 'data', 'detalhes' ],
      receitas: {}
    }
  }
}

</script>

<style>
  
</style>