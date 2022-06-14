import { createStore } from 'vuex';
import axios from 'axios';
import { INCREMENT_N } from './mutation-types';

const store = createStore({
  state() {
    return {
      counter: 0,
      name: "paomo",
      age: 18,
      books: [
        { name: "javascript", price: 100, count: 2, id: "1" },
        { name: "webpack", price: 97, count: 5, id: "2" },
        { name: "node", price: 56, count: 6, id: "3" },
        { name: "react", price: 75, count: 3, id: "4" },
      ],
      // 折扣
      discount: 0.6,
      banners: []
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // 10 -> payload
    [INCREMENT_N](state, payload) {
      // state.counter += payload
      state.counter += payload.age
    },
    addBannerData(state, payload) {
      state.banners = payload
    }

  },
  getters: {
    totalPrice(state, getters) {
      return state.books.reduce((preValue, curValue) => {
        return preValue + curValue.count * curValue.price
      }, 0) * getters.currentDiscount
    },
    currentDiscount(state) {
      // 折上折
      return state.discount * 0.6
    },
    // count 大于 n 的
    totalPriceCountN(state, getters) {
      return function (n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price
          }
        }
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name：${state.name}`
    },
    ageInfo(state) {
      return `age：${state.age}`
    },

  },
  actions: {
    incrementAction(context, payload) {
      // console.log(payload);
      setTimeout(() => {
        context.commit("increment")
      }, 1000)
    },
    decrementAction({ commit, dispatch, state, rootState, getters, rootGetters }) {
      // console.log(context);
      commit("decrement")
    },

    getHomeMultidata(context) {
      return new Promise((resolve, reject) => {
        axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
          // console.log(res.data.data.banner.list);
          context.commit("addBannerData", res.data.data.banner.list);
          resolve(res)
        }).catch(err => {
          // console.log(err);
          reject(err)
        });
      })

    }
  }
})

export default store;