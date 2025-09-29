const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(__dirname));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta API de prueba
app.get('/api/status', (req, res) => {
    res.json({
        status: 'success',
        message: 'Servidor Node.js funcionando correctamente',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: process.version
    });
});

// Ruta API para información del servidor
app.get('/api/info', (req, res) => {
    res.json({
        server: 'Node.js + Express',
        port: PORT,
        environment: process.env.NODE_ENV || 'development',
        platform: process.platform,
        memory: process.memoryUsage()
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor Node.js ejecutándose en http://localhost:${PORT}`);
    console.log(`📁 Sirviendo archivos desde: ${__dirname}`);
    console.log(`⏰ Iniciado el: ${new Date().toLocaleString('es-ES')}`);
});