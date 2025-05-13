import{useParams} from "react-router-dom"
import { useState, useEffect } from 'react';
import { getEventById } from "../sanity/service";
import { getUsersByEventId } from "../sanity/service";

export default function SanityEventDetails({sanityEventDetails, setSanityEventDetails, sanityEvent, setSanityEvent, users, setUsers}) {
    const{id}=useParams()

      
    /* Denne lever i denne komponenten slik at den får hentet event med id fra useParams */
    const getEventByEventId = async () => {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&locale=*`);
      const data = await response.json();
      setSanityEventDetails(data);
    };


    const getAndSetSanityEvent = async () => {
      const data = await getEventById(id);
          setSanityEvent(data[0]); 
    };

    const getAndSetUsers = async () => {
        const data = await getUsersByEventId(id);
            setUsers(data);
      };

    useEffect(()=>{
        getEventByEventId()
        getAndSetSanityEvent()
        getAndSetUsers()
    },[id])

    return (
      <>
      
      <section className="SanityEventDetails">
        <h1>{sanityEvent?.title}</h1>
        <p>Event type: {sanityEventDetails?.classifications?.[0]?.genre?.name}</p>
        <p>Event kategori: {sanityEventDetails?.classifications?.[0]?.segment?.name}</p>
        <p>Sted: {sanityEventDetails?._embedded.venues?.[0]?.name}</p>
        <p>Dato: {sanityEventDetails?.dates?.start?.localDate}</p>

        <h2>Brukere med eventet i ønskeliste eller tidligere kjøp:</h2>
        <ul>
          {users.map(user => (
            <li key={user._id}>
              {user.name}
            </li>
          ))}
        </ul>
      </section>
      
       
      </>
    );
  };
  
  