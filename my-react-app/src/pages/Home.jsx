import EventCard from "../components/EventCard";
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
      <ul>
          {festivalEvents.map(event => (
            <li key={event.id}>
            <EventCard event={event} clickable={true}/>
            </li>
          ))}
      </ul>
    </section>
    <section>
          <h2>Attractions in {chosenCity}</h2>
          <button onClick={() => CityChosen("Oslo")}>Oslo</button>
          <button onClick={() => CityChosen("Berlin")}>Berlin</button>
          <button onClick={() => CityChosen("Paris")}>Paris</button>
          <button onClick={() => CityChosen("London")}>London</button>
          <ul>
          {bigCityEvents.map(event => (
            <li key={event.id}>
            <EventCard  event={event} clickable={false} />
            </li>
          ))}
      </ul>
    </section>
    </>
  );
};

