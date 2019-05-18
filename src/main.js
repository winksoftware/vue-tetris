import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
    methods: {
        onKeyDown(event) {
            store.dispatch('joystick/onKeyDown', event);
        },
        onKeyUp(event) {
            store.dispatch('joystick/onKeyUp', event);
        }
    },
    mounted() {
        window.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('keydown', this.onKeyDown);
    },
    destroyed() {
        window.removeEventListener('keyup', this.onKeyUp);
        window.removeEventListener('keydown', this.onKeyDown);
    }
}).$mount('#app')
