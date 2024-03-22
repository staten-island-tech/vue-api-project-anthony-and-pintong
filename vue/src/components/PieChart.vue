<template>
  <Pie v-if="loaded" :data="chartData"/>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Brooklyn', 'Queens', 'Bronx', 'Manhattan', 'Staten Island'],
        datasets: [
          {
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  mounted: async function () {
    await this.getData()
    this.loaded = true
  },
  methods: {
    getData: async function () {
      try {
        let res = await fetch(`https://data.cityofnewyork.us/resource/xywu-7bv9.json`)
        let data = await res.json()
        console.log(data)

        const Brooklyn = data.find((array) => array.borough === "   Brooklyn")._2020;
        const Queens = data.find((array) => array.borough === "   Queens")._2020;
        const Bronx = data.find((array) => array.borough === "   Bronx")._2020;
        const Manhattan = data.find((array) => array.borough === "   Manhattan")._2020;
        const StatenIsland = data.find((array) => array.borough === "   Staten Island")._2020;

        console.log(Brooklyn)
        console.log(Queens)
        console.log(Bronx)
        console.log(Manhattan)
        console.log(StatenIsland)

        this.chartData.datasets[0].data[0] = Brooklyn;
        this.chartData.datasets[0].data[1] = Queens;
        this.chartData.datasets[0].data[2] = Bronx;
        this.chartData.datasets[0].data[3] = Manhattan;
        this.chartData.datasets[0].data[4] = StatenIsland;
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>

//const array1 = [5, 12, 8, 130, 44]; const found = array1.find((element) => element > 10); //
console.log(Brooklyn) // for (let i = 0; i < data.length; i++) { // console.log(data[i]._2020,
data[i].borough);
<!-- https://www.chartjs.org/docs/latest/developers/api.html -->