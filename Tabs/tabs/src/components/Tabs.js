import React, {useState} from 'react'
import Button from '@material-ui/core/Button';

const Tabs = (props) => {
    const tabs = ["hi", "hey there", "hello again"];
    const clickHandler = (e,x,i) => {
        e.preventDefault();
        props.data(x, " was tapped");
    }
    return (
        <div>
            {
                tabs.map((value, i) => {
                return( <Button variant="contained" color="primary" key={i} onClick={(e) => clickHandler(e,value,i)}>
                    Button {i+1}
                        </Button>
                        )
                    }
                )
            }
        </div>
    )
}
export default Tabs
