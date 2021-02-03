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
          vendorLogo: "vendor-Blockchain.svg",
          vendorName: "Blockchain"
        },
        {
          isActive: false,
          cardDate: "02/21",
          cardHolder: "Testan Tests",
          cardId: 2,
          cardNumber: "1234 1234 1234 1234",
          vendorLogo: "vendor-Evil.svg",
          vendorName: "Evil"
        },
        {
          isActive: false,
          cardDate: "02/21",
          cardHolder: "Olof Kungjävel",
          cardId: 3,
          cardNumber: "5555 1234 2223 1234",
          vendorLogo: "vendor-Ninja.svg",
          vendorName: "Ninja"
        }
      ]
    };
  },
  router,
  render: h => h(App)
}).$mount("#app");
