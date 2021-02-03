<template>
  <div class="">
    <Heading title="E-Wallet" subTitle="Home" />
    <CardStack @clicked="onClick"/>
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
  data() {
    return {
      isActive: false
    }
  },
  components: {
    Heading,
    CardStack,
    AddNewCard
  },
  methods: {
    onClick(event) {

      console.log(event)
    }
  }
};
</script>
