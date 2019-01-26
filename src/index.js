import Vue from 'vue';

import MainContent from './views/main-content';
import picItself from "./components/picItself/picItself"
import modalPic from "./components/modalPic/modalPic"

let MainComponent = Vue.extend(MainContent);
Vue.component('picItself', require('./components/picItself/picItself.vue'))
Vue.component('modalPic', require('./components/modalPic/modalPic.vue'))

new MainComponent().$mount("#mainContent");
