<template>
  <card>
    <h4 slot="header" class="card-title">Dados pessoais</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <fg-input type="text"
                    label="Nome Completo"
                    :disabled="true"
                    placeholder="Paper dashboard"
                    v-model="user.nome">
          </fg-input>
        </div>
        <div class="col-md">
          <fg-input type="email"
                    label="email"
                    placeholder="Email"
                    v-model="user.email">
          </fg-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="First Name"
                    placeholder="First Name"
                    v-model="user.firstName">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    v-model="user.lastName">
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
      <!-- <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div> -->
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
          username: '',
          email: '',
          firstName: 'Carlos',
          lastName: 'Moura',
          address: 'Rua cento e um, Maranguape 2',
          city: 'Paulista',
          country: 'Brazil',
          postalCode: '53421-490',
          aboutMe: ``
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
