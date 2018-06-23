import React from 'react'

export default ({praise, bgColor, color}) => {

  const styles = {
    backgroundColor: `${bgColor ? bgColor : 'black'}`,
    fontSize: '3rem',
    width: 'fit-content',
    fontWeight: 'bold',
    color: `${color ? color : 'white'}`,
    display: 'inline-block'
  }

  return (
    <span style={styles}>
      {praise ? praise : 'الله'}
    </span>
  )
}

