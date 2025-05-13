import SanityCardsContainer from "../components/SanityCardContainer";

export default function Dashboard({loginStatus, setLoginStatus, sanityUsers, sanityEvents}) {
  
    const login = () => {
        setLoginStatus(true);
      };

    return (
        <>
        {!loginStatus && (
            
          <form onSubmit={login}>
            <h1>Log in</h1>

            <label>Username:</label>
            <input />
  
            <label>Password:</label>
            <input />
            <button onClick={login}>Login</button>
          </form>
        )}
        
        {loginStatus && (
            <section className="dashboard">
                <h1>Min side</h1>
                <h2>Brukere</h2>
                <SanityCardsContainer data={sanityUsers}/>
                
                <h2>Alle Events</h2>
                <ul className="dashboardeventlist">
                    {sanityEvents.map((event) => (
                        <li key={event._id}>
                        {event.title}
                        </li>
                    ))
                    }
                </ul>

          </section>
        )}
  
      </>
    );
  };