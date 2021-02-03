import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data: function() {
    return {
      cards: [
        {
          isActive: false,
          cardDate: "02/21",
          cardHolder: "Test Testsson",
          cardId: 1,
          cardNumber: "1234 1234 1234 1234",
          vendorLogo: "vendor-blockchain.svg",
          vendorName: "blockchain"
        },
        {
          isActive: false,
          cardDate: "02/21",
          cardHolder: "Testan Tests",
          cardId: 2,
          cardNumber: "1234 1234 1234 1234",
          vendorLogo: "vendor-evil.svg",
          vendorName: "evil"
        },
        {
          isActive: false,
          cardDate: "02/21",
          cardHolder: "Olof Kungjävel",
          cardId: 3,
          cardNumber: "5555 1234 2223 1234",
          vendorLogo: "vendor-ninja.svg",
          vendorName: "ninja"
        }
      ]
    };
  },
  router,
  render: h => h(App)
}).$mount("#app");
