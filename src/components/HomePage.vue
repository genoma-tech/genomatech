<script setup>
import {onMounted} from 'vue'

onMounted(() => {
  // Selecciona todos los elementos con clase "section-card hidden-up"
  const sections = document.querySelectorAll('.section-card.hidden-up')

  // Crea un IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-down')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.35
  })

  // Observa cada sección
  sections.forEach((section) => {
    observer.observe(section)
  })
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-title-container">
        <h1 class="hero-title">GENOMATECH</h1>
        <img
            alt=""
            class="hero-logo"
            src="../assets/img/dna.svg"
        />
      </div>
      <p class="hero-subtitle">
        Facilitamos el análisis de datos ómicos para su interpretación científica y clínica
      </p>
    </div>
  </section>

  <!-- Sección: Impulsando la bioinformática -->
  <section class="section-card pvalor">
    <div class="card-content pvalor">
      <h2>¿Cómo pensamos?</h2>
      <p>
        Cada día se generan enormes volúmenes de datos ómicos con el potencial de transformar la investigación. Sin
        embargo, su análisis requiere herramientas especializadas y conocimiento avanzado, lo que supone un desafío para
        muchos equipos.
      </p>
      <p>
        En GenomaTech, convertimos datos en información procesable, ofreciendo soporte en bioinformática a equipos sin
        unidad especializada, grupos saturados y laboratorios que
        buscan nuevas alternativas.
      </p>
      <ul>
        <li>
          <img class="li-icon" src="../assets/img/compartir.gif"/>
          <span>Identificar patrones biológicos</span>
        </li>
        <li>
          <img class="li-icon" src="../assets/img/ocurrencia.gif"/>
          <span>Validar hipótesis con precisión</span>
        </li>
        <li>
          <img class="li-icon" src="../assets/img/latido.gif"/>
          <span>Acelerar la innovación biomédica</span>
        </li>
      </ul>
      <h3>Transformamos datos en conocimiento para impulsar la ciencia</h3>
    </div>
  </section>

  <!-- Sección: Impulsando la bioinformática -->
  <section class="section-card hidden-up">
    <div class="card-content">
      <h2>Análisis ómico</h2>
      <p>
        Aplicamos herramientas bioinformáticas de vanguardia para procesar y analizar datos genómicos, transcriptómicos,
        proteómicos y metagenómicos.
      </p>
      <p>
        Nuestro enfoque combina precisión y eficiencia, permitiendo a investigadores y empresas extraer información
        clave para sus proyectos sin necesidad de invertir en infraestructura propia.
      </p>
    </div>
    <div class="card-image-wrapper">
      <img
          alt=""
          class="card-image"
          src="../assets/img/analisisAuto.webp"
      />
    </div>
  </section>

  <!-- Sección: Impulsando la bioinformática -->
  <section class="section-card reverse hidden-up">
    <div class="card-content">
      <h2>Accesibilidad y optimización</h2>
      <p>
        Eliminamos las barreras técnicas y económicas del análisis bioinformático, ofreciendo soluciones eficientes sin
        la necesidad de grandes inversiones en infraestructura o personal especializado.
      </p>
      <p>
        Con nuestro enfoque,
        democratizamos el acceso a tecnologías avanzadas, acelerando la toma de decisiones y potenciando la innovación.
      </p>
    </div>
    <div class="card-image-wrapper">
      <img
          alt=""
          class="card-image"
          src="../assets/img/analisisAuto.webp"
      />
    </div>
  </section>

  <!-- Sección: Análisis automatizado -->
  <section class="section-card hidden-up">
    <div class="card-content">
      <h2>Asesoramiento personalizado</h2>
      <p>
        Nos adaptamos a las necesidades específicas de cada cliente, brindando un servicio colaborativo y accesible.
      </p>
      <p>
        Acompañamos a empresas y grupos de investigación en cada etapa del análisis, asegurando que los resultados sean
        comprensibles y aplicables a sus objetivos científicos o estratégicos.
      </p>
    </div>
    <div class="card-image-wrapper">
      <img
          alt=""
          class="card-image"
          src="../assets/img/analisisAuto.webp"
      />
    </div>
  </section>

  <!--  &lt;!&ndash; Carrusel de testimonios &ndash;&gt;-->
  <!--  <section class="testimonials-section">-->
  <!--    <h2 class="testimonial-title">Testimonios</h2>-->

  <!--    &lt;!&ndash; Contenedor del carrusel &ndash;&gt;-->
  <!--    <div class="carousel-container">-->
  <!--      &lt;!&ndash; Radio buttons para controlar cada slide &ndash;&gt;-->
  <!--      <input type="radio" name="slider" id="slide1" checked/>-->
  <!--      <input type="radio" name="slider" id="slide2"/>-->

  <!--      &lt;!&ndash; Contenedor que "mueve" los slides &ndash;&gt;-->
  <!--      <div class="testimonios">-->
  <!--        <div class="testimonio">-->
  <!--          <p>-->
  <!--            "GenomaTech ha sido un gran aliado en nuestros proyectos de-->
  <!--            investigación, ofreciendo soluciones innovadoras y eficientes-->
  <!--            para el análisis de datos genómicos."-->
  <!--          </p>-->
  <!--          <p>- Dr. Juan Pérez, Investigador Principal</p>-->
  <!--        </div>-->

  <!--        <div class="testimonio">-->
  <!--          <p>-->
  <!--            "La herramienta de GenomaTech ha revolucionado la forma en-->
  <!--            que analizamos nuestros datos genómicos, permitiéndonos ahorrar-->
  <!--            tiempo y recursos."-->
  <!--          </p>-->
  <!--          <p>- Dra. María López, Investigadora Asociada</p>-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      &lt;!&ndash; Flechas de navegación &ndash;&gt;-->
  <!--      <label for="slide1" class="arrow arrow-prev">&#10094;</label>-->
  <!--      <label for="slide2" class="arrow arrow-next">&#10095;</label>-->
  <!--    </div>-->
  <!--  </section>-->
