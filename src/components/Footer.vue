<script setup>
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebook, faXTwitter, faYoutube, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faXTwitter, faYoutube, faLinkedin, faInstagram, faEnvelope);
</script>

<template>
  <footer class="footer">
    <div class="container">
      <!-- Logo -->
      <div class="logo-container">
        <img
            alt="Genomatech logo"
            class="logo"
            src="../assets/img/genT-L.svg"
            width="200"
            height="auto"
        />

      </div>

      <div class="sections">
        <!-- Síguenos -->
        <div class="section">
          <h2>Síguenos</h2>
          <ul>
            <li>
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
              <a href="https://www.linkedin.com/company/genomatech" target="_blank" class="contact-link">
                GenomaTech
              </a>
            </li>
          </ul>
        </div>

        <!-- Contáctanos -->
        <div class="section">
          <h2>Contáctanos</h2>
          <ul>
            <li>
              <font-awesome-icon :icon="['fa', 'envelope']"/>
              <a href="mailto:info@genomatech.es">
                info@genomatech.es
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Enlaces legales -->
    <div class="legal">
      <ul>
        <li>
          <p>Copyright &copy; 2025 - Genomatech S.L.</p>
        </li>
        <li>
          <router-link to="/politica">Política de privacidad</router-link>
        </li>
        <!--        <li><a href="#">Aviso legal</a></li>-->
        <!--        <li><a href="#">Política de cookies</a></li>-->
        <!--        <li><a href="#">Condiciones de compra</a></li>-->
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #181818;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  align-items: center;
}

.section {
  margin: 10px;
}

.section h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.section ul {
  list-style: none;
  padding: 0;
}

.section ul li {
  margin: 5px 0;
}

.section ul li a {
  color: white;
  text-decoration: none;
}

.section ul li a:hover {
  text-decoration: underline;
}

.social-media {
  margin-top: 15px;
}

.social-media a {
  margin: 0 10px;
  font-size: 1.2rem;
  color: white;
  align-items: center;
  display: flex;
}

.social-media svg {
  height: 2rem !important;
  padding: 10px;
}

.legal {
  margin-top: 15px;
  font-size: 0.9rem;
}

.legal ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.legal ul li {
  margin: 5px 10px;
}

.legal ul li a {
  color: white;
  text-decoration: none;
}

.legal ul li a:hover {
  text-decoration: underline;
}

.container .sections {
  display: contents;
}
/*
===========================================================================
                          Media Queries para móvil
===========================================================================
*/
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .container .sections {
    display: flex;
  }
}
</style>