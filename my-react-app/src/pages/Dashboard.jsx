export default function Dashboard({loginStatus, setLoginStatus}) {
  
    const login = () => {
        setLoginStatus(true);
      };

    return (
        <>
        {!loginStatus && (
            
          <form>
            <h1>Log in</h1>

            <label>Username:</label>
            <input />
  
            <label>Password:</label>
            <input />
            <button onClick={login}>Login</button>
          </form>
        )}
  
        {loginStatus && <h1>Min side</h1>}
      </>
    );
  };