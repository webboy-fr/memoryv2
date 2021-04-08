<template>
  <div>    
    <div id="grid" :style="{width:gridWidth+'px'}"> <!-- pas top, désolé :) -->
      <!-- On boucle sur la grille "game" pour générer tous les composants Card -->
        <Card v-for="card in game" :card="card" :key="card.id"></Card>      
    </div>
  </div>
</template>

<script>


import Card from '@/components/Card.vue' //import du composant card, enfant de Grid
import { mapState } from 'vuex' //Importe le mapper state pour avoir accées aux state du store


export default {  
  name: "Grid",  
  components:{
    Card //enregistrement des composants rendus dans le template
  },  
  computed: {
    ...mapState(['game', 'selectedLevel']), //On mappe les states utiles ici

    gridSize: function () {
      return Math.sqrt(this.grid.grid.length * 2); //Calcul de la taille de la grille (avec les paires)
    },
    gridWidth: function(){ //Pas jojo : width en pixels de la grille en fonction du niveau. Nécéssaire dans le template
      let width = ''; //Store ?
      if(this.selectedLevel == 0) width = '200';
      else if(this.selectedLevel == 1) width = '400';
      else if(this.selectedLevel == 2) width = '600';
      return width;
    }
  }
};
</script>

<style scoped>
#grid{
  display:flex;  /*Utilisation des flexbox, parceque je le vaut bien*/
  flex-wrap:wrap; /*wrap pour revenir à la ligne au bout de X cases */
  margin-left:auto;
  margin-right:auto;
}

</style>
