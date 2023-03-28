import React from "react";
import '../css/CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
      props.setOpenModal(prevState => !prevState)
    }

    return (
      <button
        className="CreateTodoButton"
        onClick={(onClickButton)}
      >
        <p style={{textShadow: '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000'}}>+</p>
      </button>
    )
}

export {CreateTodoButton};