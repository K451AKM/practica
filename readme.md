# Servidores de Prueba - Apache, Nginx y Node.js

Este proyecto contiene archivos de prueba sencillos para tres tipos de servidores web diferentes: Apache, Nginx y Node.js.

## 📁 Estructura del Proyecto

```
practica/
├── apache/          # Archivos para Apache HTTP Server
│   ├── index.html
│   ├── style.css
│   └── script.js
├── nginx/           # Archivos para Nginx
│   ├── index.html
│   ├── style.css
│   └── script.js
├── nodejs/          # Servidor Node.js con Express
│   ├── server.js
│   ├── package.json
│   ├── index.html
│   ├── style.css
│   └── script.js
└── readme.md
```

## 🚀 Instrucciones para Ubuntu Linux

### Apache HTTP Server

1. **Instalar Apache:**
   ```bash
   sudo apt update
   sudo apt install apache2
   ```

2. **Copiar archivos:**
   ```bash
   sudo cp apache/* /var/www/html/
   ```

3. **Iniciar Apache:**
   ```bash
   sudo systemctl start apache2
   sudo systemctl enable apache2
   ```

4. **Acceder:** http://localhost

### Nginx

1. **Instalar Nginx:**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. **Copiar archivos:**
   ```bash
   sudo cp nginx/* /var/www/html/
   ```

3. **Iniciar Nginx:**
   ```bash
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

4. **Acceder:** http://localhost

### Node.js + Express

1. **Instalar Node.js:**
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. **Navegar a la carpeta:**
   ```bash
   cd nodejs/
   ```

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **Ejecutar servidor:**
   ```bash
   npm start
   ```

5. **Acceder:** http://localhost:3000

## ✨ Características

- **Apache**: Página estática con JavaScript interactivo
- **Nginx**: Página con simulación de pruebas de conexión
- **Node.js**: Servidor dinámico con APIs REST para obtener información del servidor

## 🔧 Puertos por Defecto

- Apache: Puerto 80
- Nginx: Puerto 80
- Node.js: Puerto 3000

## 📝 Notas

- Los archivos están diseñados para ser lo más sencillos posible
- Cada servidor tiene su propio diseño visual distintivo
- El servidor Node.js incluye APIs de prueba en `/api/status` y `/api/info`
- Todos los archivos están listos para usar sin modificaciones adicionales
