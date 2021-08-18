import PropTypes from "prop-types";
import React, { useState } from 'react'



export default function TextForm(props) {
    
    const handleUpClick = () => {
       let newText = Text.toUpperCase();
        setText(newText)
    }
    const handlelowClick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
    }
 
    const handleOnChange = (event) => {
        setText(event.target.value )
    }

    const [Text, setText] = useState('Enter The Text');
   
    return (
        <>
<div className="container my-3">
<div className="form-group">
    <h2 className="text text-center" > <label htmlFor="exampleFormControlTextarea1">{ props.Heading }</label></h2>
        <textarea value={Text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={props.Placeholder}></textarea>
    </div>
    <div className="container">
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-secondary" onClick={handleUpClick}>uppercase</button>
                        <button className="btn btn-secondary" onClick={handlelowClick}>lowercase</button>
                      
        </div>
    </div>
</div>

            </>
    )
}

TextForm.propTypes = {
  Heading: PropTypes.any.isRequired,
    Placeholder: PropTypes.any.isRequired
}
