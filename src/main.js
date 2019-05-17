import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isArrowDownKeyPressed: false,
        isArrowUpKeyPressed: false,
        isArrowLeftKeyPressed: false,
        isArrowRightKeyPressed: false,
        currentPosition: {
            x: 1,
            y: 1
        }
    },
    mutations: {
        setArrowDownKeyPressed(state, value) {
            state.isArrowDownKeyPressed = value;
        },
        setArrowUpKeyPressed(state, value) {
            state.isArrowUpKeyPressed = value;
        },
        setArrowLeftKeyPressed(state, value) {
            state.isArrowLeftKeyPressed = value;
        },
        setArrowRightKeyPressed(state, value) {
            state.isArrowRightKeyPressed = value;
        },
        moveRight(state) {
            state.currentPosition.y++;
        },
        moveLeft(state) {
            state.currentPosition.y--;
        },
        moveUp(state) {
            state.currentPosition.x--
        },
        moveDown(state) {
            state.currentPosition.x++;
        }
    }
});


new Vue({
    store,
    render: h => h(App),
    methods: {
        onKeyUp(event) {
            switch (event.key) {
                case 'ArrowDown':
                    store.commit('setArrowDownKeyPressed', false);
                    break;
                case 'ArrowUp':
                    store.commit('setArrowUpKeyPressed', false);
                    break;
                case 'ArrowLeft':
                    store.commit('setArrowLeftKeyPressed', false);
                    break;
                case 'ArrowRight':
                    store.commit('setArrowRightKeyPressed', false);
                    break;
            }
        },
        onKeyDown(event) {
            switch (event.key) {
                case 'ArrowDown':
                    store.commit('setArrowDownKeyPressed', true);
                    break;
                case 'ArrowUp':
                    store.commit('setArrowUpKeyPressed', true);
                    break;
                case 'ArrowLeft':
                    store.commit('setArrowLeftKeyPressed', true);
                    break;
                case 'ArrowRight':
                    store.commit('setArrowRightKeyPressed', true);
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
