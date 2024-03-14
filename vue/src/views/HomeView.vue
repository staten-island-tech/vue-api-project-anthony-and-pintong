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
  mounted: async function () {
    await this.getData()
  },
  methods: {
    getData: async function () {
      const URL = `https://data.cityofnewyork.us/resource/xywu-7bv9.json`
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      this.listData = data
      let dataPrint = this.listData;

      for (let i = 0; i < dataPrint.length; i++) {
        console.log(dataPrint[1]);
      }
      return data
    }
  }
}

</script>

<style lang="scss" scoped>
html {
    font-family: 'Courier New', Courier, monospace;
}
</style>
