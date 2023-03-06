import { defineStore } from 'pinia';

const useHome = defineStore('home', {
  state: () => ({
    banners: [],
  }),
  actions: {
    async fetchHomeMultidata() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata');
      const data = await res.json();
      // console.log(data);
      this.banners = data.data.banner.list;
    },
  },
});

export default useHome;
