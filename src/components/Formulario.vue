<script setup>
// Por ahora no necesitas lógica de composición especial,
// a menos que quieras manejar estados o props.
</script>

<template>
  <section id="quienes-somos" class="about-section">
    <div class="about-container">
      <h2 class="about-title">Conectados por el conocimiento</h2>
      <p class="about-description">
        La bioinformática es un campo lleno de mentes curiosas y talentosas, y queremos formar una red donde el
        conocimiento fluya y las ideas se conviertan en oportunidades. Nos interesa conocer tu experiencia: qué te
        motiva, en qué trabajas, qué herramientas usas y cómo podemos aportar valor a esta comunidad en crecimiento.
      </p>
      <p class="about-description">
        ¡Déjanos tu huella! 👇
      </p>

      <iframe src="https://tally.so/r/n9o601" frameborder="0"
              marginheight="0" marginwidth="0">
        Cargando…
      </iframe>

    </div>
  </section>
</template>

<style scoped>
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
  padding: 10px 10px 5px 10px
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
}

.left-full {
  text-align: left;
  width: 100%;
  max-width: unset;
  margin-left: 0;
}

/* Cards */
.team-cards {
  display: grid;
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

/* Imagen dentro de la tarjeta */
.card-image {
  width: 85%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* Título de la tarjeta */
.card-title {
  font-size: 1.25rem;
  color: var(--color-secondary);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Texto de la tarjeta */
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

iframe {
  width: 70%;
  height: 720px;
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

  iframe {
    width: 100%;
    height: 720px;
  }
}
</style>
