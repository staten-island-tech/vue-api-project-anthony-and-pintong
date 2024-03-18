<template>
  <div class="radar-view">
    <h1>Population of New York City Boroughs</h1>
    <RadarChart />
  </div>
</template>

<script>
import RadarChart from '../components/RadarChart.vue';

export default {
  name: 'RadarView',
  components: {
    RadarChart,
  },
};
</script>

<style scoped>
.radar-view {
  text-align: center;
  padding: 20px;
}
</style>