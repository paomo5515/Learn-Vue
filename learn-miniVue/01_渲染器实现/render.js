const h = (tag, props, children) => {

  // vNode -> javascript对象 -> {}
  return {
    tag,
    props,
    children
  }
}

const mount = (vNode, container) => {
  // vNode -> element
  // 1.创建出真实的元素，并且在 vNode 上保留 el
  const el = vNode.el = document.createElement(vNode.tag)

  // 2.处理 props
  if (vNode.props) {
    for (const key in vNode.props) {
      const value = vNode.props[key]

      // 是否是函数
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLocaleLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // 3.处理 children
  if (vNode.children) {
    if (typeof vNode.children === "string") {
      el.textContent = vNode.children
    } else {
      vNode.children.forEach(item => {
        mount(item, el)
      })
    }
  }
  // 4.将 el 挂载到 container 上
  container.appendChild(el)
}

const patch = (n1, n2) => {
  // vnode 元素类型不相同
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parentElement
    n1ElParent.removeChild(n1.el)
    // 挂载新节点
    mount(n2, n1ElParent)
  } else {
    // 1.取出 element对象，并且在 n2 中进行保存
    const el = n2.el = n1.el
    // 2.处理 props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 2.1 获取所有的 newProps 添加到 el
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]

      // 元素属性不同
      if (oldValue !== newValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLocaleLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }

    // 2.2 删除旧的 props
    for (const key in oldProps) {

      if (key.startsWith("on")) {
        const value = oldProps[key]
        el.removeEventListener(key.slice(2).toLocaleLowerCase(), value)
      }
      if (!(key in newProps)) {
        el.removeAttribute(key)
      }
    }

    // 3.处理 children
    const oldChildren = n1.children || []
    const newChildren = n2.children || []

    // 情况一： newCHildren本身是一个字符串
    if (typeof newChildren === "string") {
      // 如果都是 字符串
      if (typeof oldChildren === "string") {
        // 判断字符串 是否相同
        if (newChildren !== oldChildren) {
          el.textContent = newChildren
        }
      } else {
        el.innerHTML = newChildren
      }

    } else {  // 情况二：newChildren是一个数组
      if (typeof oldChildren === "string") {
        el.innerHTML = ""
        newChildren.forEach(item => {
          mount(item, el)
        })
      } else { // 都是数组
        // oldChildren [v1, v2, v3]        
        // newChildren [v1, v6, v4, v8]        
        // 拿到最短的 数组
        // 1.有相同的节点进行 path 操作
        const commonLength = Math.min(oldChildren.length, newChildren.length)
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i])
        }

        // 2.newChildren 大于 oldCHildren
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((item) => {
            mount(item, el)
          })
        }

        // 3.newChildren 小于 oldCHildren
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((item) => {
            el.removeChild(item.el)
          })
        }
      }
    }
  }
}