import React from "react";
import styles from "../css/Navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <div className={styles.nav_wrap}>
      <nav className={styles.main_nav}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Facilities">Facilities</a>
        <a href="#Gallery">Gallery</a>
        <a href="/issue">Issue</a>
      </nav>
    </div>

  );
};

export default Navbar;
