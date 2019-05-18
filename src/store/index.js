import Vue from 'vue'
import Vuex from 'vuex'

import joystick from './modules/joystick'
import position from './modules/position'
import board from './modules/board'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        joystick,
        position,
        board
    }
});
