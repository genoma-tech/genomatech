<script setup>
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faLinkedin);
</script>

<template>
  <section id="quienes-somos" class="about-section">
    <div class="about-container">
      <h2 class="about-title">Quiénes Somos</h2>
      <p class="about-description">
        En GenomaTech, somos un equipo multidisciplinario de profesionales enfocados
        en la innovación bioinformática y el análisis genómico. Combinamos la experiencia
        de científicos, desarrolladores de software y expertos en biotecnología para ofrecer
        soluciones integrales y automatizadas a empresas e instituciones de todo el mundo.
      </p>

      <div class="team-cards">

        <div class="card">
          <img
              src="../assets/img/team/celine.jpg"
              alt="Equipo GenomaTech"
              class="card-image"
          />
          <p class="card-text">Project Manager</p>
          <h3 class="card-title">Celine Jin</h3>
          <div class="card-icon">
            <a href="https://www.linkedin.com/in/celinelinnajin/" target="_blank" class="contact-link">
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </a>
          </div>
        </div>

        <div class="card">
          <img
              src="../assets/img/team/ana.jpg"
              alt="Equipo GenomaTech"
              class="card-image"
          />
          <p class="card-text">Bioinformatic</p>
          <h3 class="card-title">Ana Márquez</h3>
          <div class="card-icon">
            <a href="https://www.linkedin.com/in/amarquezbq/" target="_blank" class="contact-link">
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </a>
          </div>
        </div>

        <div class="card">
          <img
              src="../assets/img/team/natalia.jpg"
              alt="Equipo GenomaTech"
              class="card-image"
          />
          <p class="card-text">Bioinformatic</p>
          <h3 class="card-title">Natalia Toledano</h3>
          <div class="card-icon">
            <a href="https://www.linkedin.com/in/natalia-toledano-albarr%C3%A1n/" target="_blank" class="contact-link">
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </a>
          </div>
        </div>

        <div class="card">
          <img
              src="../assets/img/team/andrea.jpg"
              alt="Equipo GenomaTech"
              class="card-image"
          />
          <p class="card-text">Bioinformatic</p>
          <h3 class="card-title">Andrea García</h3>
          <div class="card-icon">
            <a href="https://www.linkedin.com/in/andrea-garc%C3%ADa-alcaide-95b9a8213/" target="_blank" class="contact-link">
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </a>
          </div>
        </div>

        <div class="card">
          <img
              src="../assets/img/team/carlos.jpg"
              alt="Equipo GenomaTech"
              class="card-image"
          />
          <p class="card-text">Developer</p>
          <h3 class="card-title">Carlos Sales</h3>
          <div class="card-icon">
            <a href="https://www.linkedin.com/in/carlos-sales-perales/" target="_blank" class="contact-link">
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </a>
          </div>
        </div>

        <div class="card">
          <img
              src="../assets/img/team/luis.jpg"
              alt="Equipo GenomaTech"
              class="card-image"
          />
          <p class="card-text">Data scientist</p>
          <h3 class="card-title">Luis Palomero</h3>
          <div class="card-icon">
            <a href="https://www.linkedin.com/in/luispalomero/" target="_blank" class="contact-link">
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </a>
          </div>
        </div>

      </div>

      <h2 class="about-title h2-icon">
        <img class="li-icon" src="../assets/img/valores.gif"/>
        Valores fundamentales
      </h2>
      <p class="about-description left-full">
        En GenomaTech, los valores no son solo principios, sino la base que impulsa cada decisión, cada acción y cada
        innovación. Nos guiamos por los siguientes pilares:
      </p>
      <div class="valores-container info-container">
        <ul>
          <li>
            <p><b>Excelencia operativa:</b> Aplicamos las mejores prácticas y mejoramos continuamente nuestros procesos
            </p>
          </li>
          <li>
            <p><b>Sinergia colaborativa:</b> Fomentamos un entorno dinámico donde la diversidad potencia la eficiencia
            </p>
          </li>
          <li>
            <p><b>Cultura de respeto:</b> Valoramos la inclusión y el pensamiento crítico como motores de innovación</p>
          </li>
          <li>
            <p><b>Enfoque proactivo:</b> Nos anticipamos a los desafíos y actuamos con agilidad en un mundo en constante
              cambio</p>
          </li>
        </ul>
      </div>

      <h2 class="about-title h2-icon">
        <img class="li-icon" src="../assets/img/jefe.gif"/>
        Compromisos de marca
      </h2>
      <p class="about-description left-full">
        Nos define más que lo que hacemos: cómo lo hacemos. Nuestra marca se fundamenta en compromisos sólidos que se
        reflejan en los siguientes pilares:
      </p>
      <div class="marca-container info-container">
        <ul>
          <li>
            <p><b>Responsabilidad y cumplimiento:</b> Transparencia, rigor y profesionalismo en cada entrega</p>
          </li>
          <li>
            <p><b>Optimización e innovación continua:</b> Evolucionamos constantemente para mantenernos a la vanguardia
            </p>
          </li>
          <li>
            <p><b>Comunicación estratégica:</b> Fomentamos el diálogo claro y alineado con nuestros objetivos</p>
          </li>
          <li>
            <p><b>Desarrollo del talento:</b> Impulsamos el crecimiento y liderazgo de nuestro equipo</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ajusta el tamaño base de fuente con clamp para que sea flexible */
