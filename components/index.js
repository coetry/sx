import React from 'react'

import Praise from './Praise'
import Card from './Card'
import Code from './Code'
import Counter from './Counter'

const styles = {
  display: 'flex',
  width: '30%',
  flexDirection: 'column',
  border: '1px solid black'
}

export default () => <div style={styles}>
  <Praise praise='subhanAllah' 
          bgColor='lightcoral' 
  />

  <Code color='lightcoral'>
    {`<Praise praise='subhanAllah' 
          bgColor='lightcoral' 
      />`}
  </Code>

  <Praise praise='AlhamdulilLah' 
          bgColor='lemonchiffon'
          color='black'
  />
  <Code color='lemonchiffon'>
    {`<Praise praise='AlhamdulilLah' 
          bgColor='lemonchiffon'
          color='black' />`}
  </Code>

  <Praise praise='la ilaha il Allah'
          bgColor='moccasin'
          color='black'
        />
  <Code color='moccasin'>
    {`<Praise praise='la ilaha il Allah'
          bgColor='moccasin'
          color='black'
      />`}
  </Code>
  <Praise praise='Allahuakbar'
          bgColor='mediumseagreen'
  />
  <Code color='mediumseagreen'>
    {`<Praise praise='Allahuakbar'
          bgColor='mediumseagreen'
      />`}
  </Code>

  <Card color="cornflowerblue"/>
  <Code color="cornflowerblue">
    {`<Text color="cornflowerblue"/>`}
  </Code>

  <Counter color="khaki" />
  <Code color="khaki">
    {`<Counter color="khaki" />`}
  </Code>

</div>
