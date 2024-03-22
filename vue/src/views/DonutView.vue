<template>
  <div class="donut-view">
    <h1>Population of New York City Boroughs</h1>
    <DonutChart />
  </div>
</template>

<script>
import DonutChart from '../components/DonutChart.vue';

export default {
  name: 'DonutView',
  components: {
    DonutChart,
  },
};
</script>

<style scoped>
.donut-view {
  text-align: center;
  padding: 20px;
}
</style>