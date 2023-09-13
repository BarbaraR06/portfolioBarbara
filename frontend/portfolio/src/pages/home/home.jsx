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
import pfp from "../../assets/pfp.jpg";


const Home = () => {
 
  return (
    <div className={styles.inicio} >

      <section className={styles.home} id="home">
      <Navbar/>
        <div className={styles.containerHome}>
          <div className={styles.homePhoto}>
            <h2 className={styles.title}>
              Donde el <span style={{ color: "#ff6600" }}>diseño</span> se
              encuentra con el{" "}
              <span style={{ color: " #ff6600" }}>desarrollo</span>
            </h2>
            <img src={pfp} alt="" className={styles.imgPfp} />
          </div>
          <button className={styles.buttonHome}> Mira mis proyectos! </button>
        </div>
      </section>

      <section className={`${styles.about} ${styles.twoColumns}`} id="about">
        <div className={`${styles.colorColumn}`}></div>
        <div className={`${styles.textColumn}`}>
          <h5 className={styles.titleAbout}> ABOUT </h5>
          <h3 className={styles.textAbout}>
            {" "}
            <br />
            ¡Hola! Mi nombre es Barbara, soy de Santa Fe, Argentina. Soy
            Desarrolladora Full Stack y también soy estudiante de Diseño
            Industrial en la Universidad Nacional del Litoral.
            <br />
            <br />
            Mi objetivo principal es seguir creciendo profesionalmente en el
            ámbito laboral. Busco constantemente oportunidades desafiantes que
            me permitan adquirir experiencia y ampliar mis conocimientos tanto
            en el desarrollo como en el diseño. Estoy emocionada de ser parte de
            proyectos que fomenten mi crecimiento tanto personal como
            profesional.
          </h3>
          <div className={styles.icons}>
            <IconBxlJavascript width="48px" height="48px" />
            <IconBxlReact width="48px" height="48px" />
            <IconCss3 width="48px" height="48px" />
            <Tailwind width="48px" height="48px" />
            <IconHtml5 width="48px" height="48px" />
            <Figma width="48px" height="48px" />
            <Postgres width="48px" height="48px" />
            <Mongo width="48px" height="48px" />
            <IconNodeJs width="48px" height="48px" />
          </div>
        </div>
      </section>

      <section className={styles.About2}>
        <div className={styles.containerAbout2}>
          <div className={styles.textAbout2}>
            <h3 className={styles.titleAbout2}> HABILIDADES TÉCNICAS </h3>
            <p className={styles.parrafoAbout2}>
              {" "}
              Cuento con un conjunto diverso de habilidades técnicas. Desde
              HTML, CSS y JS hasta React, NextJs, Redux y Express, mi
              experiencia me permite abordar proyectos tanto en el frontend como
              en el backend. Además, estoy familiarizada con bases de datos como
              MongoDB, Mongoose, PostgreSQL y Sequelize, lo que me hace{" "}
              <strong>
                {" "}
                versátil y capaz de enfrentar una variedad de desafíos.
              </strong>{" "}
            </p>
          </div>
          <div className={styles.textAbout2}>
            <h3 className={styles.titleAbout2}>
              {" "}
              ENFOQUE EN DISEÑO Y DESARROLLO{" "}
            </h3>
            <p className={styles.parrafoAbout2}>
              {" "}
              Como estudiante de Diseño Industrial poseo una perspectiva única
              que combina creatividad y funcionalidad. Puedo utilizar mis
              habilidades de diseño UX/UI con herramientas como Figma para crear
              productos que sean estéticamente atractivos y fáciles de usar.
              Esto es esencial para garantizar que los proyectos no solo
              funcionen bien, sino que también brinden una
              <strong> experiencia excepcional</strong> al usuario.
            </p>
          </div>
          <div className={styles.textAbout2}>
            <h3 className={styles.titleAbout2}> APRENDIZAJE CONTINUO </h3>
            <p className={styles.parrafoAbout2}>
              {" "}
              Mi principal objetivo es seguir creciendo profesionalmente.
              Siempre estoy en busca de oportunidades desafiantes que me
              permitan adquirir experiencia y{" "}
              <strong>
                ampliar mis conocimientos en el desarrollo y el diseño
              </strong>
              . Mi entusiasmo por el crecimiento personal y profesional me
              impulsa a estar al día con las últimas tendencias y tecnologías,
              lo que me permite aportar un alto valor a cualquier equipo y
              proyecto en el que trabaje.
            </p>
          </div>
        </div>
      </section>

      <section id="work">
        <div className={styles.workColumn}>
          <div className={styles.textWork}>
            <h5 className={styles.titleWork}> PROYECTOS </h5>
            <h4 className={styles.parrafoWork}>
              {" "}
              Mira mis proyectos realizados{" "}
            </h4>
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
                <img className={styles.cars} src={dogs} alt="dogs" />
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
          <h5 className={styles.titleContact}> CONTACTO </h5>
          <h3 className={styles.textContact}> Enviame un mensaje! </h3>
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
