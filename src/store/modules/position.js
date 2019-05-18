const state = {
    currentPosition: {
        x: 1,
        y: 1
    },
};

const mutations = {
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
};

export default {
    namespaced: true,
    state,
    mutations
};
