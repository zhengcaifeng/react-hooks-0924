import { React, useState } from 'react'
import Header from './components/Header'
import AddInput from './components/Input'

function App() {
  const [showInput, setShowInput] = useState(true)
  return (
    <div>
      <Header showInput={showInput} handleChange={(e) => setShowInput(e)}></Header>
      <AddInput showInput={showInput}></AddInput>
    </div>
  )
}

export default App
