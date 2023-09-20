import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import styles from "../home/home.module.css";
import dogs from "../../assets/dogs.png";
import cars from "../../assets/cars.png";
import event from "../../assets/event.png";
import cook from "../../assets/cook.png";
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
            <button className={styles.buttonHome}>
              {" "}
              ¡MIRA MIS PROYECTOS!{" "}
            </button>
          </a>
        </div>
      </section>

      <section className={styles.twoColumns} id="about">
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
          <div class="hs-accordion-group ">
            <div
              class="hs-accordion active"
              id="hs-basic-with-arrow-heading-one"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 text-2xl dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-arrow-collapse-one"
              >
                <svg
                  class="hs-accordion-active:hidden hs-accordion-active:text-blue-600  hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                HABILIDADES TÉCNICAS
              </button>
              <div
                id="hs-basic-with-arrow-collapse-one"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-arrow-heading-one"
              >
                <p class="text-gray-800 dark:text-gray-200">
                  Cuento con un conjunto diverso de habilidades técnicas. Desde
                  HTML, CSS y JS hasta React, NextJs, Redux y Express, mi
                  experiencia me permite abordar proyectos tanto en el frontend
                  como en el backend. Además, estoy familiarizada con bases de
                  datos como MongoDB, Mongoose, PostgreSQL y Sequelize, lo que
                  me hace
                  <strong>
                    versátil y capaz de enfrentar una variedad de desafíos.
                  </strong>
                </p>
              </div>
            </div>
            <div class="hs-accordion" id="hs-basic-with-arrow-heading-two">
              <button
                class="text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-arrow-collapse-two"
              >
                <svg
                  class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                ENFOQUE EN DISEÑO Y DESARROLLO
              </button>
              <div
                id="hs-basic-with-arrow-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-arrow-heading-two"
              >
                <p class="text-gray-800 dark:text-gray-200">
                  Como estudiante de Diseño Industrial poseo una perspectiva
                  única que combina creatividad y funcionalidad. Puedo utilizar
                  mis habilidades de diseño UX/UI con herramientas como Figma
                  para crear productos que sean estéticamente atractivos y
                  fáciles de usar. Esto es esencial para garantizar que los
                  proyectos no solo funcionen bien, sino que también brinden una
                  <strong> experiencia excepcional</strong> al usuario.
                </p>
              </div>
            </div>
            <div class="hs-accordion" id="hs-basic-with-arrow-heading-three">
              <button
                class="text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-arrow-collapse-three"
              >
                <svg
                  class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                APRENDIZAJE CONTINUO
              </button>
              <div
                id="hs-basic-with-arrow-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-arrow-heading-three"
              >
                <p class="text-gray-800 dark:text-gray-200 ">
                  Mi principal objetivo es seguir creciendo profesionalmente.
                  Siempre estoy en busca de oportunidades desafiantes que me
                  permitan adquirir experiencia y{" "}
                  <strong>
                    ampliar mis conocimientos en el desarrollo y el diseño
                  </strong>
                  . Mi entusiasmo por el crecimiento personal y profesional me
                  impulsa a estar al día con las últimas tendencias y
                  tecnologías, lo que me permite aportar un alto valor a
                  cualquier equipo y proyecto en el que trabaje.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.colorColumn}`}></div>
      </section>

      <section id="work">
        <div className={styles.workColumn}>
          <div className={styles.textWork}>
            <h5 className={styles.titleWork}> PROYECTOS </h5>
            <h4 className={styles.parrafoWork}>
              Mira mis proyectos realizados
            </h4>
          </div>
          <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full ">
              <a href="https://pfcargo.netlify.app" target="_blank">
                <img src={cars} className="w-full items-center" />
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <a href="https://dogs-henry-two.vercel.app" target="_blank">
                <img src={dogs} className="w-full items-center" />
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <a
                href="https://www.behance.net/gallery/152514209/Diseno-de-app-para-busqueda-de-eventos"
                target="_blank"
              >
                <img src={event} className="w-full items-center" />
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <a
                href="https://www.behance.net/gallery/178890921/gourmArt-Recipes-website"
                target="_blank"
              >
                <img src={cook} className="w-full items-center" />
              </a>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
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
          <div className={styles.emailContainer}>
            <a
              className={styles.emailText}
              href="mailto:barbararuiz063@gmail.com"
            >
              <IconMail className={styles.emailIcon} /> barbararuiz063@gmail.com{" "}
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
      </section>
      <Footer />
    </div>
  );
};

export default Home;
