<template>
  <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PieElement, CategoryScale, LinearScale)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [4, 20, 122] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

<!-- https://data.cityofnewyork.us/City-Government/NYC-Wi-Fi-Hotspot-Locations/yjub-udmw/about_data -->
