<script setup>
import {ref} from 'vue'

// Referencias al formulario y a la notificación
const contactFormRef = ref(null)
const notificationRef = ref(null)

// Función para mostrar la notificación con éxito o error
function showNotification(message, type = 'success') {
  const notificationEl = notificationRef.value
  if (!notificationEl) return

  // Estilos según el tipo
  notificationEl.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545'
  notificationEl.textContent = message

  // Mostrar
  notificationEl.classList.remove('hidden')
  notificationEl.classList.add('show')

  // Ocultar tras 3s
  setTimeout(() => {
    notificationEl.classList.remove('show')
    notificationEl.classList.add('hidden')
  }, 3000)
}

// Función que maneja el envío del formulario
function handleSubmit(event) {
  event.preventDefault()

  const formEl = contactFormRef.value
  if (!formEl) return

  // Verificar checkbox de términos
  const termsAccepted = formEl.querySelector('#terms').checked
  if (!termsAccepted) {
    showNotification('Debes aceptar los términos para continuar', 'error')
    return
  }

  // Obtener valores de los campos
  const nombre = formEl.querySelector('#nombre').value
  const email = formEl.querySelector('#email').value
  const org = formEl.querySelector('#organization').value
  const asunto = formEl.querySelector('#asunto').value
  const mensaje = formEl.querySelector('#mensaje').value

  // Construir el body para el fetch
  const formData = new URLSearchParams()
  formData.append('nombre', nombre)
  formData.append('email', email)
  formData.append('organizacion', org)
  formData.append('asunto', asunto)
  formData.append('mensaje', mensaje)

  // Ajusta este endpoint al tuyo
  const workerURL = 'https://genomatechform.raxuk-inf.workers.dev/'

  fetch(workerURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: formData.toString()
  })
      .then((response) => {
        if (response.ok) {
          showNotification('Mensaje enviado correctamente', 'success')
          formEl.reset()
        } else {
          showNotification('Error al enviar el mensaje', 'error')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        showNotification('Error al enviar el mensaje', 'error')
      })
}
</script>

<template>
  <!-- Usa id="contacto" si lo enlazas desde tu NavBar con <router-link to="/contacto"> -->
  <section id="contacto" class="contact-section">
    <!-- Contenedor principal de la sección de contacto -->
    <div class="contact-container">
      <!-- Bloque con logo y enlaces de contacto (LinkedIn y mail) -->
      <div class="logo-container">
        <div class="logo-slogan">
          <img src="../assets/img/logo.svg" alt="Logo de GenomaTech" class="logo"/>
          <div class="slogan">Conectados por el conocimiento</div>
        </div>

        <div class="logo-contactos">
          <!-- Enlace a LinkedIn -->
          <a
              href="https://www.linkedin.com/company/genomatech"
              target="_blank"
              class="contact-link"
          >
            <!-- Ícono de LinkedIn (SVG) -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="contact-icon linkedin-icon"
                viewBox="0 0 24 24"
            >
              <path
                  d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24
                   1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77
                   23.21 0 22.23 0zM7.12 20.48H3.56V9h3.56v11.48zM5.34
                   7.56a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM20.48
                   20.48h-3.56v-5.64c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17
                   1.47-2.17 2.99v5.73h-3.56V9h3.42v1.57h.05c.48-.9 1.64-1.84
                   3.37-1.84 3.6 0 4.26 2.37 4.26 5.44v6.31z"
              />
            </svg>
            <span>Conócenos en LinkedIn</span>
          </a>

          <!-- Enlace a correo electrónico -->
          <a href="mailto:info@genomatech.es" class="contact-link">
            <img
                src="../assets/img/mail.svg"
                alt="Mail"
                class="contact-icon email-icon"
            />
            <span>Envíanos un correo</span>
          </a>
        </div>
      </div>

      <!-- Formulario de contacto -->
      <div class="contact-form">
        <div class="formulario">
          <h1>Contáctanos</h1>
          <h3>Estamos a un mensaje de distancia, trabajaremos juntos en lo que necesitas.</h3>

          <!-- Referencia al formulario para obtener campos -->
          <form id="contactForm" ref="contactFormRef" @submit="handleSubmit">
            <p>
              <label for="nombre" class="colocar_nombre"
              >Nombre completo <span class="obligatorio">*</span></label
              >
              <input
                  type="text"
                  name="introducir_nombre"
                  id="nombre"
                  required
                  placeholder="Escribe tu nombre"
              />
            </p>

            <p>
              <label for="email" class="colocar_email"
              >Email <span class="obligatorio">*</span></label
              >
              <input
                  type="email"
                  name="introducir_email"
                  id="email"
                  required
                  placeholder="Escribe tu Email"
              />
            </p>

            <p>
              <label for="organization" class="colocar_organization"
              >Organización <span class="obligatorio">*</span></label
              >
              <select name="introducir_organization" id="organization" required>
                <option value="" disabled selected>Selecciona una organización</option>
                <option value="universidad">Universidad</option>
                <option value="investigacion">Grupo de investigación</option>
                <option value="empresa">Empresa</option>
                <option value="particular">Particular</option>
                <option value="privado">Privado</option>
                <option value="otros">Otros</option>
              </select>
            </p>

            <p>
              <label for="asunto" class="colocar_asunto"
              >Asunto <span class="obligatorio">*</span></label
              >
              <select name="introducir_asunto" id="asunto" required>
                <option value="" disabled selected>Selecciona un asunto</option>
                <option value="reunion">Reunión</option>
                <option value="info_ayuda">Info/ayuda</option>
                <option value="colaboracion">Colaboración</option>
                <option value="servicio">Servicio</option>
              </select>
            </p>

            <p>
              <label for="mensaje" class="colocar_mensaje"
              >Mensaje <span class="obligatorio">*</span></label
              >
              <textarea
                  name="introducir_mensaje"
                  class="texto_mensaje"
                  id="mensaje"
                  required
                  placeholder="Deja aquí tu comentario..."
              ></textarea>
            </p>

            <div class="consent-container" id="consent">
              <input
                  type="checkbox"
                  class="consent-checkbox"
                  id="terms"
                  required
              />
              <label class="consent-text" for="terms"
              >Acepto que mis datos serán utilizados únicamente para fines de contacto.</label
              >
            </div>
            <button type="submit" name="enviar_formulario" id="enviar">
              <p>Enviar</p>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Notificación (oculta por defecto) -->
    <div id="notification" class="notification hidden" ref="notificationRef"></div>
  </section>
