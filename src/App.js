import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const date = new Date();
    const hour = date.getHours();
    let timeOfDate;

    if (hour < 12){
        timeOfDate = "morning"
    }else if (hour >=12 && hour < 17){
        timeOfDate = "afternoon"
    } else{
        timeOfDate = "evening"
    }

    const styles = {
        color: "#DC143C"
    }


  return (
      <h1 style={styles}>Good {timeOfDate}!</h1>
  );
}

export default App;
