import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <section>
          <h1>BBQ THREATS.com</h1>
        </section>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Lucian">Lucian</Link>
          </li>
          <li>
            <Link to="/Tim">Tim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
