import { React, useState } from 'react'
import Header from './components/Header'
import AddInput from './components/Input'
import ListIterm from './components/listIterm'

function App() {
  const [showInput, setShowInput] = useState(true)
  const [todoList, setTodoList] = useState([])
  const addItem = (value) => {
    console.log(value, '===e')
    const content = {
      id: new Date().getTime(),
      value,
    }
    setTodoList(() => [...todoList, content])
  }

  return (
    <div>
      <Header
        showInput={showInput}
        openInput={() => {
          setShowInput(!showInput)
        }}></Header>
      <AddInput showInput={showInput} addItem={addItem}></AddInput>

      <ul>
        {todoList.map((item, index) => {
          return <ListIterm data={item} key={index}></ListIterm>
        })}
      </ul>
    </div>
  )
}

export default App
