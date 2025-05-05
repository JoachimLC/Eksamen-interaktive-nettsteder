import { Link } from "react-router-dom";
import EventPage from "./EventPage";
export default function Home ({events}) { 

  return (
    <>
    <h1>Hjem</h1>
    <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <Link to={`/event/${event.id}`}>Gå til event</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

