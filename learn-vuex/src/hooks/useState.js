import { mapState, createNamespacedHelpers } from "vuex";
import { useMapper } from "./useMapper";

// useState("home", [])
export function useState(moduleName, mapper) {
  let mapperFn = mapState
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  }else{
    mapper = moduleName
  }

  return useMapper(mapper, mapperFn)
}