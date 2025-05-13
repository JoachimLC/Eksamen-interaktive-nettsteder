import{useParams} from "react-router-dom"
import { useState, useEffect } from 'react';
import ArtistCardsContainer from "../components/ArtistCardContainer";
import CardsContainer from "../components/Cardscontainer";


export default function EventPage({events, festivalEventById, setFestivalEventById}) {
    const{id}=useParams()
    const event = events.find(evt => evt.id === id);

      /* Denne lever i denne komponenten slik at den får hentet event med id fra useParams */
    const getEventByAttractionId = async () => {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&attractionId=${event?.id}&locale=*`);
        const data = await response.json();
        const events = data._embedded?.events || [];
        setFestivalEventById(events);
  };

    useEffect(()=>{
    getEventByAttractionId()
    },[])

    return (
      <>
      <h1>{event?.name}</h1>
      <p>sjanger: {event?.classifications?.[0]?.genre?.name}</p>
      <p>undersjanger: {event?.classifications?.[0]?.subGenre?.name}</p>
      <p>Type event: {event?.classifications?.[0]?.subType?.name}</p>
      <section>
            <h2>Festivalpass</h2>
            <CardsContainer cards={festivalEventById} clickable={false}/>
      </section>
      <section>
        <h2>Artister</h2>
        <ArtistCardsContainer attractions={festivalEventById}/>
      </section>
      
      
      </>
    );
  };
  
  