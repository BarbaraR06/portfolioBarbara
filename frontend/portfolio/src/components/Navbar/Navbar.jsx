import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../pages/icons/Logo";


const Navbar = () => {
  const handleNav = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
          <Logo className={styles.logo}/>
        <li>
          <button className={styles.button} onClick={() => handleNav("about")}>
            {" "}
            ABOUT{" "}
          </button>
        </li>
        <li>
          <button className={styles.button} onClick={() => handleNav("work")}>
            {" "}
            PROYECTOS{" "}
          </button>
        </li>
        <li>
          <button
            className={styles.button2}
            onClick={() => handleNav("contact")}
          >
            {" "}
            CONTACT ME{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
