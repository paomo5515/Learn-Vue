const homeModule = {
  namespaced: true,
  state() {

    return {
      homeCounter: 100
    }
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2
    }
  },
  mutations: {
    increment(state) {
      state.homeCounter++
    }
  },
  actions: {
    incrementAction({ commit, dispatch, state, rootState, getters, rootGetters }) {
      commit("increment")
      // 提交根组件的 increment
      commit("increment", null, { root: true })

      // dispatch
      // dispatch("incrementAction", null, { root: true })
    }
  }
}

export default homeModule;