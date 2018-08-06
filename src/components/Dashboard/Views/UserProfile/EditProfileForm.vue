<template>
  <card>
    <h4 slot="header" class="card-title">Dados pessoais</h4>
    <form :itemref=$root.$data.usuario>
      <div class="row">
        <div class="col-md-7">
          <fg-input type="text"
                    label="Nome Completo"
                    placeholder="Paper dashboard"
                    v-model="user.nome">
          </fg-input>
        </div>
        <div class="col-md-5">
          <fg-input type="text"
                    label="CPF"
                    placeholder="cpf"
                    v-model="user.firstName">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input type="email"
                    label="email"
                    placeholder="Email"
                    v-model="user.email">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input type="text"
                    label="Endereço"
                    placeholder="Rua, Bairro e Número"
                    v-model="user.address">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    v-model="user.city">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Pais"
                    placeholder="Pais"
                    v-model="user.country">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Codigo Postal"
                    placeholder="Codigo Postal"
                    v-model="user.postalCode">
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
      return {
        user: {
          nome: 'Carlos Henrique de Azevedo Moura',
          email: 'azevedo1236@gmail.com',
          address: 'Rua cento e um, Maranguape 2',
          city: 'Paulista',
          country: 'Brasil',
          postalCode: '53421-490',
        }
      }
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