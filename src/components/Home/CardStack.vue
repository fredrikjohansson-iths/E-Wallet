<template>
<div>
    <Card
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
    cards() {
      return this.$root.$data.cards;
    }
  },
  methods: {
    clicked(event) {
      this.$emit("clicked", event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