</template>

<style scoped>
/*
===========================================================================
                            Tipografía general
   Puedes enlazar Google Fonts en tu index.html o usar font-face.
===========================================================================
*/
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-text);
  background-color: #fff;
}

/* Títulos y párrafos base */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: 700;
}

p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

/*
===========================================================================
                            Sección Hero
===========================================================================
*/
.hero {
  align-items: center;
  margin: 2rem 17rem;
  padding: 2rem 1rem;
  border-radius: 12px;
  max-width: 900px;
  height: calc(100vh - 60px);
  color: rgba(255, 255, 255, 0.9);
  cursor: default;
}

.hero-content {
  flex: 1 1 400px;
  text-align: left;
  margin: 1rem;
}

.hero-title-container {
  display: flex;
  align-items: flex-end
}

.hero-title-container img {
  height: 150px;
  margin-left: 70px;
  transform: rotate(90deg);
}

.hero-title {
  position: relative;
  font-size: 5rem;
  width: 36rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-quote {
  font-style: italic;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.primary-button {
  background-color: var(--color-white);
  color: var(--color-primary);
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.primary-button:hover {
  background-color: #eee;
}

.hero-image-wrapper {
  flex: 1 1 300px;
  max-width: 400px;
  text-align: center;
  margin: 1rem;
}

.hero-image {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 16px;
}

/*
===========================================================================
                         Tarjetas / Secciones
===========================================================================
*/
.section-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 5rem auto;
  max-width: 1200px;
  color: #181818
}

.section-card.reverse {
  flex-direction: row-reverse;
}

.section-card.pvalor{
  //background: white;
}

.card-content {
  flex: 1 1 400px;
  padding: 1rem;
  font-size: clamp(16px, 5vw, 22px);
}

.card-content h2 {
  margin-bottom: 1.25rem;
  font-size: 2.5rem;
  color: var(--color-primary);
}

.card-content.pvalor h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  background-color: var(--color-primary);
  margin: 0.5rem auto 0 auto;
  border-radius: 2px;
}

.card-content h3 {
  color: #181818;
  font-weight: 100;
}

.card-content.pvalor h2, h3 {
  text-align: center;
}

.card-content.pvalor p {
  text-align: justify;
}


.card-content.pvalor ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
}

.card-content.pvalor ul li {
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 24%;
  text-align: center;
  background: #c6a9ffc9;
  color: #28137a;
  font-weight: bold;
  height: 125px;
  margin: 2rem auto;
  padding: 15px;
  border-radius: 8px;
}

/* Definimos la animación */
@keyframes bounceHover {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.card-content.pvalor ul li:hover {
  box-shadow: 0px 0px 10px 4px rgba(51, 204, 204, 0.5);
  animation: bounceHover 0.5s ease-in-out infinite;
}

.card-content.pvalor ul li .li-icon {
  width: 50px;
  height: 50px;
}


.card-image-wrapper {
  flex: 1 1 400px;
  text-align: center;
  padding: 1rem;
}

.card-image {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--color-shadow);
}

.card-image:hover {
  transform: scale(1.02);
}

.hidden-up {
  opacity: 0;
  transform: translateY(-100px);
}

.slide-down {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

p {
  margin-top: 35px;
  text-align: justify;
}

/*
===========================================================================
                          Sección Testimonios
===========================================================================
*/
.testimonials-section {
  max-width: 1100px;
  margin: 0 auto 3rem auto;
  padding: 2rem 1rem;
  text-align: center;
}

.testimonial-title {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  position: relative;
}

.testimonial-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background-color: var(--color-primary);
  margin: 0.5rem auto 0 auto;
  border-radius: 2px;
}

/* Carrusel */
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
}

/* Ocultar los radio buttons del carrusel */
.carousel-container input[type="radio"] {
  display: none;
}

.testimonios {
  display: flex;
  width: 200%;
  transition: transform 0.5s ease-in-out;
}

/* Cada testimonio ocupa la mitad del ancho */
.testimonio {
  width: 50%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: var(--color-bg-light);
  border-radius: 12px;
  margin: 0 1rem;
}

.testimonio p {
  margin: 1rem 0;
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-text);
}

.testimonio p:last-child {
  color: #555;
  text-align: right;
}

/* Flechas de navegación */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: var(--color-white);
  padding: 0.5rem 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
  transition: background-color 0.3s ease;
}

/* Flecha siguiente (derecha) */
.arrow-next {
  right: 1rem;
}

/* Flecha anterior (izquierda) */
.arrow-prev {
  left: 1rem;
}

/* Hover en flechas */
.arrow:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

/* Slide 1 activado => contenedor sin translateX (0) */
#slide1:checked ~ .testimonios {
  transform: translateX(0);
}

/* Slide 1 activado => oculta flecha "anterior" */
#slide1:checked ~ .arrow-prev {
  display: none;
}

/* Slide 2 activado => desplaza -50% (la mitad de 200%) */
#slide2:checked ~ .testimonios {
  transform: translateX(-50%);
}

/* Slide 2 activado => oculta flecha "siguiente" */
#slide2:checked ~ .arrow-next {
  display: none;
}

@media (max-width: 768px) {
  /* Ajustes responsivos */
  .section-card {
    flex-direction: column;
  }

  .section-card.reverse {
    flex-direction: column;
  }

  .card-image, .hero-image {
    max-width: 100%;
  }

  .testimonio {
    margin: 1rem 0;
  }

  .testimonios {
    width: 200%;
  }
}
</style>
