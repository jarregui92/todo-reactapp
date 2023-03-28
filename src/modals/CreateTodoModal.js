import React from 'react';
import ReactDOM from 'react-dom';
import { CreateTodoButton } from '../components/CreateTodoButton';
import './CreateTodoModal.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
            <CreateTodoButton />
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};
