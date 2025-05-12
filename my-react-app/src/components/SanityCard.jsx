import { Link } from "react-router-dom";

export default function SanityCard ({data}) {

    const totalcount = data?.wishlist?.length + data?.previousPurchases?.length

    return (
      <>
        <div className={"sanitycard"}>
        <h2>{data?.name}</h2>
        <img src={data?.imageUrl}></img>
        <p>Antall eventer: {totalcount}</p>
        <h3>Ønskeliste</h3>
            <ul>
                {data?.wishlist?.map((event) => (
                     <Link key={event._id} to={`/sanity-event/${event.apiId}`}>
                        <li> 
                            {event.title} 
                        
                        </li> 
                    </Link>))}

            </ul>
        <h3>Tidligere Kjøp</h3>
            <ul>
                {data?.previousPurchases?.map((event) => (
                    <Link key={event._id} to={`/sanity-event/${event.apiId}`}>
                    <li> 
                        {event.title} 
                    </li>
                    </Link>
                     ))}

            </ul>
        </div>
      </>
    );
  }
  