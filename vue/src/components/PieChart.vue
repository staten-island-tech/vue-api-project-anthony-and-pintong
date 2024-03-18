<template>
    <Chart 
    v-if="loaded" 
    type="pie"
    :data="chartData" 
    :options="chartOptions" />
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'PieChart',
    components: { Pie },
    data() {
        return {
            chartData: {
                labels: [ 'Brooklyn', 'Queens', 'Bronx', 'Manhattan', 'Staten Island' ],
                datasets: [ { 
                    data: [40, 20, 12] 
                } ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    Mounted: async function() {
        await this.getData() 
    },
    methods: {
        getData: async function() {
            let res = await fetch(`https://data.cityofnewyork.us/resource/xywu-7bv9.json`)
            let data = await res.json()
            console.log(data)
            this.chartdata = res
            }

            
    }
}
</script>

<style scoped>
</style>
