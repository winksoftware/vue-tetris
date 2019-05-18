import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
    methods: {
        onKeyDown(event) {
            switch (event.key) {
                case 'ArrowDown':
                    store.commit('joystick/setArrowDownKeyPressed', store.state.joystick.isArrowDownKeyPressed + 1);
                    break;
                case 'ArrowUp':
                    store.commit('joystick/setArrowUpKeyPressed', store.state.joystick.isArrowUpKeyPressed + 1);
                    break;
                case 'ArrowLeft':
                    store.commit('joystick/setArrowLeftKeyPressed', store.state.joystick.isArrowLeftKeyPressed + 1);
                    break;
                case 'ArrowRight':
                    store.commit('joystick/setArrowRightKeyPressed', store.state.joystick.isArrowRightKeyPressed + 1);
                    break;
            }
        },
        onKeyUp(event) {
            switch (event.key) {
                case 'ArrowDown':
                    store.commit('joystick/setArrowDownKeyPressed', 0);
                    break;
                case 'ArrowUp':
                    store.commit('joystick/setArrowUpKeyPressed', 0);
                    break;
                case 'ArrowLeft':
                    store.commit('joystick/setArrowLeftKeyPressed', 0);
                    break;
                case 'ArrowRight':
                    store.commit('joystick/setArrowRightKeyPressed', 0);
                    break;
            }
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
