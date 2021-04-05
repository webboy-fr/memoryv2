<template>
  <div id="app">
    <nav class="text-center">
      <router-link :to="{ name: 'Home'}" class="m-3 btn btn-primary">Accueil</router-link>
      <router-link :to="{ name: 'Play'}" class="m-3 btn btn-success">Jouer</router-link>
      <router-link :to="{ name: 'Scores'}" class="m-3 btn btn-warning">Meilleurs scores</router-link>
    </nav>
    <hr>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
