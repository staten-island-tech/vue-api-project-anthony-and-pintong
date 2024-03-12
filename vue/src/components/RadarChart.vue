<template>
    <div>
        <h1>{{ boroughWIFI.name }}</h1>
    </div>
</template>

<script>
import { Radar } from 'vue-chartjs'


export default {
    name: 'RadarChart',
    components: { Radar },
    data() {
        return {
            boroughWIFI: {}
        }
    },
    mounted: async function() {
        await this.getWIFI() 
    },
    methods: {
        getWIFI: async function() {
            let res = await fetch(`https://data.cityofnewyork.us/resource/yjub-udmw.jsonthis.$route.params.id}`)
            let data = await res.json()
            this.boroughWIFI = data
            }
    }
}
</script>

<style scoped>
</style>
