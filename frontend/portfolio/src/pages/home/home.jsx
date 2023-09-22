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
import pfp from "../../assets/pfp.jpg";
import IconGit from "../icons/IconGit";

const Home = () => {
  return (
    <div className={styles.inicio}>
      <Navbar />
      <section className={styles.home} id="home">
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
        </div>
        <a href="#work">
          <button className={styles.buttonHome}> ¡MIRA MIS PROYECTOS! </button>
        </a>
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
          <div className="collapse bg-base-200 mb-10 ">
            <input
              type="radio"
              checked="checked"
              name="my-accordion-1"
              className="peer"
            />
            <div className="collapse-title justify-items-center text-center collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              HABILIDADES TÉCNICAS
            </div>
            <div className="overflow-hidden collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>
                Cuento con un conjunto diverso de habilidades técnicas. Desde
                HTML, CSS y JS hasta React, NextJs, Redux y Express, mi
                experiencia me permite abordar proyectos tanto en el frontend
                como en el backend. Además, estoy familiarizada con bases de
                datos como MongoDB, Mongoose, PostgreSQL y Sequelize, lo que me
                hace
                <strong>
                  versátil y capaz de enfrentar una variedad de desafíos.
                </strong>
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200 mb-10">
            <input
              type="radio"
              checked="checked"
              name="my-accordion-1"
              className="peer"
            />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              ENFOQUE EN DISEÑO Y DESARROLLO
            </div>
            <div className="overflow-hidden collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>
                Como estudiante de Diseño Industrial poseo una perspectiva única
                que combina creatividad y funcionalidad. Puedo utilizar mis
                habilidades de diseño UX/UI con herramientas como Figma para
                crear productos que sean estéticamente atractivos y fáciles de
                usar. Esto es esencial para garantizar que los proyectos no solo
                funcionen bien, sino que también brinden una
                <strong> experiencia excepcional</strong> al usuario.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input
              type="radio"
              checked="checked"
              name="my-accordion-1"
              className="peer"
            />
            <div className="collapse-title text-center collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              APRENDIZAJE CONTINUO
            </div>
            <div className="overflow-hidden collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>
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
        <div className={`${styles.colorColumn}`}></div>
      </section>

      <section id="work">
        <div className={styles.workColumn}>
          <div className={styles.colorColumn2}> </div>
          <div className="carousel w-full ">
            <h5 className={styles.titleWork}> PROYECTOS </h5>
            <h4 className={styles.parrafoWork}>
              Mira mis proyectos realizados
            </h4>
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
          <div className={styles.colorColumn2}> </div>
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
          <button
            type="button"
            class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-download mr-2 -ml-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1BYLIQkAfxK_Cl3cr7dLMzsLMl50PgYze/view?usp=sharing"
              download="https://drive.google.com/file/d/1BYLIQkAfxK_Cl3cr7dLMzsLMl50PgYze/view?usp=sharing"
            >
              {" "}
              Descargar CV
            </a>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
