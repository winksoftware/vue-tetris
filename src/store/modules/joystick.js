const state = {
    isArrowDownKeyPressed: 0,
    isArrowUpKeyPressed: 0,
    isArrowLeftKeyPressed: 0,
    isArrowRightKeyPressed: 0,
};

const mutations = {
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
};

export default {
    namespaced: true,
    state,
    mutations
}
