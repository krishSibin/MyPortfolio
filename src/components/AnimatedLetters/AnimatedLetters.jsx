import "./AnimatedLetters.scss"
import 'animate.css'

import React from 'react'

function AnimatedLetters({letterClass,strArray,idx}) {
  return (
    <span>
        {
           strArray.map((char,i)=>(
            <span key={char+i} className={`${letterClass} _${i + idx}`} >
                {char}
            </span>
           ))
        }
    
    </span>
  )
}

export default AnimatedLetters