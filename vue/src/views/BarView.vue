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
}

</script>

<style lang="scss" scoped>
html {
    font-family: 'Courier New', Courier, monospace;
}
</style>
