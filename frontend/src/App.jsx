import { useState, useContext } from 'react'
import './App.css'
// import { CounterContext } from './components/Context'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament, reset } from "./components/store/counterSlice";

function App() {
  // const [count, setCount] = useState(0)
  const {count} = useSelector((state) => state.count);
  const dispatch = useDispatch();
  // console.log(count1)
  // const { count, setCount } = useContext(CounterContext)
  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => dispatch(increament())}>
          Increament
        </button>
        <button onClick={() => dispatch(decreament())}>
          Decreament
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
