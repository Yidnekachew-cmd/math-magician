import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  const [text, setText] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'XuKHhxC6MfTaFVJtb/DvGA==u1EBJAFxUnnN5810';
      const options = {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      };
      const category = 'attitude';
      const url = (`https://api.api-ninjas.com/v1/quotes?category=${category}`);
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
      const result = response.json();
      return result;
    };
    let subscribe = true;
    if (subscribe) {
      fetchData().then((data) => {
        setText(data[0]);
        setIsLoading(false);
        setError(null);
      }).catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
    }
    return () => {
      subscribe = false;
    };
  }, [setText, setIsLoading, setError]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quotes text={text} error={error} isLoading={isLoading} />} />
      </Routes>
    </>
  );
}

export default App;
