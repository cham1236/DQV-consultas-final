<template>
  <card>
    <h4 slot="header" class="card-title">Dados pessoais</h4>
    <form :itemref=this.$root.$data.pessoa>
      <div class="row">
        <div class="col-md-7">
          <fg-input type="text"
                    label="Nome Completo"
                    placeholder="Paper dashboard"
                    v-model=" this.$root.$data.pessoa.nome">
          </fg-input>
        </div>
        <div class="col-md-5">
          <fg-input type="text"
                    label="CPF"
                    placeholder="cpf"
                    v-model="this.$root.$data.pessoa.cpf">
          </fg-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="RG"
                    placeholder="RG"
                    v-model="this.$root.$data.pessoa.rg">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Telefone"
                    placeholder="Telefone"
                    v-model="this.$root.$data.pessoa.telefone">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Estado Civil"
                    placeholder="SOLTEIRO, CASADO, DIVORCIADO, VIUVO"
                    v-model="this.$root.$data.pessoa.estadoCivil">
          </fg-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="Data de nascimento"
                    placeholder="aaaa-mm-dd"
                    v-model="this.$root.$data.pessoa.dataNascimento">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Sexo"
                    placeholder="MASCULINO, FEMININO"
                    v-model="this.$root.$data.pessoa.sexo">
          </fg-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <fg-input type="email"
                    label="email"
                    placeholder="Email"
                    v-model="this.$root.$data.pessoa.email">
          </fg-input>
        </div>
      </div>
      
      <div class="row">
      </div>
      <h5 slot="header" class="card-title">Endereço</h5>
      <div class="row">
        <div class="col-md-8">
          <fg-input type="text"
                    label="Logradouro"
                    placeholder="Rua"
                    v-model="this.$root.$data.pessoa.endereco.logradouro">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Número"
                    placeholder="Número"
                    v-model="this.$root.$data.pessoa.endereco.numero">
          </fg-input>
        </div>
      </div>

      
      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    v-model="this.$root.$data.pessoa.endereco.cidade">
          </fg-input>
        </div>
        
        <div class="col-md-4">
          <fg-input type="text"
                    label="UF"
                    placeholder="UF"
                    v-model="this.$root.$data.pessoa.endereco.uf">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Codigo Postal"
                    placeholder="Codigo Postal"
                    v-model="this.$root.$data.pessoa.endereco.cep">
          </fg-input>
        </div>
      </div>
      <h5 v-if="this.$root.$data.pessoa.coordenador" slot="header" class="card-title">Coordenação</h5>
      <div class="row">
        <div v-if="this.$root.$data.pessoa.coordenador" class="col-md-6">
          <fg-input type="text"
                    label="Data de Inicio"
                    placeholder="Cidade"
                    v-model="this.$root.$data.pessoa.dataIncio">
          </fg-input>
        </div>
      </div>
      
      <h5 v-if="this.$root.$data.pessoa.especialidade" slot="header" class="card-title">Especialista</h5>
      <div class="row">
        <div v-if="this.$root.$data.pessoa.especialidade" class="col-md-4">
          <fg-input type="text"
                    label="Especialidade"
                    placeholder="Especialidade"
                    v-model="this.$root.$data.pessoa.especialidade">
          </fg-input>
        </div>
        <div v-if="this.$root.$data.pessoa.crm" class="col-md-4">
          <fg-input type="text"
                    label="CRM"
                    placeholder="CRM"
                    v-model="this.$root.$data.pessoa.crm">
          </fg-input>
        </div>
        <div v-if="this.$root.$data.pessoa.tipo" class="col-md-4">
          <fg-input type="text"
                    label="Tipo"
                    placeholder="Tipo"
                    v-model="this.$root.$data.pessoa.tipo">
          </fg-input>
        </div>
      </div>
      
      <div class="row">
        <div v-if="this.$root.$data.pessoa.especialidade" class="col-md-12">
          <fg-input type="text"
                    label="Coordenador"
                    placeholder="Coordenador Responsável"
                    v-model="this.$root.$data.pessoa.responsavel.nome">
          </fg-input>
        </div>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>

<style>
</style>