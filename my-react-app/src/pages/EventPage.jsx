import{useParams} from "react-router-dom"
export default function EventPage({events}) {
    const{id}=useParams()
    
    const event = events.find(evt => evt.id === id);

    return (
      <h1>{event?.name}</h1>
    );
  };
  
  