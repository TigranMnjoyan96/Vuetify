import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as fbs from "firebase/app";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fbs.initializeApp({
      apiKey: "AIzaSyAikg3ojo_e_AdJeu44tZrJer3PdQdRcfI",
      authDomain: "books-4b1b6.firebaseapp.com",
      databaseURL: "https://books-4b1b6.firebaseio.com",
      projectId: "books-4b1b6",
      storageBucket: "books-4b1b6.appspot.com",
      messagingSenderId: "323871935962",
      appId: "1:323871935962:web:72ee788d27e7866eda84e3"
    });
  }
}).$mount("#app");
