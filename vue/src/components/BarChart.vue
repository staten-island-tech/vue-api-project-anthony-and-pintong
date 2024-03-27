<template>
  <Bar v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
        return {
            loaded: false,
            chartData: {
                labels:['Brooklyn', 'Queens', 'Bronx', 'Manhattan', 'Staten Island'],
                datasets: [
                    {   
                        label: 'Population',
                        data: [],
                        backgroundColor: [
                        '#FA7070',
                        '#FEFDED',
                        '#C6EBC5',
                        '#A1C398',
                        '#B0C5A4'
                        ],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
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
          const data = await response.json().catch(error => console.log(error))
          console.log(data)

          const Brooklyn = data.find((array) => array.borough === "   Brooklyn")._2010;
          const Queens = data.find((array) => array.borough === "   Queens")._2010;
          const Bronx = data.find((array) => array.borough === "   Bronx")._2010;
          const Manhattan = data.find((array) => array.borough === "   Manhattan")._2010;
          const StatenIsland = data.find((array) => array.borough === "   Staten Island")._2010;
          this.chartData.datasets[0].data[0] = Brooklyn;
          this.chartData.datasets[0].data[1] = Queens;
          this.chartData.datasets[0].data[2] = Bronx;
          this.chartData.datasets[0].data[3] = Manhattan;
          this.chartData.datasets[0].data[4] = StatenIsland;
          return data
        }
      },
    }
</script>

<style lang="scss" scoped></style>

<!-- https://data.cityofnewyork.us/City-Government/NYC-Wi-Fi-Hotspot-Locations/yjub-udmw/about_data -->
