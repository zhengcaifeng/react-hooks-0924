import React from 'react'
import './index.css'

function ListIterm(props) {
  const { data } = props
  return (
    <li className="flex item-wrap">
      <div className="flex content">
        <div className="check-box">
          <input type="checkbox" checked={data.completed} />
        </div>
        <div>{data.value}</div>
      </div>
      <div className="flex btn-wrap">
        <button className="btn">编辑</button>
        <button className="btn">完成</button>
        <button className="btn">删除</button>
      </div>
    </li>
  )
}
export default ListIterm
