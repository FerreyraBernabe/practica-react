import {CountButton} from './components/CountButton.jsx'
import {useCount} from './logic/CountLogic.js'
import './App.css'
function App() {

  const {count, increment, decrement, reset} = useCount(0)

  return (
    <>
    <h1>Ejemplo de contador</h1>
    <section className="btn-section">
      <CountButton 
      increment={increment}
      decrement={decrement}
      reset={reset}/>
    </section>

    <section className="count-section">
      <span>Contador: </span>
      <span className="count"> {count}</span>
    </section>
    </>
  )
}

export default App
