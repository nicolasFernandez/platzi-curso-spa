// crea configuracion para levantar proyecto

// permite traer path del proyecto
const path = require('path'); //Nos permite acceder a donde estamos en las carpetas. Ya sea local o en la nube.

// archivo necesario para trabajar con html
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Archivo necesario para trabajar con HTML y crear el archivo para produccion

// modulo para cada configuracion de
module.exports = {
  entry: './src/index.js', // donde vive nuestro codigo inicial
  // donde pondremos codigo estructurado para produccion
  output: {
    path: path.resolve(__dirname, 'dist'), // crea la carpeta dist dentro del path
    filename: 'main.js' // el compilado se llamará main.js
  },
  // extensiones del proyecto
  resolve: {
    extensions: ['.js'], // arreglo de las extensiones a utilizar
  },
  // reglas necesarias para trabajar (babel)
  module: {
    rules: [
      {
        test: /\.js?$/, // incorpora todos los archivos js
        exclude: /node_modules/, // no incorporar al proyecto
        use: {
          loader: 'babel-loader' // encargado de transpilar js para compatibilidad con cualquier navegador
        }
      }
    ]
  },
  plugins: [
    // webpack para empaquetar para produccion, permite trabajar con HTML
    new HtmlWebpackPlugin([
      {
        inject: true, // inyectar a HTML
        template: './public/index.html', // template base HTML
        filename: './index.html', // donde lo vamos a guardar en la carpeta dist instanciada mas arriba
      }
    ])
  ]
}