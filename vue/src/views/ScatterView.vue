<template>
  <ScatterChart />
</template>

<script>
import ScatterChart from '../components/ScatterChart.vue'
export default {
  name: 'App',
  components: { ScatterChart },
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
