import PropTypes from "prop-types";
import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
       let newText = Text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value )
    }

    const [Text, setText] = useState('Enter The Text');
    return (
        <div>
            <div className="form-group">
                <h2 className="text text-center" > <label htmlFor="exampleFormControlTextarea1">{ props.Heading }</label></h2>
                 <textarea value={Text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={props.Placeholder}></textarea>
             </div>
             <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}

TextForm.propTypes = {
  Heading: PropTypes.any.isRequired,
    Placeholder: PropTypes.any.isRequired
}
