<template>
  <div class="pie-view">
    <h1>Population of New York City Boroughs</h1>
    <PieChart />
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue';

export default {
  name: 'PieView',
  components: {
    PieChart,
  },
};
</script>

<style scoped>
.pie-view {
  text-align: center;
  padding: 20px;
}
</style>