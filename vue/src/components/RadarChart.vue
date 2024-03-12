<template>
    <div>

    </div>
</template>

<script>
import { Radar } from 'vue-chartjs'



export default {
    extends: Radar,
    data() {
        return {
            monster: {}
        }
    },
    mounted: async function() {
        await this.getPokemon() 
    },
    methods: {
        async function() {
            const response = await fetch('https://data.cityofnewyork.us/resource/yjub-udmw.json');
            const data = await response.json();
            }
    }
}



</script>

<style lang="scss" scoped>

</style>