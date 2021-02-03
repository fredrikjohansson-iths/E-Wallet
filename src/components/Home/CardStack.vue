<template
  ><div>
    <Card
      @click="onClick()"
      :card="card"
      v-for="card in cards"
      :key="card.cardId"
      :style="{
        zIndex: card.cardId,
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
    },
    methods: {
      onClick() {
        this.$emit("clicked");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
