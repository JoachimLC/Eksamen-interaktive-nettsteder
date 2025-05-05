import './styles.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout';
import EventPage from './pages/EventPage';
import CategoryPage from './pages/CategoryPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [events, setEvents] = useState([])
  
  const getEvents = async () => {
    const festivals = ['Findings Festival', 'NEON Festival', 'Skeikampenfestivalen', 'Tons of Rock'];
    const fetches = festivals.map(name =>
      fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&keyword=${encodeURIComponent(name)}`)
        .then(res => res.json())
    );
  
    const results = await Promise.all(fetches);
    const all = results.flatMap(r => r._embedded?.attractions || []);
    
    const filtered = all.filter(attr =>
      festivals.some(name =>
        attr.name === name
      )
    );

    setEvents(filtered);
  };
  

  useEffect(()=>{
    getEvents()
  },[])

  console.log(events)

  return (
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home events={events}/>} />
            <Route path="/event/:id" element={<EventPage events={events} />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
  );
}

export default App;