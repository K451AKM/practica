async function probarAPI() {
    const resultado = document.getElementById('resultado');
    
    try {
        resultado.innerHTML = 'Probando API...';
        resultado.className = '';
        resultado.style.display = 'block';
        resultado.style.background = '#fff3cd';
        resultado.style.color = '#856404';
        
        const response = await fetch('/api/status');
        const data = await response.json();
        
        if (response.ok) {
            resultado.innerHTML = `
                <strong>✅ API Response:</strong><br>
                Status: ${data.status}<br>
                Message: ${data.message}<br>
                Timestamp: ${data.timestamp}<br>
                Uptime: ${Math.floor(data.uptime)}s<br>
                Node Version: ${data.version}
            `;
            resultado.className = 'resultado-success';
        } else {
            throw new Error('Error en la respuesta del servidor');
        }
    } catch (error) {
        resultado.innerHTML = `❌ Error: ${error.message}`;
        resultado.className = 'resultado-error';
    }
    
    // Ocultar después de 8 segundos
    setTimeout(() => {
        resultado.style.display = 'none';
    }, 8000);
}

async function obtenerInfo() {
    const resultado = document.getElementById('resultado');
    
    try {
        resultado.innerHTML = 'Obteniendo información del servidor...';
        resultado.className = '';
        resultado.style.display = 'block';
        resultado.style.background = '#fff3cd';
        resultado.style.color = '#856404';
        
        const response = await fetch('/api/info');
        const data = await response.json();
        
        if (response.ok) {
            resultado.innerHTML = `
                <strong>🔧 Server Info:</strong><br>
                Server: ${data.server}<br>
                Port: ${data.port}<br>
                Environment: ${data.environment}<br>
                Platform: ${data.platform}<br>
                Memory Usage: ${Math.round(data.memory.used / 1024 / 1024)}MB
            `;
            resultado.className = 'resultado-success';
            
            // Actualizar estadísticas en la página
            actualizarEstadisticas(data);
        } else {
            throw new Error('Error al obtener información del servidor');
        }
    } catch (error) {
        resultado.innerHTML = `❌ Error: ${error.message}`;
        resultado.className = 'resultado-error';
    }
    
    // Ocultar después de 8 segundos
    setTimeout(() => {
        resultado.style.display = 'none';
    }, 8000);
}

function actualizarEstadisticas(data) {
    const statsGrid = document.querySelector('.stat-grid');
    
    // Limpiar estadísticas existentes
    statsGrid.innerHTML = `
        <div class="stat-item">
            <span class="stat-label">Puerto:</span>
            <span class="stat-value">${data.port}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Framework:</span>
            <span class="stat-value">Express.js</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Entorno:</span>
            <span class="stat-value">${data.environment}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Plataforma:</span>
            <span class="stat-value">${data.platform}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Memoria:</span>
            <span class="stat-value">${Math.round(data.memory.used / 1024 / 1024)}MB</span>
        </div>
    `;
}

// Mensaje de bienvenida en la consola
console.log('Node.js Server - JavaScript cargado correctamente');

// Cargar información inicial
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const timeString = now.toLocaleString('es-ES');
    
    // Agregar información de tiempo de carga
    const timeElement = document.createElement('div');
    timeElement.className = 'stat-item';
    timeElement.innerHTML = `
        <span class="stat-label">Cargado:</span>
        <span class="stat-value">${timeString}</span>
    `;
    
    document.querySelector('.stat-grid').appendChild(timeElement);
});