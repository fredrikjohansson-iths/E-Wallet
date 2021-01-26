<template>
  <div class=""><button @click="add()">Add</button></div>
</template>

<script>
export default {
  name: "ActiveCard",
  props: {},
  provide: {cardholder: "Olle Boström"}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
