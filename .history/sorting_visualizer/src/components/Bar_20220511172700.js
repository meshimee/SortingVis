import './Bar.css'
import React from 'react'

function Bar({index,length,color}) {
          const barStyle = {
                    height: length
          }
          const colors = [
          ['rgba(61,90,241,0.5)','rgba(61,90,241,0.5)'],
          ['rgba(255,48,79,1)','rgba(255,48,79,0.5)'],
          ['rgba(131,232,90,0.5)','rgba(131,232,90,0.2)'],

          ];

  return (
    <>
    <div className="bar" style={barStyle}>

    </div>
    </>
  )
}

export default Bar