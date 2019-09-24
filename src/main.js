import Vue from 'vue'
import App from './App.vue'
// very strict: use always 'router';
import router from './routes';
import Button from './components/UI/Button'
import { MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import VueResource from 'vue-resource';
import store from './Store/store';
import vuelidate from 'vuelidate';

Vue.component('app-button', Button);
Vue.use(MdCard);
Vue.use(VueResource);
Vue.use(vuelidate);


Vue.http.options.root = '';

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
