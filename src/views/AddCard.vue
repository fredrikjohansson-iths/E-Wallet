<template>
  <div class="">
    <Heading title="E-Wallet" subTitle="Add new cards" />
    <Form @submitted="onSubmit" />
    <Card :card="cards" />
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "@/components/Heading.vue";
import Form from "@/components/AddCard/Form.vue";
import Card from "@/components/Card.vue";

export default {
  name: "AddCard",
  components: {
    Heading,
    Form,
    Card
  },
  computed: {
    cards() {
      const cards = this.$root.$data.cards;
      return cards;
    }
  },
  methods: {
    onSubmit() {
      //var root = this.$root.$data.creditcard;
    }
  }
};
</script>
