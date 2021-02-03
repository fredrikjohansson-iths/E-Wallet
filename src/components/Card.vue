<template>
  <div @click="clicked()" id="card" class="card" :class="card.vendorName">
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
  props: { card: Object },
  methods: {
    clicked() {
      this.$emit("clicked", this.cardId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
span {
  width: max-content;
  display: inherit;
  height: 20%;
}

.Bitcoin {
  background-color: #ffb74a;
}

.Ninja {
  background-color: #363636;
  color: silver;
}

.Blockchain {
  background-color: #7f51e4;
}

.Evil {
  background-color: #db2e4d;
}

.card {
  display: block;
  width: 95%;
  border-radius: 20px;
  border: 1px solid grey;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 33%;
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
