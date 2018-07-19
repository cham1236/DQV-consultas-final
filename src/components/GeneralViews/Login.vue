<template>

      <b-container>
        <b-row>
            <b-col md="4" offset-md="4">
                <b-card title="DQV Consultas"
                        class="login-panel panel panel-default text-center">
                    <div class="panel-body">
                        <b-form-fieldset>

                                <b-form-group>
                                    <b-form-input class="form-control" placeholder=" CPF" name="cpf" type="text" autofocus></b-form-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-input placeholder="Password" name="password" type="password" value=""></b-form-input>
                                </b-form-group>
                                
                                <!-- Change this to a button or input when using this as a form -->
                                <b-btn block="true" variant="success" href="#/admin/noticiasgit" >Login</b-btn>
                            
                        </b-form-fieldset>
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
     selected: null,
        medico: null,
        especialidades: [
          { value: null, text: 'Escolha uma Especialidade' },
          { value: 'cardio', text: 'Cardiologista' },
          { value: 'dentista', text: 'Dentista' },
          { value: 'ginecologista', text: 'Ginecologista' },
          { value: 'psicologo', text: 'Psicólogo' }
        ],
        cardiologista: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Marcela', text: 'Marcela'},
          {value: 'Caio', text: 'Caio'},
          {value: 'Felipe', text: 'Felipe'},
          {value: 'Gilberto', text: 'Gilberto'}              
        ],
        ginecologia: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Fernanda', text: 'Fernanda'},
          {value: 'Algusta', text: 'Algusta'},
          {value: 'Ricardo', text: 'Ricardo'},
          {value: 'Renata', text: 'Renata'}              
        ],
        dentista: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Angela', text: 'Angela'},
          {value: 'Aline', text: 'Aline'},
          {value: 'Rodrigo', text: 'Rodrigo'},
          {value: 'Carlos', text: 'Carlos'}              
        ],
        psocologia: [
          {value: null, text: 'Escolha um médico'},
          {value: 'Maria', text: 'Maria'},
          {value: 'Alice', text: 'Alice'},            
        ]
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

