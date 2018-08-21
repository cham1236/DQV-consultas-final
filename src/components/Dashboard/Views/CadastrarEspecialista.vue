<template>
    <card>
      <h2  slot="header" class="b-container-title">Cadastrar Especialista</h2>
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

        <b-row>
          <b-col md="12">
            <b-btn  block=true v-on:click="addEndereco">Cadastrar Endereco</b-btn>
          </b-col>  
        </b-row>
        
        <h3>Dados Pessoais</h3>
        <b-row>        
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
        </b-row>
        <b-row>
          <div class="col-md-12">
            <fg-input type="text"
                      label="Nome Completo"
                      placeholder="John Doe"
                      v-model="nome">
            </fg-input>
          </div>
        </b-row>
        <b-row>
          <div class="col-md-4">
            <fg-input type="text"
                      label="RG"
                      placeholder="RG"
                      v-model="rg">
            </fg-input>
          </div>
      
          <div class="col-md-3">
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
        </b-row>

        <b-row>
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

          <div class="col-md-3">
            <label>Data de Nascimento</label>
            <v-date-picker mode='single'
                          v-model='dataNascimento'>
            </v-date-picker> 
          </div>
        </b-row>

      <h3>Pertinente ao Especialista</h3>   
      <b-row>
          <div class="col-md-4">
            <label for="#especialidade">Especialidade</label>
            <b-select id="especialidade" v-model="especialidade" :options="enumEspecialidade"></b-select>
          </div>
          <div class="col-md-4">
            <label for="#coordenador"></label>
            <b-select id="coordenador" v-model="coordenador" :options="coordenadores"></b-select>
          </div>  
                  
      </b-row> 

        <b-row>
          <b-col md="12">
            <b-btn variant="primary" block=true v-on:click="cadastrarPessoa">Finalizar Cadastro</b-btn>
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
    created () {
      this.$http.get('http://localhost:9000/especialista/'+this.$root.$data.pessoa.e.id).then(response => {
        this.coordenador = response.data;
        console.log();

        }, response => {
            console.log(response);
        })
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
        enumEspecialidade: [
          { value: null, text: 'Escolha uma Especialidade' },
          { value: 'ASSISTENTE_SOCIAL', text: 'Assistente Social' },
          { value: 'PSICOLOGO', text: 'Psicólogo' },
          { value: 'NUTRICIONISTA', text: 'Nutricionista' },
          { value: 'ORTODONTISTA', text: 'Ortodontista' },
          { value: 'MEDICO', text: 'Médico' }
        ],
        coordenador: {},
        coordenadores: [{}]
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
     cadastrarPessoa: function (){
       
       this.user.email = this.email;
        this.user.pass = this.pass;
        this.user.nome = this.nome;
        this.user.rg = this.rg;
        this.user.cpf = this.cpf;
        this.user.sexo = this.sexo;
        this.user.telefone = this.telefone;
        this.user.dataNascimento = this.dataNascimento;
        this.user.estadoCivil = this.estadoCivil;
       
        this.$http.post('http://localhost:9000/pessoa', this.user).then(function (response) {
          // Success
          console.log(response.data);
        },function (response) {
          // Error
          console.log(response.data)
        });
     }

   }
   
}
</script>


