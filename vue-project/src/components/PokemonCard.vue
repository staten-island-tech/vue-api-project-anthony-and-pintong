<template>
    <router-link :to="pkmnPath" class="card">
        <h2>{{ pokemon.name }}</h2>
        <h3>{{ id }}</h3>
    </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    pokemon: Object,
    id: Number
})

const pkmnPath = computed(() => {
    return `/PokemonData/${props.pokemon.name}`
})

</script>

<style  scoped>

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    display: flex;
    flex-direction: column;
    width: 28%;
    height: 500px;
    background-color: rgb(177, 195, 212);
    margin: 30px 0;
    align-items: center;
    padding: 10px;
    text-transform: uppercase;
}

img {
    width: 100%;
    height: 80%;
    object-fit: cover;
}
</style>

