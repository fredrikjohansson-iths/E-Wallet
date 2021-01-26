<template>
  <div class="">
    <form>
      <label for="input1">Name</label><input id="input1" type="text" />
      <label for="input2"> Card Number </label>
      <input id="input2" type="number" />
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
