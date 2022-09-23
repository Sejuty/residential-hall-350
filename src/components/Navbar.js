import React from "react";
import styles from "../css/Navbar.module.css"

const Navbar = () => {
  return (
    <div>
      <nav className={styles.main_nav}>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Facilities">Facilities</a>
          <a href="#Gallery">Gallery</a>
      </nav>
    </div>
  );
};

export default Navbar;
