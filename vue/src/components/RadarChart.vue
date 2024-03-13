<template>
    <div>
        <h1>{{ boroughPop._2020 }}</h1>
    </div>
</template>

<script>
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'RadarChart',
    components: { Radar },
    data() {
        return {
            boroughPop: {}
        }
    },
    onMounted: async function() {
        await this.getData() 
    },
    methods: {
        getData: async function() {
            let res = await fetch(`https://data.cityofnewyork.us/resource/xywu-7bv9.json`)
            let data = await res.json()
            console.log(data)
            this.boroughPop = data
            }
    }
}
</script>

<style scoped>
</style>
