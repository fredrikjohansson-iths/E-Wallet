<template>
  <div @click="test" id="card" class="card" :class="card.vendorName">
    <img class="chip" src="chip-light.svg" />
    <img class="vendor" :src="card.vendorLogo" />
    <p id="cardnumber" class="cardnumber">{{ card.cardNumber }}</p>
    <p class="cardholder">CARDHOLDER NAME</p>
    <p id="cardname" class="cardname">{{ card.cardHolder }}</p>
    <p class="validthru">VALID THRU</p>
    <p class="date">{{ card.cardDate }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  methods: {
    test() {
      var index = this.card.cardId - 1;
      this.$emit("test", index);
      console.log(this.card.cardId);
    }
  },
  props: { card: Object }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  width: max-content;
  height: 20%;
  background: transparent;
  border: none !important;
  font-size: 0;
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
  left: 0;
  bottom: -30%;
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
