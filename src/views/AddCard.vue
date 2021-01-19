<template>
  <div class="">
    <Heading />
    <BlankCard />
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "@/components/AddCard/Heading.vue";
import BlankCard from "@/components/AddCard/BlankCard.vue";
import Form from "@/components/AddCard/Form.vue";

export default {
  name: "AddCard",
  components: {
    Heading,
    BlankCard,
    Form
  }
};
</script>
