<template>
  <div class="">
    <form>
      <label for="cardholder">Name: </label>
      <input type="text" id="cardholder" v-model="cardholder" />
      <label for="cardnumber">Card Number: </label>
      <input
        @input="validate"
        id="cardnumber"
        type="text"
        v-model="cardnumber"
      />
      <label for="vendor">Vendor </label>
      <select id="vendor" v-model="vendor"
        ><option value="ninja">Ninja</option>
        <option value="bitcoin">BitCoin</option>
      </select>
      <label for="date">Valid thru </label>
      <input type="month" id="date" v-model="date" />
    </form>
    <button @click="onSubmit">Test here</button>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    msg: String
  },
  data: function() {
    return {
      id: 1,
      active: "",
      cardholder: "",
      cardnumber: "",
      vendor: "",
      date: ""
    };
  },
  methods: {
    validate: function() {
      var inputValue = document.getElementById("cardnumber").value;
      const regex = /\D/;
      const validate = regex.test(inputValue);

      if (validate == true) {
        alert("Only digits allowed in this field");
      }
    },
    onSubmit: function() {
      this.$emit("clicked", this.$data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
