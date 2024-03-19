<template>
    <Pie 
    v-if="loaded" 
    :data="chartData" 
    :options="chartOptions" />
</template>

  
<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

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
                'rgba(153, 102, 255, 0.6)',
              ],
            },
          ],
        },
        chartOptions: {
          responsive: true,
        },
      };
    },
    mounted: async function() {
      await this.getData();
      this.loaded = true;
    },
    methods: {
        getData: async function() {
          try {
            let res = await fetch(`https://data.cityofnewyork.us/resource/xywu-7bv9.json`)
            let data = await res.json();


            const Brooklyn = //pass data from api         "_2020": "2330295",
            const Queens = 
            const Bronx = 
            const Manhattan =
            const Staten Island = 
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
  };
  </script>