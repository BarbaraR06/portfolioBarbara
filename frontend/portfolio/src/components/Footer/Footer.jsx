import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import IconLinkedin from "./IconLinkedin";
import IconBehanceSquare from "./IconBehanceSquare";
import IconGithub from "./Github";
import Logo from "../../pages/icons/Logo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.dividerFooter}>
        <a href="#home">
          <Logo className={styles.logoFooter} />
        <span className={styles.dividerFoot}></span>
        </a>
        <div className={styles.iconosFooter}>
          <a target="_blank" href="https://www.behance.net/barbararuiz06">
            <IconBehanceSquare width="60px" height="60px" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/barbararuiz6/">
            <IconLinkedin width="60px" height="60px" />
          </a>
          <a target="_blank" href="https://github.com/BarbaraR06">
            <IconGithub width="60px" height="60px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
