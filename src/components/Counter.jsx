import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import AnimationFadeOut from './Animations/AnimationFadeOut'

const mainStyles = {
    display: 'flex',
    alignItems: 'center'
}
const buttonStyles = {
    border: 'none',
    outline: 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: '#e3e3e3'
}
const editorStyles = {
    width: '30px',
    textAlign: 'center',
    outline: 'none',
    border: '1px solid #e3e3e3',
    borderRadius: '8px',
    color: '#9b9b9b'
}

const Counter = ({ value, edit, max, visual }) => {
    function decrease () {
        if (value > 1) {
            edit(value-1)
        }
    }

    function increase () {
        if (value < max) {
            edit(value+1)
        }
    }

    return (
        <div style={mainStyles}>
            <button style={Object.assign({}, buttonStyles, value <= 1 && {color: '#f8f8f8'})} onClick={decrease}>
                {visual==="math" && <FontAwesomeIcon icon={faMinus} />}
                {visual==="arrow" && <FontAwesomeIcon icon={faChevronLeft} />}
            </button>
            <input value={value} style={editorStyles} onChange={(e) => edit(e.target.value)} type="text" />
            <button style={Object.assign({}, buttonStyles, value >= max && {color: '#f8f8f8'})} onClick={increase}>
                {visual==="math" && <FontAwesomeIcon icon={faPlus} />}
                {visual==="arrow" && <FontAwesomeIcon icon={faChevronRight} />}
            </button>
        </div>
    );
}

export default Counter;
