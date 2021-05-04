<template>
  <div class="">
    <Heading title="E-Wallet" subTitle="Add new cards" />
    <Form />
  </div>
</template>
<style scoped>
#preview {
  left: 30%;
  bottom: 5%;
}
</style>
<script>
// @ is an alias to /src
import Heading from "@/components/Heading.vue";
import Form from "@/components/AddCard/Form.vue";

export default {
  name: "AddCard",
  data() {
    return {
      card: Object
    };
  },
  components: {
    Heading,
    Form
  }
};
</script>
