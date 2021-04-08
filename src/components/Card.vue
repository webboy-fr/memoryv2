<!-- Ceci représente le template d'une seule carte dans son emplacement (slot) -->
<template>
  <div class="slot" @click="selectCard(card)"> <!-- Event clic sur le slot -->
    <transition name="flip-y" v-on:after-enter="transitionDone()"> <!--Mise en place transition vue + hook-->
    <!-- Une carte -->
    <!-- Directive if sur propriété "visible" -->
    <!-- Bind le style pour la position dans le sprite -->
      <div
        v-if="card.visible" 
        class="card"
        v-bind:style="{ backgroundPositionY: card.position + 'px' }"
      >        
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"; //On importe les mapper du store pour avoir accès aux méthodes plus facilement

export default {
  name: "Card",
  props: {
    card: Object, //La grille envoit un objet carte au composant carte via les props
  },
  computed: {
    ...mapState(["selectedCards", "timerInterval", "returningCard"]), //Opérateur spread pour charger automatiquement tous les state du store
    ...mapGetters(["victory"]), //Idem pour les getters
  },
  methods: {
    ...mapMutations(["setSelectedCards", "setReturningCard"]), //idem
    ...mapActions(["selectCard", "checkEven"]), //idem

    selectCard(card) { //Permet de retourner une carte
      if(this.returningCard == false){ //Vérifie qu'aucune carte n'est "en cours de retournement"
        this.$store.commit('setReturningCard', true); //Bloque le retournement d'autre carte en cliquant partout
        card.visible = true; //Passe la carte en visible (re-render)
        this.setSelectedCards(card); //Stock la carte sélecctionné avant envoit serveur
      }
    },
    transitionDone() { //Hook géré par les transition vue lorsque celle ci sont achevées
      
      if (this.selectedCards.length == 2) { //Deux carte choisit -> on envoit au serveur
        this.checkEven(); //Appel de la route de checkage de paires
        if(this.victory){ //si toutes les cartes sont visible apres vérif
          this.$store.commit('cleanTimerInterval') //On stop le timer
        } else {
          console.log('pas encore gagné... :P');
        }
      } else {
        this.$store.commit('setReturningCard', false); //On débloque le clicage intempestif
      }
    },
  },
};
</script>


<style scoped>
/* Ce CSS est scopé dans le composant, pratique pour pas tout mélanger dans un seul fichier*/
.slot {
  width: 100px;
  height: 100px;
  border: solid 1px black;
  box-sizing: border-box;  
}

.card {
  width: 100px;
  height: 100px;
  border: solid 1px black;
  box-sizing: border-box;
  background-image: url("~@/assets/cards.png");
}


/* Classes de transitions Vue*/
.flip-y-enter-active {
  transition: all .25s ease-in;
}

.flip-y-leave-active {
  transition: all .25s ease-out;
}

.flip-y-enter {
  transform: scaleX(0);
}
.flip-y-enter-to {
  transform: scaleX(1);
}

.flip-y-leave {
  transform: scaleX(1);
}
.flip-y-leave-to {
  transform: scaleX(0);
}
</style>
