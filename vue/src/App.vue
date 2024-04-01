
<template>

  <header>
    <div class="wrapper">
      <router-view></router-view>
      <nav>
        <RouterLink to="/WHATTHIS">Population of NYC Boroughs</RouterLink> 
        <RouterLink to="/">Population of Boroughs in 2010</RouterLink> 
        <RouterLink to="/pie">Population Boroughs in 2020</RouterLink>
        <RouterLink to="/Donut">Projected Population of Boroughs in 2030</RouterLink>
        <RouterLink to="/line">Boroughs Population Timeline</RouterLink>
        <RouterLink to="/scatter">Scatter</RouterLink>  
        

      </nav>
    </div>
  </header>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
