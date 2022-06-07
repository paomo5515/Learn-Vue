export const demoMixin = {
  data(){
    return {
      message: "Hello Mixin"
    }
  },
  methods: {
    foo(){
      console.log("demo mixin foo");
    }
  },
  created() {
    console.log("执行了 demo mixin created");
  }
}