<script setup>
// Por ahora no necesitas lógica de composición especial,
// a menos que quieras manejar estados o props.
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

      <div class="about-cards">
        <!-- Ejemplo de tarjeta 1 -->
        <div class="card">
          <img
              src=""
              alt="Equipo GenomaTech"
              class="card-image"
          />
          <h3 class="card-title">Nuestro Equipo</h3>
          <p class="card-text">
            Un grupo de profesionales apasionados, comprometidos con el avance
            científico y la optimización de procesos en el campo genómico.
          </p>
        </div>

        <!-- Ejemplo de tarjeta 2 -->
        <div class="card">
          <img
              src=""
              alt="Laboratorio GenomaTech"
              class="card-image"
          />
          <h3 class="card-title">Nuestra Experiencia</h3>
          <p class="card-text">
            Más de X años de experiencia en investigación,
            consultoría y desarrollo de herramientas personalizadas para análisis
            genómicos y bioinformáticos.
          </p>
        </div>

        <!-- Ejemplo de tarjeta 3 -->
        <div class="card">
          <img
              src=""
              alt="Infraestructura GenomaTech"
              class="card-image"
          />
          <h3 class="card-title">Nuestra Visión</h3>
          <p class="card-text">
            Impulsar la transformación de la biotecnología y la bioinformática
            a través de soluciones innovadoras y accesibles en todo el mundo.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Paleta de colores en línea con lo usado previamente,
   ajusta estos valores a tu preferencia */
:root {
  --color-primary: #0066CC;
  --color-bg-light: #f9f9f9;
  --color-text: #333;
  --color-shadow: rgba(0, 0, 0, 0.1);
}

.about-section {
  padding: 3rem 1.5rem;
  background-color: var(--color-bg-light);
}

.about-container {
  max-width: 1100px;
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
}

/* Cards */
.about-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
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
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* Título de la tarjeta */
.card-title {
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

/* Texto de la tarjeta */
.card-text {
  color: var(--color-text);
  line-height: 1.5;
}

/* Responsividad */
@media (min-width: 768px) {
  .about-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
