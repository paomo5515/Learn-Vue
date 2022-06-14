import { computed } from "vue";
import { useStore } from "vuex";

export function useMapper(mapper, mapFn) {
  // 获取 store 对象
  const store = useStore()

  // 获取到对应的对象的 functions: {name: fun, age: fun}
  const storeStateFns = mapFn(mapper);

  // {name: function, ...}
  // {name: ref, ...}
  // 对数据进行转换
  const storeState = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store });
    // computed 返回 ref
    storeState[fnKey] = computed(fn);
  });

  return storeState
}