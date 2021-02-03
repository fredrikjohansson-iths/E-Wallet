<template>
  <div class="">
    <form>
      <label for="firstname">First name </label>
      <input type="text" id="firstname" v-model="cname1" />
      <label for="lastname">Last name </label>
      <input type="text" id="lastname" v-model="cname2" />
      <label for="cardnumber">Card number </label>
      <input id="cardnumber" type="text" v-model="cnum" />
      <label for="vendor">Vendor </label>
      <select id="vendor" v-model="vendor">
        <option value="blockchain">Blockchain</option>
        <option value="bitcoin">BitCoin</option>
        <option value="evil">Evil</option>
        <option value="ninja">Ninja</option>
      </select>
      <label for="date">Month </label>
      <select id="month" v-model="month">
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <label for="year">Year </label>
      <select id="year" v-model="year">
        <option value="21">2021</option>
        <option value="22">2022</option>
        <option value="23">2023</option>
        <option value="24">2024</option>
        <option value="25">2025</option>
      </select>
    </form>
    <button @click="onSubmit">Test here</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: function() {
    return {
      cname1: "",
      cname2: "",
      cnum: "",
      vendor: "",
      month: "",
      year: ""
    };
  },
  props: { isActive: Boolean },
  computed: {
    newData() {
      const rootData = this.$root.$data.cards;
      return {
        cardId: rootData.length,
        cardDate: this.month + "/" + this.year,
        cardHolder: this.cname1 + " " + this.cname2,
        cardNumber: this.cnum
          .replace(/(\d{4})/g, "$1 ")
          .replace(/(^\s+|\s+$)/, ""),
        vendorName: this.vendor,
        vendorLogo: "vendor-" + this.vendor + ".svg"
      };
    }
  },
  methods: {
    onSubmit: function() {
      var rootData = this.$root.$data.cards;
      rootData.push(this.newData);
      this.$emit("submitted");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
