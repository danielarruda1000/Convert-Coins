import React from 'react';
import ConvertCard from './components/ConvertCard'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="d-grid cointainer-fluid">
        <div className="row">
        < ConvertCard coin={"BRL"} toCoin={"USD"} toCoinValue={4.0}/>
          <ConvertCard coin={"BRL"} toCoin={"EUR"} toCoinValue={4.43}/>
        </div>
      </div>
    </div>
  );
}

export default App;
