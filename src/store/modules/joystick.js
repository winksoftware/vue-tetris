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

const actions = {
    onKeyDown({commit, state}, event) {
        switch (event.key) {
            case 'ArrowDown':
                commit('setArrowDownKeyPressed', state.isArrowDownKeyPressed + 1);
                break;
            case 'ArrowUp':
                commit('setArrowUpKeyPressed', state.isArrowUpKeyPressed + 1);
                break;
            case 'ArrowLeft':
                commit('setArrowLeftKeyPressed', state.isArrowLeftKeyPressed + 1);
                break;
            case 'ArrowRight':
                commit('setArrowRightKeyPressed', state.isArrowRightKeyPressed + 1);
                break;
        }
    },
    onKeyUp({commit}, event) {
        switch (event.key) {
            case 'ArrowDown':
                commit('setArrowDownKeyPressed', 0);
                break;
            case 'ArrowUp':
                commit('setArrowUpKeyPressed', 0);
                break;
            case 'ArrowLeft':
                commit('setArrowLeftKeyPressed', 0);
                break;
            case 'ArrowRight':
                commit('setArrowRightKeyPressed', 0);
                break;
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
