import { createStore } from 'vuex';
import aboutModule from './modules/about';

const store = createStore({
  modules: {
    about: aboutModule,
  },
  state: () => ({
    count: 10,
    name: 'hahaha',
    age: 18,
    names: [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
    ],
    // 服务器中的数据
    banners: [],
  }),
  /**
   * mutation的重要原则：
   * 1.mutation 必须是同步函数
   * 因为 devtool工具会记录 mutation的日志；
   * 每一条 mutation被记录，devtools都需要捕捉到前一个状态和后一个状态的快照；
   * 但是mutation中执行异步操作，就无法追踪到数据的变化
   *
   */
  mutations: {
    increment(state) {
      state.count++;
    },
    changeName(state) {
      state.name = '你好啊';
    },
    changeAge(state, age) {
      state.age += age;
    },
    changeBanner(state, data) {
      state.banners = data;
    },
  },
  // 某些数据经过变化进行使用
  getters: {
    formatName(state) {
      return state.name.toLocaleUpperCase();
    },
    message(state, getters) {
      // 可以获取到 gerters
      return `${getters.formatName}` + state.age;
    },
    getName(state) {
      return function (id) {
        const nameRes = state.names.find((item) => item.id === id);
        return nameRes;
      };
    },
  },
  actions: {
    incrementAction(context) {
      // contetx 中有 commit,dispatch,getters,rootGetters,rootState,state
      context.commit('increment');
    },
    fetchHomeMutidataAction(context) {
      fetch('http://123.207.32.32:8000/home/multidata')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.data.banner.list);
          context.commit('changeBanner', data.data.banner.list);
        });
    },
  },
});

export default store;
