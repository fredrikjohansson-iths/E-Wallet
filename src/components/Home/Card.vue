<template>
  <div v-if="isActive" id="card" class="card">
    <img class="chip" src="chip-light.svg" />
    <img class="vendor" :src="this.vendor" />
    <p id="cardnumber" class="cardnumber">{{ cardnumber }}</p>
    <p class="cardholder">CARDHOLDER NAME</p>
    <p id="cardname" class="cardname">{{ cardholder }}</p>
    <p class="validthru">VALID THRU</p>
    <p class="date">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { isActive: Boolean },
  data: function() {
    return {
      cards: [
        {
          id: null,
          active: this.isActive,
          cardholder: "",
          cardnumber: "0000 0000 0000 0000",
          vendor: "vendor-bitcoin.svg",
          date: "00/00"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  display: block;
  background-color: darkgrey;
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
