import React from 'react'

const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
    
    // render() {
    //     return (
    //         <div>
    //             <h1>{ this.props.firstName }, { this.props.lastName }</h1>
    //             <p>Age: {this.state.age}</p>
    //             <p>Hair Color: {this.props.hairColor}</p>
    //             <button onClick={this.handleBirthday}>Happy Birthday {this.props.lastName}</button>
    //         </div>
    //     )
    // }


export default PersonCard;
