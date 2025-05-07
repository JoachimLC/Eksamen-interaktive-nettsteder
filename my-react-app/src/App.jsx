import './styles.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, data } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout';
import EventPage from './pages/EventPage';
import CategoryPage from './pages/CategoryPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [festivalEvents, setFestivalEvents] = useState([])
  const [bigCityEvents, setBigCityEvents] = useState([])
  const [categoryAttractions, setCategoryAttractions] = useState([])
  const [categoryEvents,setCategoryEvents] = useState([])
  const [categoryVenues, setCategoryVenues] = useState([])
  const [favorites, setFavorites] = useState([])
  const [selectedCity, setSelectedCity] = useState("Oslo")
  const [selectedCountry, setSelectedCountry] = useState("NO")
  const [searchText, setSearchText] = useState("")
  const [loginStatus, setLoginStatus] = useState(false)


  


  //AI benyttet til deler av denne funksjonen, se rapport
  const getFestivalEvents = async () => {
    const festivals = ['Findings Festival', 'NEON Festival', 'Skeikampenfestivalen', 'Tons of Rock'];
    const fetches = festivals.map(name =>
      fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&locale=*&keyword=${encodeURIComponent(name)}`)
        .then(res => res.json())
        
    );
  
    const results = await Promise.all(fetches);
    const all = results.flatMap(r => r._embedded?.attractions || []);
    
    const filtered = all.filter(attr =>
        festivals.some(name =>
            attr.name === name
        )
    );
    setFestivalEvents(filtered);
    console.log(filtered)

  };

  const getBigCityEvents = async (city) => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&city=${city}&size=10`)
          .then(res => res.json())
          .then(data => {
            const events = data._embedded?.events || [];
            setBigCityEvents(events); 
        })
  };

  const getCategoryAttractions = async (category) => {
    fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&classificationName=${category}&locale=no`)
      .then(res => res.json())
      .then(data => {
        const attractions = data._embedded?.attractions || [];
        setCategoryAttractions(attractions); 
      });
  };
  
  const getCategoryEvents = async (category, country, city, searchText) => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&classificationName=${category}&locale=*&countryCode=${country}&city=${city}&keyword=${searchText}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const events = data._embedded?.events || [];
        setCategoryEvents(events); 
      });
  };
  
  const getCategoryVenues = async (category, country) => {
    fetch(`https://app.ticketmaster.com/discovery/v2/venues.json?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&keyword=${category}&locale=*&countryCode=${country}`)
      .then(res => res.json())
      .then(data => {
        const venues = data._embedded?.venues || [];
        setCategoryVenues(venues); 
      });
  };
  
  

  useEffect(()=>{
    getFestivalEvents()
    getBigCityEvents("Oslo")
  },[])

  return (
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home festivalEvents={festivalEvents} bigCityEvents={bigCityEvents} getBigCityEvents={getBigCityEvents}/>} />
            <Route path="/event/:id" element={<EventPage events={festivalEvents} />} />
            <Route path="/category/:slug" element={<CategoryPage categoryAttractions={categoryAttractions} categoryEvents={categoryEvents} categoryVenues={categoryVenues} getCategoryAttractions={getCategoryAttractions} getCategoryEvents={getCategoryEvents} getCategoryVenues={getCategoryVenues} favorites={favorites} setFavorites={setFavorites} selectedCity={selectedCity} setSelectedCity={setSelectedCity} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setSearchText={setSearchText} searchText={searchText}/>} />
            <Route path="/dashboard" element={<Dashboard loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>} />
        </Route>
      </Routes>
  );
}

export default App;