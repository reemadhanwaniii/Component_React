import React from 'react';
import './Demo.css';
import './DogDescription.js';
import DogDescription from './DogDescription.js';

function Demo(){
    //single line return 
    //return <div>Hello world</div>
    

    //multiple line return
    return (
        <div>
            <br/><br/>
            <h1 style={{border : "solid black 2px"}}>Enter your Name</h1>
            <input type="text"></input>
            <br></br>
            <br></br>
            <img src="data:image/jpeg;base64,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" alt="cute puppy"></img>
            <br></br>
            <br></br>
            <DogDescription/>
        </div>
    );
}

export default Demo;