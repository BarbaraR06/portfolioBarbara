import React, { useState , useEffect } from "react";
// import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import axios from "axios";

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
            <li><button className={styles.button} onClick={() => handleNav("home")}> HOME </button></li>
            <li><button className={styles.button} onClick={() => handleNav("work")}> WORK </button></li>
            <li><button className={styles.button} onClick={() => handleNav("about")}> ABOUT </button></li>
            <li><button className={styles.button2} onClick={() => handleNav("contact")}> CONTACT ME! </button></li>
           </ul>
        </div>
    )
}




export default Navbar;