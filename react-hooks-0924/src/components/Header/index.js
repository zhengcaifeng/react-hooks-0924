import { React, useState } from 'react'

function Header(props) {
  const { showInput } = props
  const [showTitle, setTitle] = useState(showInput)
  const handleChange = () => {
    setTitle(!showTitle)
    return showTitle
  }
  return (
    <div className="flex-between">
      <h1>事件待办</h1>
      {/* <span onClick={openInput}>&#43;</span> */}
      <button onClick={() => handleChange()}>改变</button>
    </div>
  )
}
export default Header
