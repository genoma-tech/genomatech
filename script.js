const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
const nodes = [];
const mouse = { x: null, y: null, radius: 200 };
let lastMouseX, lastMouseY;
let numNodes = 150;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    numNodes = 50;
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.dx = Math.random() * 2 - 1;
        this.dy = Math.random() * 2 - 1;
        this.color = Math.random() > 0.66 ? 'rgba(255, 255, 255, 0.85)' : (Math.random() > 0.5 ? 'rgba(113, 156, 229, 0.85)' : 'rgba(180, 88, 183, 0.85)');
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        const distX = mouse.x - this.x;
        const distY = mouse.y - this.y;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < mouse.radius) {
            this.x -= distX / distance * 2;
            this.y -= distY / distance * 2;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function createNodes() {
    nodes.length = 0;
    for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}

function connectNodes() {
    for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
            let dist = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
            if (dist < 100) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
                ctx.lineWidth = 0.65;
                ctx.beginPath();
                ctx.moveTo(nodes[a].x, nodes[a].y);
                ctx.lineTo(nodes[b].x, nodes[b].y);
                ctx.stroke();
            }
        }
    }
}


window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    if (nodes.length > numNodes) nodes.shift();
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nodes.forEach(node => {
        node.update();
        node.draw();
    });
    connectNodes();
    requestAnimationFrame(animate);
}

createNodes();
animate();

window.addEventListener("resize", () => {
    resizeCanvas();
    createNodes();
});
//-----------------
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');

    // Cambiar el estilo basado en el tipo de mensaje
    notification.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';  // Verde para éxito, rojo para error
    notification.textContent = message;

    // Mostrar la notificación
    notification.classList.remove('hidden');
    notification.classList.add('show');

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hidden');
    }, 3000);
}

// ---------------
const workerURL = "https://genomatechform.raxuk-inf.workers.dev/";

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const termsAccepted = document.getElementById('terms').checked;
    if (!termsAccepted) {
        showNotification('Debes aceptar los términos para continuar', 'error');
        return;
    }

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const payload = {
        content: "Nuevo mensaje del formulario de contacto",
        embeds: [{
            title: "Detalles del formulario",
            fields: [
                { name: "Nombre", value: nombre },
                { name: "Email", value: email },
                { name: "Asunto", value: asunto },
                { name: "Mensaje", value: mensaje }
            ],
            color: 3447003
        }]
    };

    fetch(workerURL, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            // "X-Auth-Token": "mi-token-secreto" // Si se usa un token
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            showNotification('Mensaje enviado correctamente', 'success');
            document.getElementById('contactForm').reset();
        } else {
            showNotification('Error al enviar el mensaje', 'error');
        }
    }).catch(error => {
        console.error('Error:', error);
        showNotification('Error al enviar el mensaje', 'error');
    });
});
