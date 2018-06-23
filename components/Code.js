import React from 'react'


export default ({color, children}) =>  {


  const style = {
    display: 'inline-block',
    padding: '2em',
    margin: '1em 0',
    color: color ? color : 'white',
    border: `1px solid ${color ? color : 'white'}`,
    fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
  }

  return <div style={style}>
    {children}
  </div>
} 
               
