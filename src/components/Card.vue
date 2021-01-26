<template>
  <div id="card" class="card">
      <p id="cardnumber" class="cardnumber">0000 0000 0000 0000</p>
      <p id="cardholder" class="cardholder"></p>
    <button @click="onClick(0)">1</button>
    <button @click="onClick(1)">2</button>
    <button @click="onClick(2)">3</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {},
  data: function() {
    return {
      cardinfo: [
        {
          cardholder: "Kalle Birgersson",
          cardnumber: "5269 4739 7994 2798",
          vendor: "",
          date: "",
        },
        {
          cardholder: "Stig Fredrik Johansson",
          cardnumber: "5539 8317 5450 0897",
          vendor: "",
          date: "",
        },
        {
          cardholder: "Sara Thorsbrandt",
          cardnumber: "5591 5246 4856 4972",
          vendor: "",
          date: "",
        },
      ],
    };
  },
  methods: {
    onClick(id) {
      var test = this.$data.cardinfo;

      var cnum = test[id].cardnumber;
      var cname = test[id].cardholder;

      const cnumElement = document.getElementById("cardnumber");
      const cnameElement = document.getElementById("cardholder");

      cnumElement.innerHTML = cnum;
      cnameElement.innerHTML = cname;
    },
    add(){
      var test = this.$data.cardinfo;
      t

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  display: block;
  height: 14vh;
  width: 28vh;
  border-style: solid;
  border-color: black;
}
.cardholder {
}
.cardnumber {
  list-style: none;
  position: absolute;
  top: 4.5vh;
  left: 2.5vw;
  font-size: x-large;
}
</style>
