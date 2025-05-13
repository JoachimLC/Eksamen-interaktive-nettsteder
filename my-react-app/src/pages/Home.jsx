import EventCard from "../components/EventCard";
import CardsContainer from "../components/Cardscontainer";
import { useState, useEffect } from 'react';

export default function Home ({festivalEvents, bigCityEvents, getBigCityEvents}) { 
  const [chosenCity, setChosenCity] = useState([])

  const CityChosen = (city) => {
    setChosenCity(city);
    getBigCityEvents(city)
  }

  return (
    <>
    <h1>Home</h1>
    <section>
      <h2>Festivals</h2>
      <CardsContainer cards={festivalEvents} clickable={true}/>
      
    </section>
    <section>
          <h2>Attractions in {chosenCity}</h2>
          {/* Benyttet upmostly for onclick eventhandling referanse, se rapport*/}
          <button className="button" onClick={() => CityChosen("Oslo")}>Oslo</button>
          <button className="button" onClick={() => CityChosen("Berlin")}>Berlin</button>
          <button className="button" onClick={() => CityChosen("Paris")}>Paris</button>
          <button className="button" onClick={() => CityChosen("London")}>London</button>
          <CardsContainer cards={bigCityEvents} clickable={false}/>
    </section>
    </>
  );
};

