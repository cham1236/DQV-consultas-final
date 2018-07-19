<template>
<!--    <b-container fluid class="back wrapper content">
      <b-row  align-v="center">
         <b-col class="div-center">
           <div>
             <b-img center fluid src="static/img/Brasão_UFRPE.png" id="logo"></b-img>
             <h1><strong>DQV</strong></h1>
             <h3>{{msg}}</h3>
           </div>
            <b-form-group>
               <b-form-input type="text"
                        placeholder="CPF"></b-form-input>
                
               <b-form-input type="password"
                           placeholder="Senha"></b-form-input>
               <b-btn variant="primary" href="#/admin/noticias">Login</b-btn>
            </b-form-group>
         </b-col>
         <div class="w-100"></div>
         <b-col>
          <content-footer></content-footer>
        </b-col>
      </b-row>

      <b-row align-v="end" no-gutters="true">
      </b-row>
   </b-container>
   -->
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
                                <b-btn block="true" variant="success" >Login</b-btn>
                            
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
     msg: 'Módulo de Consultas, Bem Vindo(a)!'
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


/* .back {
  background: #e2e2e2;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}

.div-center {
  width: 400px;
  height: 400px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 1em 2em;
  border-bottom: 2px solid #ccc;
  display: table;
}

div.content {
  display: table-cell;
  vertical-align: middle;
}

#logo{
  height: 50%;
  width: 25%;
  padding-bottom: 30px;
} */

</style>

