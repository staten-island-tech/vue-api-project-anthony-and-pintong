<template>
    <div>
        <Donut v-if="loaded" :data="chartData"/>
    </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
export default {
    name: "DonutChart",
    components: {Doughnut}
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
                        ]
                    }
                ]
    }
    
            },
            chartOptions: {
                responsive: true
            },
            mounted: async function() {
                await this.getPokemon() 
                this.loaded = true
                
            },
            methods: {
                getPokemon: async function() {
                    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`)
                    let data = await res.json()
                    this.monster = data
                    }
            }
        }
}
</script>

<style lang="scss" scoped>

</style>