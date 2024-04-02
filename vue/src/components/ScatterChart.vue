<template>
<div class="chart-container">
  <h1>Population of NYC Timeline</h1>
  <Scatter v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import { Scatter } from 'vue-chartjs'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export default {
  name: 'ScatterChart',
  components: { Scatter },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [
          'NYC Total in 1950',
          'NYC Total in 1960',
          'NYC Total in 1970',
          'NYC Total in 1980',
          'NYC Total in 1990',
          'NYC Total in 2000',
          'NYC Total in 2010',
          'NYC Total in 2020'
        ],
        datasets: [
          {
            label: 'Population',
            fill: false,
            borderColor: '#f87979',
            backgroundColor: '#f87979',
            data: [
              {
                x: 1950,
                y: 0
              },
              {
                x: 1960,
                y: 0
              },
              {
                x: 1970,
                y: 0
              },
              {
                x: 1980,
                y: 0
              },
              {
                x: 1990,
                y: 0
              },
              {
                x: 2000,
                y: 0
              },
              {
                x: 2010,
                y: 0
              },
              {
                x: 2020,
                y: 0
              }
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'NYC Total from 1950-2020'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Decade'
            }, 
            ticks: {
              callback: function(value, index, values) {
                return value;
              }
            }
          },
          y: {
            min: 6000000,
            max: 9000000,
            stepSize: 500000,
            title: {
              display: true,
              text: 'Population'
            }
          }
        }
      }
    }
  },
  mounted: async function () {
    await this.getData()
    this.loaded = true
  },
  methods: {
    getData: async function () {
      const URL = `https://data.cityofnewyork.us/resource/xywu-7bv9.json`
      const response = await fetch(URL)
      const data = await response.json().catch((error) => console.log(error))
      console.log(data)
      const years = ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020']
      const nyctotal = data.find((array) => array.borough === 'NYC Total')
      console.log(nyctotal)
      for (let q = 0; q < years.length; q++) {
        const value = nyctotal[`_${years[q]}`]
        const years1 = years[q]
        console.log(value)
        this.chartData.datasets[0].data[q].y = value
        this.chartData.datasets[0].data[q].x = years1
      }
      
      return data
    }
  }
}
</script>

<style lang="scss" scoped>

.chart-container {
    width: 55rem;
    height: 41.250rem;
    margin: 0 auto;
    margin-top: 5rem;
}

h1 {
  margin: auto;
  text-align: center;
  padding: 20px;
}
</style>
