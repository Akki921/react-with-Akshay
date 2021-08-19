import React from 'react'

function Alert(props) {
    const cap = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert1 &&
<div>
<div className={`alert alert-${props.alert1.type} alert-dismissible fade show `} role="alert">
<strong>  {cap(props.alert1.type)} </strong> {props.alert1.msg}

</div>
</div>
    )
}

export default Alert
