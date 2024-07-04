import './App.css';
import { useEffect, useState } from 'react';
import data from './data/data.json'

function App() {

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [talukas, setTalukas] = useState([]);

  useEffect(() => {
    setStates(data.India.states);
  });

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    const stateData = states.find(state => state.state === selectedState);
    setCities(stateData ? stateData.cities : []);
    setSelectedCity('');
    setTalukas([]);
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    const cityData = cities.find(city => city.name === selectedCity);
    setTalukas(cityData ? cityData.talukas : []);
  };

  return (
    <div className="App">
       <h1>State, City, and Taluka Dropdown</h1>
      <div>
        <label htmlFor="state">State:</label>
        <select id="state" value={selectedState} onChange={handleStateChange}>
          <option value="">Select a state</option>
          {states.map((state, index) => (
            <option key={index} value={state.state}>{state.state}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
          <option value="">Select a city</option>
          {cities.map((city, index) => (
            <option key={index} value={city.name}>{city.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="taluka">Taluka:</label>
        <select id="taluka" disabled={!selectedCity}>
          <option value="">Select a taluka</option>
          {talukas.map((taluka, index) => (
            <option key={index} value={taluka}>{taluka}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
