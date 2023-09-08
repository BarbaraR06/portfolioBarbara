import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import styles from "../home/home.module.css";
import dogs from "../../assets/dogs.png";
import cars from "../../assets/cars.png";
import Footer from "../../components/Footer/Footer";
import IconMail from "../icons/IconMail";
import Figma from "../icons/Figma";
import IconBxlJavascript from "../icons/IconBxlJavascript";
import IconBxlReact from "../icons/IconBxlReact";
import IconCss3 from "../icons/IconCss3";
import IconHtml5 from "../icons/IconHtml5";
import Tailwind from "../icons/Tailwind";
import Postgres from "../icons/Postgres";
import Mongo from "../icons/Mongo";
import IconNodeJs from "../icons/IconNodeJs";
import { useEffect, useState } from "react";

const Home = () => {
  const [curtainVisible, setCurtainVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(curtainVisible ? styles.visible : "");
      setCurtainVisible(false);
    }, 1000); 
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div>
      <Navbar />
      {curtainVisible && <div className={styles.blackCurtain}></div>}
      <section className={styles.home} id="home">
        <div className={styles.containerHome}>
        <h2 className={styles.title}>
          {" "}
          Elevating Experiencies: 
          Where design meets development{" "}
        </h2>
        <button className={styles.buttonHome}> See what I've done! </button>
        </div>
      </section>
      <section className={`${styles.about} ${styles.twoColumns}`} id="about">
        <div className={`${styles.colorColumn}`}></div>
        <div className={`${styles.textColumn}`}>
          <h5 className={styles.titleAbout}> ABOUT </h5>
          <h3 className={styles.textAbout}>
            {" "}
            <br />
            Hello! I'm Barbara, and I'm thrilled to introduce myself to all of
            you. I am a full stack developer with an unwavering thirst for
            <strong> innovation and design </strong>. I'm also a student of
            Industrial Design at the UNL in Santa Fe, Argentina.
            <br />
            <br />
            My main goal is to continue scaling in the professional ambit. I'm
            always on the hunt for stimulating challenges that allow me to gain
            experience and broaden my knowledge in both development and design.
            The opportunity to be part of projects that not only foster my
            professional growth but also my personal growth is what drives me to
            give my best.
          </h3>
          <div className={styles.icons}>
          <IconBxlJavascript width="48px" height="48px"/>
          <IconBxlReact width="48px" height="48px"/>
          <IconCss3 width="48px" height="48px"/>
          <Tailwind width="48px" height="48px"/>
          <IconHtml5 width="48px" height="48px"/>
          <Figma width="48px" height="48px"/>
          <Postgres width="48px" height="48px"/>
          <Mongo width="48px" height="48px"/>
          <IconNodeJs width="48px" height="48px"/>
          </div>
        </div>
      </section>
      <section id="work">
        <div className={styles.workColumn}>
          <div className={styles.textWork}>
            <h5 className={styles.titleWork}> WORK </h5>
            <h4 className={styles.parrafoWork}> See what I've done </h4>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.containerCars}>
              <a href="https://pfcargo.netlify.app" target="_blank">
                <img className={styles.cars} src={cars} alt="cars" />
                <div className={styles.middle}>
                  <h3 className={styles.text}> CarGO </h3>
                  <h2 className={styles.textCar}> E-commerce </h2>
                </div>
              </a>
            </div>
            <div className={styles.containerDogs}>
              <a href="https://dogs-henry-two.vercel.app" target="_blank">
                <img className={styles.dogs} src={dogs} alt="dogs" />
                <div className={styles.middleDog}>
                  <h3 className={styles.text}> Dogs </h3>
                  <h2 className={styles.textCar}> App </h2>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.dividerContainer}>
            <span className={styles.divider}></span>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className={styles.contact}>
          <h5 className={styles.titleContact}> CONTACT </h5>
          <h3 className={styles.textContact}> Send me a message! </h3>
          <div className={`${styles.email} ${styles.emailContainer}`}>
            <a
              className={styles.emailText}
              href="mailto:barbararuiz063@gmail.com"
            >
              <IconMail className={styles.emailIcon} /> barbararuiz063@gmail.com{" "}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
