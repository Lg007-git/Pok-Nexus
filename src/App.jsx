import { useState } from 'react'
import Main from './components/Main'
import "./components/style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
    </>
  )
}

export default App
