import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <>
      <header>
            <nav>
                <ul>
                    <li><Link to={`/`}>Logo</Link></li>
                    <li><Link to={`/category/Music`}>Music</Link></li>
                    <li><Link to={`/category/sports`}>Sports</Link></li>
                    <li><Link to={`/category/Arts%&%Theater`}>Arts & Theater</Link></li>
                    <li><Link to={`/dashboard`}>Login</Link></li>
                </ul>
            </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
