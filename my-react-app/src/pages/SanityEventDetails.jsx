import{useParams} from "react-router-dom"
import { useState, useEffect } from 'react';
import { getEventById } from "../sanity/service";
import { getUsersByEventId } from "../sanity/service";
import EventCard from "../components/EventCard";

export default function SanityEventDetails() {
    const{id}=useParams()

      /*Kunne lagt disse statene i app.jsx med de andre, men syns det er mer hensiktmessig her da den kun har en bifunksjon i denne komponenten*/

    const [eventDetails, setEventDetails] = useState()
    const [sanityEvent, setSanityEvent] = useState()
    const [users, setUsers] = useState([])

  /*Samme gjelder henting av data, kunne vært gjort i app.jsx og drilla data ned til denne komponenten*/
  /*Men i dette tilfellet ser jeg ikke at denne dataen ville blitt brukt andre steder*/

    const getEventByEventId = async () => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=m5ODSZRZed6yFz7Tp4RTQ34xNFxfGny3&locale=*`)
        .then(res => res.json())
        .then(data => {
          setEventDetails(data)
        })
        .catch((error) =>
        console.error("Feil ved henting av event:", error));
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
        <p>Event type: {eventDetails?.classifications?.[0]?.genre?.name}</p>
        <p>Event kategori: {eventDetails?.classifications?.[0]?.segment?.name}</p>
        <p>Sted: {eventDetails?._embedded.venues?.[0]?.name}</p>
        <p>Dato: {eventDetails?.dates?.start?.localDate}</p>

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
  
  