</template>

<style scoped>
/*
   Ajusta estos estilos para que coincidan con tu diseño
   y se integren con las demás secciones.
   Aquí se muestran como ejemplo, inspirados en el index.html original.
*/

/* Contenedor general de la sección de contacto */
.contact-section {
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  max-height: calc(100dvh - 60px);
  color: black;
}

/* Estructura interior, adaptando la clase .container del HTML original */
.contact-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fefefe;
  border-radius: 10px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Bloque del logo y enlaces a LinkedIn/Correo */
.logo-container {
  flex: 1 1 300px;
  min-width: 300px;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-slogan {
  text-align: center;
}

.logo {
  width: 250px;
  margin-bottom: 1rem;
}

.slogan {
  font-size: 1rem;
  font-weight: 600;
  color: #0077b5;
  margin: 0.75rem 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}

/* Enlaces (LinkedIn y Correo) */
.logo-contactos {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.logo-contactos > a > span {
  font-weight: bold;
  font-size: 16px;
}

.contact-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #74a1ec;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  padding: 10px 15px;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.contact-link:hover .contact-icon {
  box-shadow: 0px 0px 20px 2px white, inset 0px 0px 55px -25px white;
  transition: box-shadow 0.3s ease-in-out;
}

/* Íconos de Contacto */
.contact-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  fill: #ffffff;
}

.email-icon {
  filter: brightness(0) invert(1); /* Icono en blanco */
}

/* Bloque del formulario */
.contact-form {
  flex: 2 1 400px;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.formulario {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.formulario h1 {
  font-size: 2.5rem;
  color: #b458b8;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
}

.formulario h3 {
  font-size: 1rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: bold;
  text-align: center;
}

/* Inputs y selects */
.formulario input,
.formulario select,
.formulario textarea {
  background-color: #fbfbfb;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #b458b8;
  margin-top: 6px;
  padding: 0.5rem;
  font-size: 14px;
  color: #333;
  font-family: inherit;
  box-sizing: border-box;
}

.formulario textarea {
  height: 120px;
  resize: none;
}

/* Labels */
.formulario label {
  display: block;
  font-weight: 500;
  margin-top: 10px;
}

/* Botón de envío */
#enviar {
  margin-top: 1.5rem;
  width: 100%;
  background-color: #b458b8;
  border-color: #b458b8;
  border-style: solid;
  border-radius: 10px;
  cursor: pointer;
  padding: 0.75rem;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

#enviar p {
  color: #fff;
  margin: 0;
}

#enviar:hover {
  background-color: #a045a5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Sección de consentimiento */
.consent-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.consent-checkbox {
  transform: scale(1.1);
  width: 10px !important;
}

.consent-text {
  font-size: 0.85rem;
  color: #333;
}

/* Notificación emergente */
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #b458b8;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 1000;
}

.notification.show {
  opacity: 1;
  transform: translateX(0);
}

.notification.hidden {
  opacity: 0;
  transform: translateX(100%);
}

/* Responsivo */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    padding: 1rem;
  }

  .logo-container, .contact-form {
    width: 100%;
  }

  .logo {
    width: 150px;
  }
}
</style>
