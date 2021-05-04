<template>
<div><Card :card="test" :style="{bottom: 20 + '%'}" />
    <Card
      @test="clicked"
      :card="card"
      v-for="card in cards"
      :key="card.cardId"
      :style="{
        top: card.cardId * 10 + '%'
      }"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "CardStack",
  components: { Card },
  computed: {
    test(){ return this.$root.$data.cards[this.$data.id]; },
    cards() {
      return this.$root.$data.cards;
    }
  },data() {
    return {
      id: "",
    }
  },
  methods: {
    clicked(event){
      this.$data.id = event
      
  },
}};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
