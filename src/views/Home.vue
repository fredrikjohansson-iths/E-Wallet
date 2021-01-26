<template>
  <div class="">
    <button @click="add()">Add</button>
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
  provide: { cardholder: "Olle Boström" },
  methods: {
    add() {
      var cardinfo = null;
      var newElement = {
        cardholder: "Olle Boström",
        cardnumber: "5671 5238 4321 4990",
        date: "03/22"
      };
      cardinfo.push(newElement);
    }
  }
};
</script>
