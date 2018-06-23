import React from 'react'
import Card from './Card'

class Counter extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.updateCounter = this.updateCounter.bind(this)
  }

  componentDidMount() {
    const timerId = setInterval(this.updateCounter, 1000)
  }

  componentWillUnmount() {
    clearInterval(timerId)
  }

  updateCounter = () => this.setState(s => ({count: s.count + 1}))

  render(){
    const {color} = this.props
    const {count} = this.state
    return (
      <Card color={color}>
        {String(count)}
      </Card>
    )
  }

}

export default Counter
