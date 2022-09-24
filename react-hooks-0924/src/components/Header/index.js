import { React } from 'react'

function Header(props) {
  const { openInput } = props

  return (
    <div className="flex-between">
      <h1>事件待办</h1>
      <span onClick={openInput}>&#43;</span>
    </div>
  )
}
export default Header
