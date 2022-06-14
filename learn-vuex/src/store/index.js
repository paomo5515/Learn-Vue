import { createStore } from 'vuex';

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
      discount: 0.6
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
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
    }
  }

})

export default store;