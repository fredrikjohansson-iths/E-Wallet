<template>
  <div class="">
    <Heading />
    <Form @clicked="OnChildSubmit" />
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "@/components/AddCard/Heading.vue";
import Form from "@/components/AddCard/Form.vue";

export default {
  name: "AddCard",
  components: {
    Heading,
    Form
  },
  methods: {
    OnChildSubmit: function(event) {
      var root = this.$root.creditcard;
      root.push(event);
      console.log(root);
    }
  }
};
</script>
