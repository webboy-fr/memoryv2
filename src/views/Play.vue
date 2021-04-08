<template>
  <div>    
    Diificulté : <select v-model="selectedLevel" :disabled="game.length > 0"> <!-- v-model et disabled : bind avec un state-->
      <option v-for="(level, index) in levelList" :key="index" :value="index"> <!--Boucle sur les niveau de difficulté pour le select -->
        {{ level }} <!-- Interpolation mousatche -->
      </option>
    </select>    
    <br />
    Temps ecoulé : {{ timer }} secondes <!-- Interpolation mousatche -->
    <br />
    <button @click="newGame()">Nouvelle partie</button> <!-- event click déclenche action store newGame -->
    <div v-if="victory" id="recordScore"> <!-- Div pour enregistrer score -->
      <h1>Bravo ! Vous avez gagné !</h1>
      <input type="text" name="player" v-model="player" @keyup.enter="save()" :autofocus="'autofocus'" /> <!-- autofocus + écoute touche Enter. UX -->
      <button @click="save()">Enregistrer</button>
      <br>
      <a @click="deleteScore()">Quitter sans enregister</a>
    </div>
    <Grid />
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue"; //importe le composant Grid (la grille)
import { mapState, mapGetters, mapActions } from "vuex"; //permet de mapper plus facilement le store dans le composant

export default {
  name: "Play",
  components: {
    Grid, //Composant requi dans cette vue
  },
  computed: {
    ...mapState(["levelList", "game", "timer", "server"]), //mapping des state du store
    ...mapGetters(["victory"]),//mapping des méthodes du store (getters)

    selectedLevel: { //Computed avec comportement particulier get/set
      get() {
        return this.$store.state.selectedLevel;
      },
      set(value) {
        this.$store.commit("setSelectedLevel", value);
      },
    },
    player: {
      get() {
        return this.$store.state.player;
      },
      set(value) {
        this.$store.commit("setPlayer", value);
      },
    },
  },
  methods: {
    ...mapActions(["newGame", "saveScore", "deleteGame"]),
    save() {
      this.saveScore().then(() => {
        this.$store.commit("setGame", []);
        this.$store.commit("setTimer", 0);
        this.$store.dispatch('getScores');
        //TODO : this.$store.commit("setTimer", 0); setPlayer
        this.$router.push({
          name: "Scores",
        });
      });
    },
    deleteScore(){
       this.deleteGame().then(() => {
        this.$store.commit("setGame", []);
        this.$store.commit("setTimer", 0);
        //this.$store.dispatch('getScores');
        //TODO : this.$store.commit("setTimer", 0); setPlayer
        this.$router.push({
          name: "Home",
        });
      });
    }
  },
};
</script>

<style lang="scss">
</style>
