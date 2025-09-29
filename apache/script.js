function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.innerHTML = '¡JavaScript funcionando en Apache! 🎉';
    mensaje.style.display = 'block';
    
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 3000);
}

// Mensaje de bienvenida en la consola
console.log('Apache Server - JavaScript cargado correctamente');

// Agregar fecha y hora actual
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const timeString = now.toLocaleString('es-ES');
    
    const timeElement = document.createElement('p');
    timeElement.innerHTML = `<small>Cargado el: ${timeString}</small>`;
    timeElement.style.color = '#999';
    timeElement.style.fontSize = '0.9rem';
    
    document.querySelector('.container').appendChild(timeElement);
});