<template>
  <Scatter v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Scatter } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ScatterElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ScatterElement, CategoryScale, LinearScale)

export default {
  name: 'ScatterChart',
  components: { Scatter },
  data() {
        return {
            loaded: false,
            chartData: {
                labels:['Brooklyn', 'Queens', 'Bronx', 'Manhattan', 'Staten Island'],
                datasets: [
                    {   
                      label: 'Scatter Dataset 1',
      fill: false,
      borderColor: '#f87979',
      backgroundColor: '#f87979',
      data: [
        {
          x: -2,
          y: 4
        },
        {
          x: -1,
          y: 1
        },
        {
          x: 0,
          y: 0
        },
        {
          x: 1,
          y: 1
        },
        {
          x: 2,
          y: 4
        }
      ]
    },
    {
      label: 'Scatter Dataset 2',
      fill: false,
      borderColor: '#7acbf9',
      backgroundColor: '#7acbf9',
      data: [
        {
          x: -2,
          y: -4
        },
        {
          x: -1,
          y: -1
        },
        {
          x: 0,
          y: 1
        },
        {
          x: 1,
          y: -1
        },
        {
          x: 2,
          y: -4
        }
      ]
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
          return data
        }
      },
    }
</script>

<style lang="scss" scoped></style>

<!-- https://data.cityofnewyork.us/City-Government/NYC-Wi-Fi-Hotspot-Locations/yjub-udmw/about_data -->
