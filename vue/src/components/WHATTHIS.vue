<template>
    <div class="about-container">
        <div class="text-container">
            <h1>Population of Boroughs in NYC</h1>
            <p>New York City, consists of five distinct boroughs - Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Over the last century the popuation has undergone many changes reflecting the states growing landscape. Each borough boasts different attractions and experiences making it a top destination for tourists around the world. 
                
                
                
                To fully visualize these population shifts and gain a deeper understanding of the demographic trends shaping New York City, please click on the links below to view in-depth charts that display these data.
            </p>
            <ul class="links-container">
                <li>
                    <RouterLink to="/bar">Population of Boroughs in 2010</RouterLink>
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
                <li>
                    <RouterLink to="/scatter">Population of NYC Timeline</RouterLink>
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
    background-color: #292626;
    color:antiquewhite;
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