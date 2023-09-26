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
        <Logo className={styles.logo} />
        <li>
          <button className={styles.button} onClick={() => handleNav("about")}>
            {" "}
            ABOUT{" "}
          </button>
        </li>
        <li>
          <button
            className={styles.button}
            onClick={() => {
              window.location.hash = "#carousel";
            }}
          >
            {" "}
            PROYECTOS{" "}
          </button>
        </li>
        <li>
          <button
            className={styles.button2}
            onClick={() => (window.location.hash = "#contact")}
          >
            {" "}
            CONTACT ME{" "}
          </button>
        </li>
      </ul>
      <hr class="-mt-0.5 my-12 h-0.5 border-t-0 bg-neutral-300 opacity-200 dark:opacity-50" />
    </div>
  );
};

export default Navbar;
