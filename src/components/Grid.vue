<template>
  <div>    
    <div id="grid" :style="{width:gridWidth+'px'}">
        <Card v-for="card in game" v-bind:card="card" v-bind:key="card.id"></Card>      
    </div>
  </div>
</template>

<script>


import Card from '@/components/Card.vue'
import { mapState } from 'vuex'


export default {  
  name: "Grid",  
  components:{
    Card
  },  
  computed: {
    ...mapState(['game', 'selectedLevel']),

    gridSize: function () {
      return Math.sqrt(this.grid.grid.length * 2);
    },
    gridWidth: function(){
      let width = ''; //Store ?
      if(this.selectedLevel == 0) width = '200';
      else if(this.selectedLevel == 1) width = '400';
      else if(this.selectedLevel == 2) width = '600';
      return width;
    }
  },
  methods:{
    
  },
  
  
};
</script>

<style scoped>
#grid{
  display:flex;
  
  flex-wrap:wrap;
  margin-left:auto;
  margin-right:auto;
}



</style>
