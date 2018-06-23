import React from 'react'

export default ({color, children}) => {
  
  const styles = {
    width: '250px',
    height: '250px',
    border: `1px solid ${color ? color : '#fff'}`,
    color: color ? color : '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={styles}>{children ? children : 'hello'}</div>
  )

}
