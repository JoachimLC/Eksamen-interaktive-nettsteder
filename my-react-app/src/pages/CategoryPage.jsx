import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import CategoryCardsContainer from "../components/CategoryCardsContainer";


export default function CategoryPage({categoryAttractions, categoryEvents, categoryVenues, getCategoryAttractions, getCategoryEvents, getCategoryVenues, favorites, setFavorites, selectedCity, setSelectedCity, selectedCountry, setSelectedCountry, setSearchText, searchText, selectedDate, setSelectedDate  }) {
  const { slug } = useParams(); 

  let newVariableForSlug = slug;

  if (newVariableForSlug === "Theater") {
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
    let segmentidforattractions = "";

  if (newVariableForSlug === "Arts & Theater") {
    segmentidforattractions = "KZFzniwnSyZfZ7v7na";
  } else if (newVariableForSlug === "Music") {
    segmentidforattractions = "KZFzniwnSyZfZ7v7nJ";
  } else if (newVariableForSlug === "Sports") {
    segmentidforattractions = "KZFzniwnSyZfZ7v7nE";
  }

    getCategoryAttractions(segmentidforattractions)
    getCategoryEvents(newVariableForSlug, selectedCountry, selectedCity, searchText, selectedDate)
    getCategoryVenues(newVariableForSlug, selectedCountry)
  }
  
  useEffect(()=>{

  let segmentidforattractions = "";

  if (newVariableForSlug === "Arts & Theater") {
    segmentidforattractions = "KZFzniwnSyZfZ7v7na";
  } else if (newVariableForSlug === "Music") {
    segmentidforattractions = "KZFzniwnSyZfZ7v7nJ";
  } else if (newVariableForSlug === "Sports") {
    segmentidforattractions = "KZFzniwnSyZfZ7v7nE";
  }
    getCategoryAttractions(segmentidforattractions)
    getCategoryEvents(newVariableForSlug, selectedCountry, selectedCity, searchText, selectedDate)
    getCategoryVenues(newVariableForSlug, selectedCountry)
    },[slug])

  return (
      <>
      <h1>{newVariableForSlug}</h1>
      <section className="filter">
          <input className="filter-item"
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
          />

        
          {/*benyttet select fra react biblioteket for valgbokser , se rapport */}
          {/*Derfor også valgt å ha state setter direkte i en onchange på knappene, istedet for i egen onclick funksjon som i webtricks */}

          <label className="filter-item">
          Country 
            <select name="Country" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
              <option value="NO">Norway</option>
              <option value="SE">Sweden</option>
              <option value="US">USA</option>
            </select>
          </label>
          
          <label className="filter-item">
          city 
            <select name="city" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} >
              <option value="Oslo">Oslo</option>
              <option value="Stockholm">Stockholm</option>
              <option value="New York">New York</option>
            </select>
          </label>

          <input className="filter-item" onChange={e => setSearchText(e.target.value)} ></input>

          <button className="button" onClick={() => filter()}>Filter</button>
      </section>
      
      <h2>Attraksjoner</h2>
        <CategoryCardsContainer 
          data={categoryAttractions} 
          favorites={favorites} 
          addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites} 
      />


      <h2>Arrangementer</h2>
      <CategoryCardsContainer 
          data={categoryEvents} 
          favorites={favorites} 
          addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites} 
      />
      <h2>Spillesteder</h2>
      <CategoryCardsContainer 
          data={categoryVenues} 
          favorites={favorites} 
          addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites} 
      />
      </>
    );
  };