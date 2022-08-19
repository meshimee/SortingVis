import './Bar.css'
import React from 'react'

function Bar({index,length,color}) {
          const colors = [
                    ['rgba(61,90,241,0.5)','rgba(61,90,241,0.5)'],
                    ['rgba(255,48,79,1)','rgba(255,48,79,0.5)'],
                    ['rgba(131,232,90,0.5)','rgba(131,232,90,0.2)'],
          
                    ];
          const barStyle = {
                    height: length,
          };
          const front_bottom = {
                    transform:`translateY(${200 - length}px) rotateX(-90deg)`,
                    backgroundColor:   `${colors[color][0]}`,
                    boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
                    transition: '0.3s'
          }
          const right_left = {
                    height: `${length}px`,
                    transform: `translateY(${200 - length}px)`,
                    backgroundColor: `${colors[color][0]}`,
                    boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
                    transition: '0.3s'
          }
          
          

  return (
    <>
    <div className="bar" style={barStyle}>
          <div className="side top"></div>
          <div className="side bottom"style={front_bottom}></div>
          <div className="side right"style={right_left}></div>
          <div className="side left"style={right_left}></div>
          <div className="side front"style={front_bottom}></div>
          
    </div>
    </>
  )
}

export default Bar