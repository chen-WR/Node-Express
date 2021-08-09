import React from 'react';
import apple from './apple.svg'

function Title() {
    return(
        <div className='title'>
        <h1>
            this is function title
        </h1>
        <img alt='apple' src={apple}></img>
        </div>

    )
}

export default Title;