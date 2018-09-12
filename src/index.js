import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export default class OlderCoaster extends Component {
  // your code here
    render() {
      return (
      <div class="oldercoaster">
   <p>Two grannies having the time of their life!</p>
   <p>Passengers:</p>
   <ul>
     <li>Agnes</li>
     <li>Muriel</li>
   </ul>
 </div>
 )
  }
}

export default class InFrontOfYou extends Component {
  // your code here
  render(){
    return(
      <div>
  <p>You shouldn't look too far.</p>
  <p>Sometimes, the solution is right in front of you.</p>
</div>
)
  }
}
export class ButcherShop extends Component {
  // your code here
  render(){
    return(
      <div className="butcher-shop">
  <p>Hello! We have the following products for sale today:</p>
  <ul>
    <li>Tenderloin</li>
    <li>Short ribs</li>
    <li>Beef shin</li>
    <li>Ribeye</li>
  </ul>
</div>
      )
  }
}
export class App extends Component{
  render(){
    return(
      <div className="App">
      <OlderCoaster />      
      <InFrontOfYou />      
      <ButcherShop />
      </div>
      )
  }
}
ReactDOM.render(<App />,
  document.getElementById('root')
)