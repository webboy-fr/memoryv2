<template>
    <div>
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
            <tr v-for="(score, index) in scores[0]" :key="index">
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
            <tr v-for="(score, index) in scores[1]" :key="index">
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
            <tr v-for="(score, index) in scores[2]" :key="index">
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

/*
TODO : 
- les scores ne se mettent pas a jour correctement quand on arrive automatiquement ur la page meilleur score
*/

export default {
  name: 'Scores', 
  computed:{
    ...mapState(['scores'])
  },
  methods:{
    ...mapActions(['getScores'])
  }/*,
  created: function(){
    this.getScores(0)
    this.getScores(1)
    this.getScores(2)
  }*/
}
</script>

<style lang="scss">

</style>
