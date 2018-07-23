<template>
  <div class="content">
    <b-container fluid>

      <b-row class="justify-content-md-center">
        <b-col md="10">
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd" >

          <b-carousel-slide caption="UFRPE Sustentável"
                            img-src="http://www.ufrpe.br/sites/www.ufrpe.br/files/UFRPE%20Sustentável%20-%20logo_1.png"
          ></b-carousel-slide>

          <b-carousel-slide caption="Plano de Desenvolvimento Institucional da UFRPE"
                            text="Lançada versão revisada e atualizada do Plano de Desenvolvimento Institucional da UFRPE"
                            img-src="http://www.ufrpe.br/sites/www.ufrpe.br/files/UFRPE%20Sustentável%20-%20logo_1.png"
          ></b-carousel-slide>

          <b-carousel-slide caption="Encontro de Pesquisa Educacional em Pernambuco"
                            text="O Encontro de Pesquisa Educacional em Pernambuco (epePE) recebe inscrição para participantes sem submissão de trabalhos até o dia 26 de Setembro."
                            img-src="http://www.ufrpe.br/sites/www.ufrpe.br/files/UFRPE%20Sustentável%20-%20logo_1.png"
          ></b-carousel-slide>
        </b-carousel>
        <br><br>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-card title="Questionário CPA 2018"
          sub-title=" "
          img-src="http://www.ufrpe.br/sites/www.ufrpe.br/files/cpa%20menor.png"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-4">
          <p class="card-text">Sabe aquele momento exato, no lugar certo e no formato ideal para que 
            suas manifestações sejam direcionadas com sucesso? Pois a hora chegou: já está no ar o 
            Questionário CPA 2018, por meio do qual estudantes, docentes e técnicos-administrativos podem avaliar 
            as políticas de gestão e a infraestrutura da UFRPE. Para registrar suas impressões sobre a Universidade
             onde estuda ou trabalha</p>
          <b-button href="http://www.cpa.ufrpe.br/" variant="primary">Clique aqui e responda a pesquisa</b-button>
          </b-card>
        </b-col>

        <div class="col-md-4">
          <b-card border-variant="light"
                header="Links úteis"
                class="text-center">
            <p class="card-text">
              <b-list-group>
                <b-list-group-item href="http://www.ufrpe.br">UFRPE - SEDE</b-list-group-item>
                <b-list-group-item href="http://ww3.uag.ufrpe.br">UFRPE - UAG</b-list-group-item>
                <b-list-group-item href="http://ww4.ufrpe.br/uast/newsite/">UFRPE - UAST</b-list-group-item>
                <b-list-group-item href="http://ww2.ouvidoria.ufrpe.br">Ouvidoria</b-list-group-item>
                <b-list-group-item href="http://www.transparencia.gov.br">Portal da Transparencia</b-list-group-item>
              </b-list-group>
            </p>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'

  export default {
    components: {
      Checkbox,
      Card,
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      return {
        slide: 0,
        sliding: null,
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['40%', '20%', '40%'],
            series: [40, 20, 40]
          }
        },
        lineChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 492, 554, 586, 698, 695],
              [67, 152, 143, 240, 287, 335, 435, 437],
              [23, 113, 67, 108, 190, 239, 307, 308]
            ]
          },
          options: {
            low: 0,
            high: 800,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        barChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        tableData: {
          data: [
            {title: 'Sign contract for "What are conference organizers afraid of?"', checked: false},
            {title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true},
            {
              title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              checked: true
            },
            {title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false},
            {title: 'Read "Following makes Medium better"', checked: false},
            {title: 'Unfollow 5 enemies from twitter', checked: false}
          ]
        }
      }
    },
    methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
  }
</script>
<style>

</style>
