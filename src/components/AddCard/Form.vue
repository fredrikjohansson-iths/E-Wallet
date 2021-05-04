<template>
  <div class="">
    <form class="flex">
      <div id="card" class="card" :class="vendor">
        <img class="chip" src="chip-light.svg" />
        <img class="vendor" :src="newData.vendorLogo" />
        <p id="cardnumber" class="cardnumber">{{ newData.cardNumber }}</p>
        <p class="cardholder">CARDHOLDER NAME</p>
        <p id="cardname" class="cardname">{{ newData.cardHolder }}</p>
        <p class="validthru">VALID THRU</p>
        <p class="date">{{ newData.cardDate }}</p>
      </div>
      <label class="" for="firstname">First name</label>
      <input class="" type="text" id="firstname" v-model="cname1" />
      <label class="" for="lastname">Last name </label>
      <input class="" type="text" id="lastname" v-model="cname2" />
      <label class="" for="cardnumber">Card number </label>
      <input class="" id="cardnumber" type="text" v-model="cnum" />
      <label class="" for="vendor">Vendor </label>
      <select class="" id="vendor" v-model="vendor">
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
    <button @click="onSubmit()">Save</button>
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
        cardId: rootData.length + 1,
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
      this.$emit("submitted", this.newData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  flex-direction: column;
  display: flex;
  width: max-content;
}

input,
label,
select {
  margin: 3%;
}

.bitcoin {
  background-color: #ffb74a;
}

.ninja {
  background-color: #363636;
  color: silver;
}

.blockchain {
  background-color: #7f51e4;
}

.evil {
  background-color: #db2e4d;
}

.card {
  display: block;
  width: 80%;
  max-width: 400px;
  min-width: 400px;
  border-radius: 20px;
  border: 1px solid grey;
  position: fixed;
  top: 0;
  left: 45%;
  bottom: 20%;
  right: 0;
  height: 250px;
  margin-top: 10%;
  margin: auto;
}
.cardholder {
  font-size: 0.8rem;
  top: 64%;
  position: absolute;
  left: 2%;
}
.cardname {
  position: absolute;
  font-size: 1.3rem;
  top: 70%;
  left: 2%;
}
.cardnumber {
  position: absolute;
  font-size: 2rem;
  top: 33%;
  left: 2%;
  letter-spacing: 0.1rem;
}

.chip {
  position: absolute;
  top: 4%;
  left: 3%;
  height: 34%;
}

.date {
  position: absolute;
  font-size: 1.3rem;
  top: 70%;
  left: 83%;
}

.validthru {
  font-size: 0.8rem;
  top: 64%;
  position: absolute;
  left: 77%;
}

.vendor {
  height: 20%;
  top: 8%;
  position: absolute;
  left: 84%;
}
</style>
