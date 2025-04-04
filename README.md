# Tienda Landing Page

Este proyecto es una aplicación web para una tienda en línea que permite a los usuarios navegar y comprar productos. Además, incluye un tablero privado para que los vendedores gestionen las compras realizadas por los clientes.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
tienda-landing-page
├── src
│   ├── components
│   │   ├── Header.jsx          # Componente que muestra el encabezado de la página.
│   │   ├── Footer.jsx          # Componente que muestra el pie de página.
│   │   ├── ProductList.jsx     # Componente que muestra la lista de productos.
│   │   ├── ProductDetail.jsx    # Componente que muestra los detalles de un producto específico.
│   │   └── Dashboard.jsx       # Componente que proporciona una vista privada para el vendedor.
│   ├── pages
│   │   ├── Home.jsx            # Página principal de la tienda.
│   │   ├── Login.jsx           # Página de inicio de sesión.
│   │   └── AdminDashboard.jsx   # Página del tablero de administración.
│   ├── styles
│   │   ├── main.css            # Estilos generales de la aplicación.
│   │   └── dashboard.css       # Estilos específicos para el tablero de administración.
│   ├── utils
│   │   └── api.js              # Funciones utilitarias para interactuar con la API.
│   └── App.jsx                 # Punto de entrada de la aplicación.
├── public
│   ├── index.html              # Plantilla HTML principal.
│   └── favicon.ico             # Ícono de la aplicación.
├── package.json                # Configuración de npm.
├── .env                        # Variables de entorno.
├── README.md                   # Documentación del proyecto.
└── webpack.config.js           # Configuración de Webpack.
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd tienda-landing-page
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta:
```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.