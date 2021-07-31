import React from 'react'

const Variable = ({variable, color, backgroundColor}) => {
    // const {variable, color, backgroundColor}= props;
    return (
        <div style = {{color, backgroundColor}}>
          {isNaN(variable) ? <h1>This word is: {variable}</h1> : <h1>This number is: {variable}</h1>}
            
        </div>
    )
}

export default Variable
