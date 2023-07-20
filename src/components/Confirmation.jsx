import React from 'react'

const mainStyles = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    // justifyContent: 'center'
}
const buttonsStyles = {
    display: 'flex',
    columnGap: '10px',
    justifyContent: 'center'
}
const buttonStyles = {
    display: 'flex',
    columnGap: '10px',
    justifyContent: 'center'
}

const Confirmation = ({confirmation, setVisibility, errorMessage}) => {

    function confirmHandler() {
        confirmation()
    }

    return (
        <div style={mainStyles}>
            {errorMessage && <span className="errorMessage">{errorMessage}</span>}
            <div style={buttonsStyles}>
                <button className='buttonModal buttonModal_size50' onClick={() => confirmHandler()}>
                    <span>Так</span>
                </button>
                <button className='buttonModal buttonModal_size50' onClick={() => setVisibility(false)}>
                    <span>Ні</span>
                </button>
            </div >
            
        </div>
    );
}

export default Confirmation;
