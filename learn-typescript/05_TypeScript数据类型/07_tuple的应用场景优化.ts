// useState
// const [counter, setCounter] = useState(10)


function useState<T>(state: T) {
  let currentState = state

  const changeState = (newState: T) => {
    currentState = newState
  }

  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}

const [message, setMessage] = useState("hello")

setMessage("word")

const [counter, setCounter] = useState(100)

// type MyFn = () => void
// const foo: MyFn = () => { }

export { }