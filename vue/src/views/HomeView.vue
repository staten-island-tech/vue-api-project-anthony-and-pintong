<template>
  <BarChart />
</template>

<script>
import BarChart from '../components/BarChart.vue'
export default {
  name: 'App',
  components: { BarChart },
  data() {
    return {
      data: []
    }
  },
  mounted: async function() {
        await this.getData() 
  },
  methods: {
    getData: async function () {
    const URL = `https://data.cityofnewyork.us/resource/yjub-udmw.json`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    return data
  }
}
}

</script>

<style lang="scss" scoped></style>
