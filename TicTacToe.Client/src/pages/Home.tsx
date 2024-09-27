import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <nav>
          <div>
            <ul>
              <li>
                <Link to='/login'>Log in or Sign Up</Link>
              </li>
              <li>
                <Link to='/character'>Select Character</Link>
              </li>
              <li>
                <Link to='/startgame'>Start Game</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
