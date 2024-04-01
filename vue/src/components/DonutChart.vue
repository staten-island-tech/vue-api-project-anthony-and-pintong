<template>
  <div class = "donut">
    <Doughnut v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
export default {
    name: "DonutChart",
    components: { Doughnut },
    data() {
        return {
            loaded: false,
            chartData: {
                labels:['Brooklyn', 'Queens', 'Bronx', 'Manhattan', 'Staten Island'],
                datasets: [
                    {
                        data: [],
                        backgroundColor: [
                        'rgb(128, 0, 0)',
                        'rgb(220, 220, 0)',
                        'rgb(128, 0, 128)',
                        'rgb(99, 130, 130)',
                        'rgb(77, 179, 0)'
                        ],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
            }
        }
    },
    mounted: async function() {
        await this.getData();
        this.loaded = true;

    },
    methods: {
        getData: async function () {
            try {
                let res = await fetch(`https://data.cityofnewyork.us/resource/xywu-7bv9.json`)
                let data = await res.json()
                console.log(data)

                const Brooklyn = data.find((array) => array.borough === "   Brooklyn")._2030;
                const Queens = data.find((array) => array.borough === "   Queens")._2030;
                const Bronx = data.find((array) => array.borough === "   Bronx")._2030;
                const Manhattan = data.find((array) => array.borough === "   Manhattan")._2030;
                const StatenIsland = data.find((array) => array.borough === "   Staten Island")._2030;

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

<style lang="scss" scoped>

.donut {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    width: 100%;
    border: 3px solid gray;
    padding: 10px;
    text-align: center;
    border-radius: 15px; 
    margin: 0 auto; 
    background-color: #f0f0f0;
    font-size: 1.2em;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
}


</style>
