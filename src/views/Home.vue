<template>
  <div class="">
    <Heading />
    <ActiveCard />
    <CardStack />
    <AddNewCard />
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "@/components/Home/Heading.vue";
import ActiveCard from "@/components/Home/ActiveCard.vue";
import CardStack from "@/components/Home/CardStack.vue";
import AddNewCard from "@/components/Home/AddNewCard.vue";

export default {
  name: "Home",
  components: {
    Heading,
    ActiveCard,
    CardStack,
    AddNewCard
  }
};
</script>
