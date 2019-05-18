import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isArrowDownKeyPressed: 0,
        isArrowUpKeyPressed: 0,
        isArrowLeftKeyPressed: 0,
        isArrowRightKeyPressed: 0,
        currentPosition: {
            x: 1,
            y: 1
        },
        boardSize: {
            rows: 20,
            columns: 10
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
        onKeyDown(event) {
            switch (event.key) {
                case 'ArrowDown':
                    store.commit('setArrowDownKeyPressed', store.state.isArrowDownKeyPressed + 1);
                    break;
                case 'ArrowUp':
                    store.commit('setArrowUpKeyPressed', store.state.isArrowUpKeyPressed + 1);
                    break;
                case 'ArrowLeft':
                    store.commit('setArrowLeftKeyPressed', store.state.isArrowLeftKeyPressed + 1);
                    break;
                case 'ArrowRight':
                    store.commit('setArrowRightKeyPressed', store.state.isArrowRightKeyPressed + 1);
                    break;
            }
        },
        onKeyUp(event) {
            switch (event.key) {
                case 'ArrowDown':
                    store.commit('setArrowDownKeyPressed', 0);
                    break;
                case 'ArrowUp':
                    store.commit('setArrowUpKeyPressed', 0);
                    break;
                case 'ArrowLeft':
                    store.commit('setArrowLeftKeyPressed', 0);
                    break;
                case 'ArrowRight':
                    store.commit('setArrowRightKeyPressed', 0);
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
