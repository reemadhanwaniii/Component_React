import React from 'react';

function DogTile(){
    return React.createElement(
        'div',
        {style:{
            border: "solid red 5px"
        }},
        React.createElement('h1',{
            style:{
                textDecoration: "underline"
            }
        },
        "Welcome to ReactJS"
        )
    );
}

export default DogTile;