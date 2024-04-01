<template>
    <div class="about-container">
        <div class="text-container">
            <h1>Population of Boroughs in NYC</h1>
            <p>
                The population of the five boroughs of New York City has undergone significant changes over the last
                decade. The unique culture and demographics of each borough have brought a lot of tourism and caused
                fluctuations in population. To fully map out the extent of these population shifts, please click on the
                links below to view in-depth charts that graph out the population changes in each borough over time.
            </p>
            <ul class="links-container">
                <li>
                    <RouterLink to="/">Population of Boroughs in 2010</RouterLink>
                </li>
                <li>
                    <RouterLink to="/pie">Population Boroughs in 2020</RouterLink>
                </li>
                <li>
                    <RouterLink to="/donut">Projected Population of Boroughs in 2030</RouterLink>
                </li>
                <li>
                    <RouterLink to="/line">Boroughs Population Timeline</RouterLink>
                </li>
            </ul>
        </div>
        <div class="img-container">
            <img src="https://images.pexels.com/photos/887848/pexels-photo-887848.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="">
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.about-container {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: azure;
}

.text-container,
.img-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    max-width: 60%;
}

.img-container img {
    max-width: 80%;
    max-height: 80vh;
}

.links-container {
    margin-top: 20px;
}

.links-container li {
    margin-bottom: 10px;
}
</style>