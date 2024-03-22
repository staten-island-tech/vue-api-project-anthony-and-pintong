<template>
  <div class="pie-view">
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
.pie-view {
  text-align: center;
  padding: 20px;
}
</style>