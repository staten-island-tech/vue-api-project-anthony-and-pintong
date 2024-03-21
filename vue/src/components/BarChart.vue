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
      chartData: null,
      chartOptions: {
        responsive: true
      },
      mounted: async function () {
        await this.getData()
      },
      methods: {
        getData: async function () {
          this.loaded = false
          const URL = `https://data.cityofnewyork.us/resource/xywu-7bv9.json`
          const response = await fetch(URL)
          const data = await response.json().catch(error => console.log(error))
          console.log(data)

          for (let i = 0; i < data.length; i++) {
            console.log(data[i]._2020, data[i].borough);
          }
          this.loaded = true
          this.chartData = data
          return data
        }
      },
    }
  }
}
</script>

<style lang="scss" scoped></style>

<!-- https://data.cityofnewyork.us/City-Government/NYC-Wi-Fi-Hotspot-Locations/yjub-udmw/about_data -->
