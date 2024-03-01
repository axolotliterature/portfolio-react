// import React from 'react'
import ReactDom from 'react-dom'

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
        <div className="overlayStyles" onClick={onClose}></div>
            <div className="modal">
                <button onClick={onClose}>x</button>
                {children}
            </div>
        
        </>,
        document.getElementById('portal')
    )
}