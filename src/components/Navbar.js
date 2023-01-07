import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const favRef = useRef(null);
  const logoRef = useRef(null);
  const ar = [li1, li2, li3];
  const fav = [favRef];
  const logo = [logoRef];
  useGsapDownStagger(ar);
  useGsapDownStagger(fav, 3.2);
  useGsapDownStagger(logo, 2.2);
  return (
    <nav className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to="/featured">Feature</Link>
        </li>
        <li ref={li2}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li3}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <h2>
          <Link to="/">iMMEMORIAL</Link>
        </h2>
      </div>
      <div className="favorite-liks" ref={favRef}>
        <Link to>Favorite</Link>
      </div>
    </nav>
  );
};

export default Navbar;
