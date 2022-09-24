import React from 'react'

function AddInput(props) {
  const { showInput } = props
  const handleAdd = () => {
    console.log('添加')
  }
  return (
    <>
      {showInput ? (
        <div className="flex-between">
          <input type="text" placeholder='请输入待办项目'/>
          <button
            onClick={() => {
              handleAdd()
            }}>
            添加
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default AddInput
