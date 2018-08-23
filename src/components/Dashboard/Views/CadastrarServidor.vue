<template>
    <card>
    <h2  slot="header" class="b-container-title">Cadastrar Servidor</h2>
    <b-form>

      <h3>Endereço</h3>
      <div class="row">
        <div class="col-md-8">
          <fg-input type="text"
                    label="Logradouro"
                    placeholder="Logradouro"
                    v-model="logradouro">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="numero"
                    placeholder="Número"
                    v-model="numero">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    v-model="cidade">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Pais"
                    placeholder="Pais"
                    v-model="uf">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="CEP"
                    placeholder="CEP"
                    v-model="cep">
          </fg-input>
        </div>
      </div>

      <!-- <b-row>
        <b-col md="12">
          <b-btn  block=true v-on:click="addEndereco">Cadastrar Endereco</b-btn>
        </b-col>  
      </b-row> -->
      <b-row>        
      <h3>Dados Pessoais</h3>
      <div class="row">
        <div class="col-md-12">
          <fg-input type="email"
                    label="E-mail"
                    placeholder="john.doe@ufrpe.br"
                    v-model="email">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="password"
                    label="Senha"
                    placeholder="Senha123"
                    v-model="pass">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="password"
                    label="Confirmar Senha"
                    placeholder="Senha123"
                    v-model="pass2">
          </fg-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <fg-input type="text"
                    label="Nome Completo"
                    placeholder="John Doe"
                    v-model="nome">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="RG"
                    placeholder="RG"
                    v-model="rg">
          </fg-input>
        </div>
    
        <div class="col-md-4">
          <fg-input type="text"
                    label="CPF"
                    placeholder="CPF"
                    v-model="cpf">
          </fg-input>
        </div>
        <div class="col-md-4">
            <label for="#sexo">Sexo</label>
            <b-form-radio-group id="sexo" v-model="sexo" name="sexo" :options="enumSexo"></b-form-radio-group>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <label for="#estadoCivil">Estado Civil</label>
          <b-select id="estadoCivil" v-model="estadoCivil" :options="enumEstadoCivil"></b-select>
        </div>

        <div class="col-md-4">
          <fg-input type="text"
                    label="Telefone"
                    placeholder="(81) 99999-9999"
                    v-model="telefone">
          </fg-input>
        </div>

        <div class="col-md-4">
            <label>Data de Nascimento</label>
            <v-date-picker mode='single'
                         v-model='dataNascimento'
                         :input-props='{ class: "input", placeholder: "Data de Nascimento", readonly: false }'>>
            </v-date-picker> 
        </div>
      </div>
     
      </b-row>

      <b-row>
          <b-col md="12">
          <b-btn  block=true variant="primary" v-on:click="cadastrar">Cadastrar Servidor</b-btn>
        </b-col> 
      </b-row>
      <div class="clearfix"></div>
    </b-form>
  </card>
</template>
<script>
import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
   data () {
      return{

        email: '' ,
        pass: '',
        pass2: '',
        nome: '',
        rg: '',
        cpf: '',
        telefone: '',
        sexo: '',
        estadoCivil: '',
        dataNascimento: null,

        cep: null,
        logradouro: null,
        numero: null,
        cidade: null,
        uf: null,

        endereco: {
          cep: null,
          logradouro: null,
          numero: null,
          cidade: null,
          uf: null
        },

        user: {
          email: null,
          pass: null,
          nome: null,
          rg: null,
          cpf: null,
          telefone: null,
          sexo: null,
          estadoCivil: null,
          dataNascimento: null,
          dataInicio: null,
          dataFim: null,
          coordenador: false,
          endereco: {}, 
          situacao: "ATIVO"
        },

        sexo: null,
        enumSexo: [
          {text: 'Masculino', value:'MASCULINO'},
          {text: 'Feminino', value:'FEMININO'}
        ],

        estadoCivil: null,
        enumEstadoCivil: [
          {text: 'Solteiro', value:'SOLTEIRO'},
          {text: 'Casado', value:'CASADO'},
          {text: 'Divorciado', value:'DIVORCIADO'},
          {text: 'Viúvo', value:'VIUVO'}
        ]
      }
   },

   methods: {

      addEndereco: function (){
        this.endereco.cep = this.cep;
        this.endereco.logradouro = this.logradouro;
        this.endereco.numero = this.numero;
        this.endereco.cidade = this.cidade;
        this.endereco.uf = this.uf;

        this.$http.post('http://localhost:9000/endereco', this.endereco).then(function (response) {
          // Success
          this.user.endereco = response.data;
          console.log(response.data);
        },function (response) {
          // Error
          console.log(response.data)
        });
        
      },

      addUsuario: function (){
        this.user.email = this.email;
        this.user.pass = this.pass;
        this.user.nome = this.nome;
        this.user.rg = this.rg;
        this.user.cpf = this.cpf;
        this.user.sexo = this.sexo;
        this.user.telefone = this.telefone;
        this.user.dataNascimento = this.dataNascimento;
        this.user.estadoCivil = this.estadoCivil;
        console.log(this.user)
     },

     cadastrar: function (){
       
       this.user.email = this.email;
        this.user.pass = this.pass;
        this.user.nome = this.nome;
        this.user.rg = this.rg;
        this.user.cpf = this.cpf;
        this.user.sexo = this.sexo;
        this.user.telefone = this.telefone;
        this.user.dataNascimento = this.dataNascimento;
        this.user.estadoCivil = this.estadoCivil;

        this.endereco.cep = this.cep;
        this.endereco.logradouro = this.logradouro;
        this.endereco.numero = this.numero;
        this.endereco.cidade = this.cidade;
        this.endereco.uf = this.uf;
       
        
        this.$http.post('http://localhost:9000/endereco', this.endereco).then(function (response) {
          // Success
          this.user.endereco = response.data;
          this.$http.post('http://localhost:9000/servidor', this.user).then(function (response) {
            // Success
            console.log(response.data);
          },function (response) {
            // Error
            console.log(response.data)
          });

        },function (response) {
          // Error
          console.log(response.data)
        });  
     }
   }
}
</script>