import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
      <div class="row justify-content-center">
        <WeatherCard/>
        </div>
      </Container>
    </div>
    
  );
}



export default App;
