<script setup>
// Si necesitas lógica específica, puedes añadirla aquí
</script>

<template>
  <section id="servicios" class="purpose-section">
    <div class="purpose-container">
      <h2 class="purpose-title">Nuestro Servicios</h2>
      <p class="purpose-description">
        En GenomaTech, nuestro principal servicios es facilitar el acceso a herramientas
        y consultorías en bioinformática y análisis genómico. Creemos en un futuro en el
        que la innovación científica sea accesible para laboratorios, institutos de
        investigación y empresas de todo tipo, impulsando la salud y el conocimiento a
        través de la tecnología.
      </p>

      <div class="purpose-content">
        <p>
          Nos enfocamos en:
        </p>
        <ul>
          <li>Brindar soluciones de software personalizadas para análisis genómicos.</li>
          <li>Ofrecer consultoría experta con equipos multidisciplinarios.</li>
          <li>Formar alianzas estratégicas que promuevan el avance científico.</li>
          <li>Garantizar la calidad, integridad y seguridad de los datos.</li>
        </ul>
        <p>
          Contribuimos a que tus proyectos genómicos alcancen sus metas de
          forma rápida, confiable y rentable, promoviendo un impacto positivo
          en la sociedad.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ejemplo de estilos, manteniendo coherencia con tus otras secciones */
:root {
  --color-primary: #0066CC;
  --color-bg-light: #f9f9f9;
  --color-text: #333;
  --color-shadow: rgba(0, 0, 0, 0.1);
}

.purpose-section {
  padding: 3rem 1.5rem;
  background-color: var(--color-bg-light);
}

.purpose-container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.purpose-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  position: relative;
}

.purpose-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  background-color: var(--color-primary);
  margin: 0.5rem auto 0 auto;
  border-radius: 2px;
}

.purpose-description {
  max-width: 800px;
  margin: 1rem auto;
  line-height: 1.6;
  color: var(--color-text);
}

.purpose-content {
  text-align: left;
  max-width: 800px;
  margin: 2rem auto 0;
  line-height: 1.6;
}

.purpose-content ul {
  list-style: inside;
  margin-left: 1rem;
  margin-bottom: 1rem;
}

.purpose-content li {
  margin: 0.5rem 0;
  font-weight: 500;
}
</style>
