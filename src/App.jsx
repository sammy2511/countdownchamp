import React, { Component} from 'react';
import './App.css'
import Clock from './Clock'
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    deadline:'December 25,2019',
    newDeadline:''
  }
}

changeDeadline(){
  console.log('state',this.state);
  this.setState({deadline:this.state.newDeadline});
}

render(){
return(
<div className='App'>
  <div className='App-title'>
    Countdown to {this.state.deadline}
  </div>
  <Clock
    deadline={this.state.deadline}
  />
  <Form inline>
    <FormControl placeholder='new date'
    className = 'deadLine-input'
    onChange = {event => this.setState({newDeadline:event.target.value})}
    />
    <Button onClick = {() => this.changeDeadline()}>
      submit
    </Button>
  </Form>
</div>
)
}
}


export default App;
