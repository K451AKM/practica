function probarConexion() {
    const status = document.getElementById('status');
    const serverStatus = document.getElementById('server-status');
    
    // Simular prueba de conexión
    status.innerHTML = 'Probando conexión...';
    status.className = '';
    status.style.display = 'block';
    status.style.background = '#fff3cd';
    status.style.color = '#856404';
    
    setTimeout(() => {
        const isConnected = Math.random() > 0.2; // 80% de probabilidad de éxito
        
        if (isConnected) {
            status.innerHTML = '✅ Conexión exitosa con Nginx!';
            status.className = 'status-success';
            serverStatus.innerHTML = 'Activo';
            serverStatus.style.color = '#11998e';
        } else {
            status.innerHTML = '❌ Error de conexión. Intentar nuevamente.';
            status.className = 'status-error';
            serverStatus.innerHTML = 'Error';
            serverStatus.style.color = '#dc3545';
        }
        
        // Ocultar mensaje después de 4 segundos
        setTimeout(() => {
            status.style.display = 'none';
        }, 4000);
    }, 1500);
}

// Mensaje de bienvenida en la consola
console.log('Nginx Server - JavaScript cargado correctamente');

// Actualizar información del servidor
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const timeString = now.toLocaleString('es-ES');
    
    // Agregar información de tiempo de carga
    const timeElement = document.createElement('div');
    timeElement.className = 'stat-item';
    timeElement.innerHTML = `
        <span class="stat-label">Última carga:</span>
        <span class="stat-value">${timeString}</span>
    `;
    
    document.querySelector('.stats').appendChild(timeElement);
    
    // Simular latencia del servidor
    const latency = Math.floor(Math.random() * 50) + 10;
    const latencyElement = document.createElement('div');
    latencyElement.className = 'stat-item';
    latencyElement.innerHTML = `
        <span class="stat-label">Latencia:</span>
        <span class="stat-value">${latency}ms</span>
    `;
    
    document.querySelector('.stats').appendChild(latencyElement);
});