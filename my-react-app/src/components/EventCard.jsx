import { Link } from "react-router-dom";

//clickable && conditional syntaksen ble hjulpet frem av chatgpt, se rapport - minstekrav karakter C  
export default function EventCard ({event, clickable}) {
  return (
    <>
     <div className={"card"}>
            <h3>{event.name}</h3>
            {event?.images?.[0]?.url && (
              <img src={event.images[0].url} />
            )}
            <p>{event._embedded?.venues?.[0]?.city?.name}</p>
            <p>{event._embedded?.venues?.[0]?.country?.name}</p>
            <p>{event._embedded?.venues?.[0]?.name}</p>
            <p>{event.dates?.start?.localDate}</p>
            
            {clickable && (
          <Link to={`/event/${event.id}`}>Gå til event</Link>
        )}  
        
    </div>
    </> 
  );
}
