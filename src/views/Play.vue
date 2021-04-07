<template>
  <div>    
    Diificulté : <select v-model="selectedLevel" :disabled="game.length > 0">
      <option v-for="(level, index) in levelList" :key="index" :value="index">
        {{ level }}
      </option>
    </select>    
    <br />
    Temps ecoulé : {{ timer }} secondes
    <br />
    <button @click="newGame()">Nouvelle partie</button>
    <div v-if="victory" id="recordScore">
      <h1>Bravo ! Vous avez gagné !</h1>
      <input type="text" name="player" v-model="player" @keyup.enter="save()" :autofocus="'autofocus'" />
      <button @click="save()">Enregistrer</button>
      <br>
      <a @click="deleteScore()">Quitter sans enregister</a>
    </div>
    <Grid />
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Play",
  components: {
    Grid,
  },
  computed: {
    ...mapState(["levelList", "game", "timer", "server"]),
    ...mapGetters(["victory"]),

    selectedLevel: {
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
