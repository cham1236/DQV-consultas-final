<template>
    <card>
    <h2  slot="header" class="b-container-title">Cadastrar Usuario</h2>
    <b-form>
      <h3>Dados Pessoais</h3>
      <div class="row">
        <div class="col-md-12">
          <b-input type="email"
                    label="E-mail"
                    placeholder="john.doe@ufrpe.br"
                    v-model="email">
          </b-input>
        </div>
        <div class="col-md-6">
          <b-input type="password"
                    label="Senha"
                    placeholder="Senha123"
                    v-model="pass">
          </b-input>
        </div>
        <div class="col-md-6">
          <b-input type="password"
                    label="Confirmar Senha"
                    placeholder="Senha123"
                    v-model="pass2">
          </b-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <b-input type="text"
                    label="Nome Completo"
                    placeholder="John Doe"
                    v-model="nome">
          </b-input>
        </div>
        <div class="col-md-4">
          <b-input type="text"
                    label="RG"
                    placeholder="RG"
                    v-model="rg">
          </b-input>
        </div>
    
        <div class="col-md-4">
          <b-input type="text"
                    label="CPF"
                    placeholder="CPF"
                    v-model="cpf">
          </b-input>
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
          <b-input type="text"
                    label="Telefone"
                    placeholder="(81) 99999-9999"
                    v-model="telefone">
          </b-input>
        </div>

        <div class="col-md-4">
          <label>Data de Nascimento</label>
          <v-date-picker mode='single'
                         v-model="dataSelecionada">
          </v-date-picker> 
        </div>
      </div>
      <h3>Endereço</h3>
      <div class="row">
        <div class="col-md-12">
          <b-input type="text"
                    label="Endereço"
                    placeholder="Logradouro"
                    v-model="endereco.logradouro">
          </b-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <b-input type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    v-model="endereco.cidade">
          </b-input>
        </div>
        <div class="col-md-4">
          <b-input type="text"
                    label="Pais"
                    placeholder="Pais"
                    v-model="endereco.uf">
          </b-input>
        </div>
        <div class="col-md-4">
          <b-input type="text"
                    label="CEP"
                    placeholder="CEP"
                    v-model="endereco.cep">
          </b-input>
        </div>
      </div>
      <b-row>
        <b-col>
          <b-btn variant="success" block=true v-on:click="addUsuario">Cadastrar</b-btn>
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

        email: null,
        pass: null,
        pass2: null,
        nome: null,
        rg: null,
        cpf: null,
        telefone: null,
        sexo: null,
        estadoCivil: null,
        dataNascimento: null,

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
          coordenador: null,
          agendamentoConsultaPaciente: [],
          endereco: {}            
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
        ],
        
        dataSelecionada: null,


      }
   },

   methods: {

     addUsuario: function (){
        this.user.email = this.email;
        this.user.pass = this.pass;
        this.user.nome = this.nome;
        this.user.rg = this.rg;
        this.user.cpf = this.cpf;
        this.user.sexo = this.sexo;
        this.user.telefone = this.telefone;
        this.user.dataNascimento = this.dataNascimento;
        this.user.endereco = this.endereco;
        this.user.estadoCivil = this.estadoCivil;
        console.log(this.user)
     }

   }
   
}
</script>


