import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';


class DrumMachine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'Drum Machine'

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(e) {
    console.log(e.target)
    const audio = e.target.querySelector('audio')
    if (audio != null) {
      const parentId = audio.parentElement.id
      audio.play()
      this.setState({
        display: parentId
      })
    }
  }

  handleKeyPress(e) {
    const audio = e.target.querySelector('audio#' + e.key.toUpperCase())
    if (audio != null) {
      const parentId = audio.parentElement.id
      audio.play()
      this.setState({
        display: parentId
      })
    }
    
  }

  render() {
    return (
      <div id='drum-machine' className='container' onKeyDown={this.handleKeyPress} tabIndex='0'>
        <div className='controls-container'>
          <div id='display'>
            <h1>{this.state.display}</h1>
          </div>
        </div>
        <div className='keypad-container row'>
          <div className='btn btn-secondary drum-pad col-4' 
                id='Heater-1' 
                onClick={this.handleClick}>
            <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
            Q
          </div>
          <div className='btn btn-secondary drum-pad col-4' 
                id='Heater-2' 
                onClick={this.handleClick}>
            <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>
            W
          </div>
          <div className='btn btn-secondary drum-pad col-4' 
                id='Heater-3' 
                onClick={this.handleClick}>
            <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>
            E
          </div>
          <div className='btn btn-secondary drum-pad col-4' 
                id='Heater-4' 
                onClick={this.handleClick}>
            <audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>
            A
          </div>
          <div className='btn btn-secondary drum-pad col-4' 
                id='Clap' 
                onClick={this.handleClick}>
            <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>
            S
          </div>
          <div className='btn btn-secondary drum-pad col-4' 
                id='Open-HH' 
                onClick={this.handleClick}>
            <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>
            D
          </div>
          <div className='btn btn-secondary drum-pad col-4' 
                id="Kick-n'-Hat" 
                onClick={this.handleClick}>
            <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>
            Z
          </div>
          <div className='btn btn-secondary drum-pad col-4' 
                id='Kick' 
                onClick={this.handleClick}>
            <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>
            X
          </div>
          <div className='btn btn-secondary drum-pad col-4' 
                id='Closed-HH' 
                onClick={this.handleClick}>
            <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>
            C
          </div>
        </div>
      </div>
    )
  }

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>
);

reportWebVitals();
