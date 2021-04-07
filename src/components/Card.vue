<template>
  <div class="slot" @click="selectCard(card)">
    <transition name="flip-y" v-on:after-enter="transitionDone()">
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Card",
  props: {
    card: Object,
  },
  computed: {
    ...mapState(["selectedCards", "timerInterval", "returningCard"]),
    ...mapGetters(["victory"]),
  },
  methods: {
    ...mapMutations(["setSelectedCards", "setReturningCard"]),
    ...mapActions(["selectCard", "checkEven"]),

    selectCard(card) {
      if(this.returningCard == false){
        this.$store.commit('setReturningCard', true);
        card.visible = true;
        this.setSelectedCards(card);
      }
    },
    transitionDone() {
      
      if (this.selectedCards.length == 2) {
        this.checkEven();
        if(this.victory){          
          this.$store.commit('cleanTimerInterval')
        } else {
          console.log('pas encore gagné... :P');
        }
      } else {
        this.$store.commit('setReturningCard', false);
      }
    },
  },
};
</script>


<style scoped>
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
