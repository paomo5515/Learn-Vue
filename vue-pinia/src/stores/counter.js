// 定义 store
import { defineStore } from 'pinia';
import useUser from './user';

const useCounter = defineStore('counter', {
  state: () => ({
    count: 99,
    friends: [
      {
        id: 11,
        name: 'aa',
      },
      {
        id: 12,
        name: 'bb',
      },
    ],
  }),
  getters: {
    // 1.基本使用
    doubleCount(state) {
      return state.count * 2;
    },

    // 2.一个 getter引入另外一个 getter
    doubleCountAddOne() {
      // this是 state实例
      return this.doubleCount + 1;
    },

    // 3.getter 也支持返回一个函数
    getFriendByID(state) {
      return function (id) {
        return state.friends.find((friend) => friend.id === id);
      };
    },

    // 4.getters中 用到其他 state中的数据
    showMsg(state) {
      // 1.获取 user信息
      const userStore = useUser();

      return `name:${userStore.name} - count:${state.count}`;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    incrementNum(num) {
      this.count += num;
    },
  },
});
export default useCounter;
