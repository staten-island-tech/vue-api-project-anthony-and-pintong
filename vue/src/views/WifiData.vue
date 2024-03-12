<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  methods: async function () {
    const URL = `https://data.cityofnewyork.us/resource/yjub-udmw.json`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    return data
  }
}
</script>

<style lang="scss" scoped></style>
