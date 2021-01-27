<template>
  <div class="">
    <Card isActive />
    <Heading />
    <ActiveCard />
    <CardStack />
    <AddNewCard />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Home/Card.vue";
import Heading from "@/components/Home/Heading.vue";
import ActiveCard from "@/components/Home/ActiveCard.vue";
import CardStack from "@/components/Home/CardStack.vue";
import AddNewCard from "@/components/Home/AddNewCard.vue";

export default {
  name: "Home",
  components: {
    Card,
    Heading,
    ActiveCard,
    CardStack,
    AddNewCard
  },
};
</script>
