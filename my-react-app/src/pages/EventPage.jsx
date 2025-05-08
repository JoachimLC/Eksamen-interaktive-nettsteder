import{useParams} from "react-router-dom"
import { useState, useEffect } from 'react';
import EventCard from "../components/EventCard";
import ArtistCard from "../components/ArtistCard";
import ArtistCardsContainer from "../components/ArtistCardContainer";
import CardsContainer from "../components/Cardscontainer";


export default function EventPage({events}) {
    const{id}=useParams()
    const [festivalEvent, setFestivalEvent] = useState([])
    
    
    const event = events.find(evt => evt.id === id);

    const getEventByAttractionId = async () => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&attractionId=${event?.id}&locale=*`)
        .then(res => res.json())
        .then(data => {
          const events = data._embedded?.events || [];
          setFestivalEvent(events);
          console.log(events)
        })
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
            <CardsContainer cards={festivalEvent} clickable={false}/>
      </section>
      <section>
        <h2>Artister</h2>
        <ArtistCardsContainer attractions={festivalEvent}/>
      </section>
      
      
      </>
    );
  };
  
  