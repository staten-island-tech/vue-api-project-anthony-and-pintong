<template>
  <BarChart />
</template>

<script>
import BarChart from '../components/BarChart.vue'

const wifiLocations = ref('')
async function wifiLocations() {
  let res = await fetch("https://data.cityofnewyork.us/resource/yjub-udmw.json")
  let data = await res.json()
  wifiLocations.value = data.results
}



export default {
  name: 'App',
  components: { BarChart }
}

onMounted(() => {
  getwifiLocation
}),
</script>

