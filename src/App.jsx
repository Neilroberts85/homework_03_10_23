import { useState } from 'react'
import './App.css'
import FilmBox from './containers/FilmBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FilmBox/>
    </>
  )
}

export default App
