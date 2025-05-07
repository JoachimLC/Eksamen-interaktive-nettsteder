import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import EventCard from "../components/EventCard";


export default function CategoryPage({categoryAttractions, categoryEvents, categoryVenues, getCategoryAttractions, getCategoryEvents, getCategoryVenues, favorites, setFavorites, selectedCity, setSelectedCity, selectedCountry, setSelectedCountry, setSearchText, searchText  }) {
  const { slug } = useParams(); 

  let newVariableForSlug = slug;

  if (newVariableForSlug === "Arts%&%Theater") {
    newVariableForSlug = "Arts & Theater";
  }


  const addToFavorites = (card) => {
    setFavorites([
      ...favorites,
      card
    ]);
  }

  const removeFromFavorites = (card) => {
    setFavorites(
      favorites.filter(fav => fav.id !== card.id)
    );
  }

  const filter = () => {
    getCategoryAttractions(newVariableForSlug)
    getCategoryEvents(newVariableForSlug, selectedCountry, selectedCity, searchText)
    getCategoryVenues(newVariableForSlug, selectedCountry)
  }
  
  useEffect(()=>{
    getCategoryAttractions(newVariableForSlug)
    getCategoryEvents(newVariableForSlug, selectedCountry, selectedCity, searchText)
    getCategoryVenues(newVariableForSlug, selectedCountry)
    },[slug])

  return (
      <>
      <h1>category page</h1>
      <h1>{newVariableForSlug}</h1>
      
      <label>
      Country 
        <select name="Country" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
          <option value="NO">Norway</option>
          <option value="SE">Sweden</option>
          <option value="US">USA</option>
        </select>
      </label>
      
      <label>
      city 
        <select name="city" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} >
          <option value="Oslo">Oslo</option>
          <option value="Stockholm">Stockholm</option>
          <option value="New York">New York</option>
        </select>
      </label>

      <input onChange={e => setSearchText(e.target.value)} ></input>

      <button onClick={() => filter()}>Filter</button>

      <h2>Attraksjoner</h2>
        <ul>
            {categoryAttractions.map(attraction => (
              <>
                <EventCard key={attraction.id} event={attraction} clickable={false} />
                {/* AI brukt til å fikse på noe syntaks på conditional knappene, se rapport */}
                {favorites.some((fav) => fav.id === attraction.id) ? (
                <button onClick={() => removeFromFavorites(attraction)}>💕</button>
            ) : (<button onClick={() => addToFavorites(attraction)}>🖤</button>)}
              </>
             ))}
       </ul>
      <h2>Arrangementer</h2>
        <ul>
              {categoryEvents.map(event => (
                <>
                <EventCard key={event.id} event={event} clickable={false} />
                {/* AI brukt til å fikse på noe syntaks på conditional knappene, se rapport */}
                {favorites.some((fav) => fav.id === event.id) ? (
                <button onClick={() => removeFromFavorites(event)}>💕</button>
            ) : (<button onClick={() => addToFavorites(event)}>🖤</button>)}
                </>
              ))}
        </ul>
      <h2>Spillesteder</h2>
        <ul>
              {categoryVenues.map(venue => (
                <>
                <EventCard key={venue.id} event={venue} clickable={false} />
                {/* AI brukt til å fikse på noe syntaks på conditional knappene, se rapport */}
                {favorites.some((fav) => fav.id === venue.id) ? (
                <button onClick={() => removeFromFavorites(venue)}>💕</button>
            ) : (<button onClick={() => addToFavorites(venue)}>🖤</button>)}
                </>
              ))}
        </ul>
      </>
    );
  };