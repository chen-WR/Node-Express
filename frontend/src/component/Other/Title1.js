import React from 'react';
import apple from './apple.svg'

class Title extends React.Component{
    render(){
      return(
          <div className='title'>
            <h1>
                this is class component title
            </h1>
            <img alt='apple' src={apple}></img>
          </div>

      )
    }
  }

export default Title;