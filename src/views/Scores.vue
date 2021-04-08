<!-- Page gérant l'affichage des scores -->
<template>
    <div class="container">
      <h2>Meilleurs scores</h2>
      <p>N'affiche que les 5 meilleurs résultats par niveau de difficulté</p>
      <div class="row">
        <div class="col">
          <h3>Facile</h3>
          <table class="table table-striped">
            <tr>
              <th>Joueur</th>
              <th>Temps</th>
            </tr>
            <tr v-for="(score, index) in scores[0]" :key="index"> <!-- On boucle sur l'index 0 du tableau scores (facile)-->
              <td>{{score.player}}</td>
              <td>{{score.time}}</td>
            </tr>
          </table>
        </div>
        <div class="col">
          <h3>Moyen</h3>
          <table class="table table-striped">
            <tr>
              <th>Joueur</th>
              <th>Temps</th>
            </tr>
            <tr v-for="(score, index) in scores[1]" :key="index"> <!-- On boucle sur l'index 1 du tableau scores (moyen) -->
              <td>{{score.player}}</td>
              <td>{{score.time}}</td>
            </tr>
          </table>
        </div>
        <div class="col">
          <h3>Difficile</h3>
          <table class="table table-striped">
            <tr>
              <th>Joueur</th>
              <th>Temps</th>
            </tr>
            <tr v-for="(score, index) in scores[2]" :key="index"> <!-- On boucle sur l'index 2 du tableau scores (difficile) -->
              <td>{{score.player}}</td>
              <td>{{score.time}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  name: 'Scores', 
  computed:{
    ...mapState(['scores'])
  },
  methods:{
    ...mapActions(['getScores'])
  }
}
</script>

<style lang="scss">

</style>
