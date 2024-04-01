<template>
    <div class="line-view">
      <h1>Population of New York City Boroughs</h1>
      <LineChart />
    </div>
  </template>
  
  <script>
  import LineChart from '../components/LineChart.vue';
  
  export default {
    name: 'LineView',
    components: {
      LineChart,
    },
  };
  </script>
  
  <style scoped>
  .line-view {
    text-align: center;
    padding: 20px;
  }
  </style>