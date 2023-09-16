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
import IconGit from "../icons/IconGit";

const Home = () => {
  return (
    <div className={styles.inicio}>
      <section className={styles.home} id="home">
        <Navbar />
        <div className={styles.containerHome}>
          <div className={styles.homePhoto}>
            <h2 className={styles.title}>
              Donde el{" "}
              <span className={styles.span}>
                diseñ<span style={{ color: "#ff6600" }}>o</span>
              </span>{" "}
              se encuentra con el{" "}
              <span className={styles.span} style={{ color: " #ff6600" }}>
                desarrollo
              </span>
            </h2>
            <img src={pfp} alt="" className={styles.imgPfp} />
          </div>
          <a href="#work">
            <button className={styles.buttonHome}> Mira mis proyectos! </button>
          </a>
        </div>
      </section>

      <section className={`${styles.about} ${styles.twoColumns}`} id="about">
        <div className={`${styles.colorColumn}`}></div>
        <div className={`${styles.textColumn}`}>
          <h5 className={styles.titleAbout}> ABOUT </h5>
          <h3 className={styles.textAbout}>
            {" "}
            <br />
            ¡Hola! Soy Barbara, Desarrolladora Full Stack y estudiante de Diseño
            Industrial en la Universidad Nacional del Litoral.
            <br />
            Soy una persona creativa, autodidacta y colaborativa, con
            experiencia en metodologías ágiles y una pasión por el desarrollo
            web. Disfruto cada paso de mi camino y me encanta ofrecer soluciones
            excepcionales. Estoy emocionada por seguir creciendo
            profesionalmente y explorando nuevas oportunidades que me permitan
            continuar aprendiendo y desarrollándome tanto en el mundo del
            desarrollo como en el diseño.
          </h3>
          <div className={styles.icons}>
            <div>
            <IconBxlJavascript width="60%" height="60%" />
            </div>
            <div>
            <IconBxlReact width="60%" height="60%" />
            </div>
            <div>
            <IconCss3 width="60%" height="60%" />
            </div>
            <div>
            <Tailwind width="60%" height="60%" />
            </div>
            <div>
            <IconHtml5 width="60%" height="60%" />
            </div>
            <div>
            <Figma width="60%" height="60%" />
            </div>
            <div>
            <Postgres width="60%" height="60%" />
            </div>
            <div>
            <Mongo width="60%" height="60%" />
            </div>
            <div>
            <IconNodeJs width="60%" height="60%" />
            </div>
            <div>
            <IconGit width="60%" height="60%" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.containerAbout2}>
          <div className={styles.textAbout2}>
            <h3 className={styles.titleAbout2}> HABILIDADES TÉCNICAS </h3>
            <div className={styles.parrafoAbout}>
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
          </div>
          <div className={styles.textAbout2}>
            <h3 className={styles.titleAbout2}>
              {" "}
              ENFOQUE EN DISEÑO Y DESARROLLO{" "}
            </h3>
            <div  className={styles.parrafoAbout}> 
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
          </div>
          <div className={styles.textAbout2}>
            <h3 className={styles.titleAbout2}> APRENDIZAJE CONTINUO </h3>
            <div  className={styles.parrafoAbout}>
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
        </div>
      </section>

      <section id="work">
        <div className={styles.workColumn}>
          <div className={styles.textWork}>
            <h5 className={styles.titleWork}> PROYECTOS </h5>
            <h4 className={styles.parrafoWork}>
              Mira mis proyectos realizados
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
            <div className={styles.containerCars}>
              <a href="https://dogs-henry-two.vercel.app" target="_blank">
                <img className={styles.cars} src={dogs} alt="dogs" />
                <div className={styles.middle}>
                  <h3 className={styles.text}> Dogs </h3>
                  <h2 className={styles.textCar}> App </h2>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.downloadContainer}>
            <a
              className={styles.download}
              target="_blank"
              href="https://drive.google.com/file/d/1BYLIQkAfxK_Cl3cr7dLMzsLMl50PgYze/view?usp=sharing"
              download="https://drive.google.com/file/d/1BYLIQkAfxK_Cl3cr7dLMzsLMl50PgYze/view?usp=sharing"
            >
              {" "}
              Descargar CV
            </a>
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
          <div className={styles.emailContainer}>
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
