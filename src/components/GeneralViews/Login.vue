<template>

      <b-container>
        <b-row>
            <b-col md="4" offset-md="4">
                <b-card title="DQV Consultas"
                        class="login-panel panel panel-default text-center">
                    <div class="panel-body">
                        <b-form>

                                <b-form-group feedback="invalid">
                                    <b-form-input v-model="email" placeholder="E-mail" name="email" type="email" autofocus></b-form-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-input v-model="senha" placeholder="Password" name="password" type="password"></b-form-input>
                                </b-form-group>
                                                                
                                <b-btn block="true" variant="success " v-on:click="validarLogin">Login</b-btn>
                            
                        </b-form>
                    </div>
                </b-card>
            </b-col>
        </b-row>
      </b-container>
</template>

<script>
  import ContentFooter from 'src/components/Dashboard/Layout/ContentFooter.vue'
export default {
 components: {
   ContentFooter
 },
 data (){
  return{
    msg: 'Módulo de Consultas, Bem Vindo(a)!',
    email: null,
    senha: null
    }
  },

  methods: {
    validarLogin: function (){
      if((this.email == this.$root.$data.email) && (this.senha == this.$root.$data.senha)){
        window.open('#/admin/noticias', "_self")
      }else{
        return alert("Login Inválido");
      }
    }
 }
  
}
</script>

<style>
body {
  background-color: #f8f8f8;
}
#wrapper {
  width: 100%;
}
#page-wrapper {
  padding: 0 15px;
  min-height: 568px;
  background-color: white;
}
@media (min-width: 768px) {
  #page-wrapper {
    position: inherit;
    margin: 0 0 0 250px;
    padding: 0 30px;
    border-left: 1px solid #e7e7e7;
  }
}
.login-panel {
  margin-top: 25%;
}
.btn-success {
  color: #5cb85c;
}
.panel-default {
    -moz-box-shadow:    -3x 7px 5px 2px #ccc;
  -webkit-box-shadow: 5px 7px 5px 2px #ccc;
  box-shadow:        5 px 7px 5px 2px #ccc;
}

.panel-body {
    padding: 20px;
}

</style>

