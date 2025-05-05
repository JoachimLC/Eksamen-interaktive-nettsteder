import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Layout(props) {
  return (
    <>
      <header>
            <nav>
                <ul>
                    <li><Link to={`/`}>Logo</Link></li>
                    <li><Link to={`/category/musikk`}>Musikk</Link></li>
                    <li><Link to={`/category/sport`}>Sport</Link></li>
                    <li><Link to={`/category/teater`}>Teater</Link></li>
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
