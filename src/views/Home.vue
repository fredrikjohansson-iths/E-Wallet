<template>
  <div class="">
    <Heading title="E-Wallet" subTitle="Home" />
    <CardStack />
    <AddNewCard />
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "@/components/Heading.vue";
import CardStack from "@/components/Home/CardStack.vue";
import AddNewCard from "@/components/Home/AddNewCard.vue";

export default {
  name: "Home",
  components: {
    Heading,
    CardStack,
    AddNewCard
  },
  methods: {
    click() {
      console.log("emit received")
    }
  }
};
</script>
