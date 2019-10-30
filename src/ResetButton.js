import React from 'react'
import './App.css'
function ResetButton(){
    return (
        <button onClick={() => window.location.reload()} className="reset-button">
            Reset
        </button>
    )
}
export default ResetButton;