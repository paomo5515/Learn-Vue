Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books: [
        {
          id: 1,
          name: "《算法导论》",
          date: "2006-9",
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: "《mySql》",
          date: "2004-4",
          price: 80.00,
          count: 1
        },
        {
          id: 3,
          name: "《JS》",
          date: "2010-9",
          price: 78.00,
          count: 1
        },
        {
          id: 4,
          name: "《java》",
          date: "2008-10",
          price: 89.00,
          count: 1
        },
      ]
    }
  },
  methods: {
    increment(index) {
      // 通过 索引值 获取到对象
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeBook(index) {
      this.books.splice(index, 1)
    },
    formatPrice(price){
      return `￥${price}`
    }
  },
  computed: {
    totalPrice() {
      let finalPrice = 0
      for (const book of this.books) {
        finalPrice += book.count * book.price
      }
      return finalPrice
    },
    // Vue3 不支持过滤器了，推荐两种做法：使用计算属性/使用全局的方法
    filterBooks() {
      return this.books.map(item => {
        const newItem = Object.assign({}, item)
        newItem.price = `￥${item.price}`
        return newItem
      })
    }
  }
}).mount("#app")