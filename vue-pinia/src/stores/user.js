import { defineStore } from 'pinia';

const useUser = defineStore('user', {
  state: () => ({
    name: 'hhhhhh',
    age: 18,
  }),
});

export default useUser;
