import React from 'react'

import './Education.scss'
import Anim from './Anim';


function Education() {

    const sentence="Hello Jack".split("");


 
  return (
    <div className='homepage'> 
    <div className='myApp'>
        {
            sentence.map((letter,index)=>{
                return(
                    <Anim key={index}>
                        {letter===" "?"\u00A0":letter}
                    </Anim>
                )
            })
        }

    </div>
   </div>
    
  )
}

export default Education