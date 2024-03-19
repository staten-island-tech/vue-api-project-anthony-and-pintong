<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
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
      chartOptions: {
        responsive: true
      },
      mounted: async function () {
        await this.getData()
      },
      methods: {
        getData: async function () {
          const URL = `https://data.cityofnewyork.us/resource/xywu-7bv9.json`
          const response = await fetch(URL)
          const data = await response.json()
          console.log(data)
          this.listData = data
          let dataPrint = this.listData;

          for (let i = 0; i < dataPrint.length; i++) {
            console.log(dataPrint[i]);
          }
          this.finalData = dataPrint
          return finalData[i]
        }
      },
      chartData: {
        labels: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'],
        datasets: [{ data: [finalData,1,1,1,1] }]
      },
    }
  }
}
</script>

<style lang="scss" scoped></style>

<!-- https://data.cityofnewyork.us/City-Government/NYC-Wi-Fi-Hotspot-Locations/yjub-udmw/about_data -->
