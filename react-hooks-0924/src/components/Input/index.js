import React, { useRef } from 'react'

function AddInput(props) {
  const { showInput, addItem } = props,
    inputRef = useRef()

  const handleAdd = () => {
    const value = inputRef.current.value.trim()
    if (value.length === 0) return false

    addItem(value)
    inputRef.current.value = ''
  }
  return (
    <>
      {showInput ? (
        <div className="flex-between">
          <input ref={inputRef} type="text" placeholder="请输入待办项目" />
          <button onClick={handleAdd}>添加</button>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default AddInput
