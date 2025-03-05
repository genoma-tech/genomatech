<!-- NodeBackground.vue -->
<script setup>
import {onMounted, onBeforeUnmount, ref} from 'vue'

const canvasRef = ref(null)
let canvas = null
let ctx = null
let animationFrameId = null // Para cancelar la animación en cleanup

const style = window.getComputedStyle(document.body)
const color1 = style.getPropertyValue('--color-primary');
const color2 = style.getPropertyValue('--color-secondary');
const rgbaColor1 = hexToRgba(color1.trim(), 0.85);
const rgbaColor2 = hexToRgba(color2.trim(), 0.85);

const nodes = []
const mouse = {x: null, y: null, radius: 200}
let numNodes = 150
let resizeTimeoutId = null // Para debounce en resize

/**
 * Ajusta el tamaño del canvas
 */
function resizeCanvas() {
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function hexToRgba(hex, alpha) {
  hex = hex.replace(/^#/, "");

  let r, g, b;
  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else if (hex.length === 8) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    console.warn("Formato de color hex inválido:", hex);
    return `rgba(0, 0, 0, ${alpha})`;
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Clase para nodos (partículas)
 */
class Node {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 4 + 1
    this.dx = Math.random() * 2 - 1
    this.dy = Math.random() * 2 - 1
    const alpha = 0.85; // Opacidad fija

    // Asigna color de forma aleatoria
    const rand = Math.random();
    if (rand > 0.66) {
      this.color = 'rgba(255, 255, 255, 0.85)';
    } else if (rand > 0.33) {
      this.color = rgbaColor1;
    } else {
      this.color = rgbaColor2;
    }
  }

  update() {
    this.x += this.dx
    this.y += this.dy

    // Rebote en bordes
    if (this.x < 0 || this.x > canvas.width) this.dx *= -1
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1

    // Repulsión con el mouse
    const distX = mouse.x - this.x
    const distY = mouse.y - this.y
    const distance = Math.sqrt(distX * distX + distY * distY)
    if (distance < mouse.radius) {
      this.x -= (distX / distance) * 2
      this.y -= (distY / distance) * 2
    }
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

/**
 * Crear / resetear nodos
 */
function createNodes() {
  nodes.length = 0
  for (let i = 0; i < numNodes; i++) {
    nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height))
  }
}

/**
 * Conectar nodos cercanos
 */
function connectNodes() {
  const len = nodes.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
      if (dist < 100) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`
        ctx.lineWidth = 0.65
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[j].x, nodes[j].y)
        ctx.stroke()
      }
    }
  }
}

/**
 * Loop de animación
 */
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // Actualizar y dibujar nodos
  for (const node of nodes) {
    node.update()
    node.draw()
  }
  connectNodes()
  animationFrameId = requestAnimationFrame(animate)
}

/**
 * Manejador de 'mousemove'
 */
function handleMouse(e) {
  if (!canvas) return
  // Obtén la caja (bounding box) del canvas
  const rect = canvas.getBoundingClientRect()

  // Calcula coordenadas del puntero *relativas* al canvas
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top

  // Opcional: limitar cuántos nodos “seguimos” creando
  if (nodes.length > numNodes) {
    nodes.shift()
  }
}

/**
 * Manejador de 'resize' con debounce
 */
function handleResize() {
  // Cancela cualquier timeout anterior
  if (resizeTimeoutId) {
    clearTimeout(resizeTimeoutId)
  }
  // Espera 200ms tras dejar de redimensionar
  resizeTimeoutId = setTimeout(() => {
    resizeCanvas()
    createNodes()
  }, 200)
}

/**
 * onMounted: Inicializar canvas, listeners y animación
 */
onMounted(() => {
  canvas = canvasRef.value
  if (!canvas) return

  // Ajustar número de nodos en móviles
  if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
      )
  ) {
    numNodes = 50
  }

  ctx = canvas.getContext('2d')
  resizeCanvas()
  createNodes()
  animate()

  window.addEventListener('mousemove', handleMouse)
  window.addEventListener('resize', handleResize)
})

/**
 * onBeforeUnmount: Limpiar listeners y detener animación
 */
onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('mousemove', handleMouse)
  window.removeEventListener('resize', handleResize)

  if (resizeTimeoutId) {
    clearTimeout(resizeTimeoutId)
  }
})
</script>

<template>
  <!-- Canvas a pantalla completa, posicionado detrás -->
  <canvas ref="canvasRef" class="background-canvas"></canvas>
</template>

<style scoped>
.background-canvas {
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  height: calc(100vh - 65px);
  z-index: -1; /* Para que quede detrás del contenido */
  pointer-events: none; /* Evita interferir con clicks en el contenido */
  background-color: #132542;
}
</style>
