<script setup>
// Script opcional (vacío por ahora)
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">GENOMATECH</h1>
      <p class="hero-subtitle">
        "Conectados por el conocimiento, transformando la bioinformática"
      </p>
    </div>
  </section>

  <!-- Sección: Impulsando la bioinformática -->
  <section class="section-card">
    <div class="card-content">
      <h2>Innovación en Bioinformática y Análisis Genómico</h2>
      <p>
        Servicios de consultoría y herramientas Python para análisis genómico en GenomaTech: descubre la innovación
        bioinformática
      </p>
    </div>
  </section>

  <!-- Sección: Impulsando la bioinformática -->
  <section class="section-card">
    <div class="card-content">
      <h2>Impulsando la bioinformática</h2>
      <p>
        Innovación en biotecnología y bioinformática.
      </p>
    </div>
  </section>

  <!-- Sección: Análisis automatizado -->
  <section class="section-card reverse">
    <div class="card-content">
      <h2>Análisis automatizado</h2>
      <p>
        En GenomaTech, ofrecemos una herramienta basada en Python que automatiza
        el análisis de datos genómicos, desde FASTQ hasta informes completos y
        accesibles.
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

  <!-- Sección: Consultoría especializada -->
  <section class="section-card">
    <div class="card-image-wrapper">
      <img
          alt=""
          class="card-image"
          src="../assets/img/consultoria.webp"
      />
    </div>
    <div class="card-content">
      <h2>Consultoría especializada</h2>
      <p>
        Nuestro equipo de expertos en biotecnología y bioinformática ofrece
        servicios de consultoría para optimizar tus proyectos y procesos
        genómicos.
      </p>
    </div>
  </section>

  <!-- Sección: Informes comprensibles -->
  <section class="section-card reverse">
    <div class="card-content">
      <h2>Informes comprensibles</h2>
      <p>
        Proporcionamos informes detallados y comprensibles que facilitan la
        gestión y comprensión de los datos genómicos.
      </p>
    </div>
    <div class="card-image-wrapper">
      <img
          alt=""
          class="card-image"
          src="../assets/img/informesCom.webp"
      />
    </div>
  </section>

  <!-- Sección: Herramienta única -->
  <section class="section-card">
    <div class="card-image-wrapper">
      <img
          alt=""
          class="card-image"
          src="../assets/img/herrUn.webp"
      />
    </div>
    <div class="card-content">
      <h2>Herramienta única</h2>
      <p>
        Nuestra herramienta basada en Python es única en el mercado, ofreciendo
        un enfoque integral y automatizado para el análisis de datos genómicos,
        superando a las alternativas existentes.
      </p>
    </div>
  </section>

  <!-- Carrusel de testimonios -->
  <section class="testimonials-section">
    <h2 class="testimonial-title">Testimonios</h2>

    <!-- Contenedor del carrusel -->
    <div class="carousel-container">
      <!-- Radio buttons para controlar cada slide -->
      <input type="radio" name="slider" id="slide1" checked/>
      <input type="radio" name="slider" id="slide2"/>

      <!-- Contenedor que "mueve" los slides -->
      <div class="testimonios">
        <div class="testimonio">
          <p>
            "GenomaTech ha sido un gran aliado en nuestros proyectos de
            investigación, ofreciendo soluciones innovadoras y eficientes
            para el análisis de datos genómicos."
          </p>
          <p>- Dr. Juan Pérez, Investigador Principal</p>
        </div>

        <div class="testimonio">
          <p>
            "La herramienta de GenomaTech ha revolucionado la forma en
            que analizamos nuestros datos genómicos, permitiéndonos ahorrar
            tiempo y recursos."
          </p>
          <p>- Dra. María López, Investigadora Asociada</p>
        </div>
      </div>

      <!-- Flechas de navegación -->
      <label for="slide1" class="arrow arrow-prev">&#10094;</label>
      <label for="slide2" class="arrow arrow-next">&#10095;</label>
    </div>
  </section>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px var(--color-shadow);
  max-width: 1100px;
  background: url("../assets/img/homePageFooter.png") no-repeat center center/cover;
}

.hero-content {
  flex: 1 1 400px;
  text-align: left;
  margin: 1rem;
}

.hero-title {
  font-size: 5rem;
  margin-bottom: 1rem;
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
  box-shadow: 0 2px 8px var(--color-shadow);
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
  background: color-mix(in srgb, var(--color-bg-light) 85%, transparent);
  margin: 2rem auto;
  padding: 2rem 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px var(--color-shadow);
  max-width: 1100px;
  color: var(--color-bg-dark)
}

.section-card.reverse {
  flex-direction: row-reverse;
}

.card-content {
  flex: 1 1 400px;
  padding: 1rem;
}

.card-content h2 {
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
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
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 8px var(--color-shadow);
}

.card-image:hover {
  box-shadow: 0 4px 12px var(--color-shadow-hover);
  transform: scale(1.02);
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
  box-shadow: 0 2px 8px var(--color-shadow);
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
