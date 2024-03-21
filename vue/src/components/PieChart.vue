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
      this.getData();
      this.loaded = true;
    },
    methods: {
        getData: async function() {
          try {
            let res = await fetch(`https://data.cityofnewyork.us/resource/xywu-7bv9.json`)
            let data = await res.json();
            console.log(data);

            for (let i = 0; i < data.length; i++) {
              console.log(data[i]._2020, data[i].borough); 
              

            const Brooklyn = data[2]._2020,
            const Queens = data[4]._2020,
            const Bronx = data[1]._2020,
            const Manhattan = data[3]._2020,
            const Staten Island = data[5]._2020,

            }
            

          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
  };
  </script>

 //const array1 = [5, 12, 8, 130, 44];

 const found = array1.find((element) => element > 10);

 // const Brooklyn = data.find((borough) => borough === "   Brooklyn");
 // console.log(Brooklyn) 