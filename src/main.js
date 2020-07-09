import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyBMN0hUdGI-BObO2-o-uunT6hMThz_jn3s',
  authDomain: 'calendar-45d1d.firebaseapp.com',
  databaseURL: 'https://calendar-45d1d.firebaseio.com',
  projectId: 'calendar-45d1d',
  storageBucket: 'calendar-45d1d.appspot.com',
  messagingSenderId: '994424155892',
  appId: '1:994424155892:web:4c4f3fd44d204d6ac438a1',
});

export const db = firebase.firestore();
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