#quienes-somos {
  font-size: clamp(10px, 2vw, 18px) !important;
}

.about-section {
  padding: 3rem 1.5rem;
  background-color: var(--color-bg-light);
}

.about-container {
  max-width: 1225px;
  margin: 0 auto;
  text-align: center;
}

.about-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  position: relative;
}

.about-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  background-color: var(--color-primary);
  margin: 0.5rem auto 0 auto;
  border-radius: 2px;
}

.about-description {
  max-width: 800px;
  margin: 1rem auto 2rem auto;
  line-height: 1.6;
  color: var(--color-text);
  text-align: justify;
}

.left-full {
  text-align: left;
  width: 100%;
  max-width: unset;
  margin-left: 0;
}

/* Contenedores de info (valores y marca) */
.info-container {
  margin: 1rem auto 2rem auto;
  line-height: 1.6;
  color: var(--color-text);
}

.info-container b {
  font-weight: bold;
  padding-bottom: 15px;
  color: #28137a;
}

.info-container ul {
  display: flex;
  flex-direction: column;
  text-align: justify;
  column-gap: 10px;
  padding: 0;
}

.info-container li {
  color: black;
  padding: 10px 10px 5px 10px;
}

/* Cards del equipo */
.team-cards {
  display: grid;
  /* Por defecto, 1 columna (ideal para móvil). */
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Tarjeta individual */
.card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--color-shadow);
  padding: 2rem 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 85%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  color: var(--color-secondary);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  color: var(--color-text);
  line-height: 1.5;
}

.h2-icon {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.li-icon {
  height: 65px;
}

::v-deep(.card-icon svg path) {
  fill: var(--color-primary);
}

/* Media Query para pantallas medianas en adelante */
@media (min-width: 768px) {
  .team-cards {
    /* A partir de 768px, 3 columnas */
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Media Query para pantallas pequeñas (opcional, si deseas más cambios específicos) */
@media (max-width: 480px) {
  .about-section {
    padding: 2rem 1rem;
  }

  .about-title {
    font-size: 1.5rem;
  }

  .team-cards {
    /* A partir de 768px, 3 columnas */
    grid-template-columns: repeat(2, 1fr);
  }

  .li-icon {
    height: 50px;
  }

  li {
    list-style-type: none;
    text-align: center !important;
  }

  .card {
    padding: 1.5rem 1rem;
  }

  #quienes-somos {
    font-size: clamp(14px, 4vw, 22px) !important;
  }

  p {
    text-align: center !important;
  }
}
</style>
