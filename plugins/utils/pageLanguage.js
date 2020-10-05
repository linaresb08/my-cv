/**
 * Funciones informativas que retorna los valores en los diferentes idiomas.
 * Ordenados alfabéticamente.
 * @returns {Array | Object} Array | Objeto con la información del sistema.
 */

/**
 * Función navbarLinks()
 * Devuelve un array con los nombres y enlace de las secciones del sitio
 * @return {Array} Array con los nombres y enlace de las secciones
 */
function navbarLinks() {
  const linksInfo = [
    [
      { name: 'Sobre mí', to: 'me' },
      { name: 'Conocimientos', to: 'knowledge' },
      { name: 'Habilidades', to: 'skills' },
      { name: 'Educación', to: 'education' },
      { name: 'Experiencia', to: 'experience' },
      { name: 'Contacto', to: 'contact' },
    ],
    [
      { name: 'About me', to: 'me' },
      { name: 'Knowledge', to: 'knowledge' },
      { name: 'Skills', to: 'skills' },
      { name: 'Education', to: 'education' },
      { name: 'Experience', to: 'experience' },
      { name: 'Contact', to: 'contact' },
    ],
  ]

  return linksInfo
}

/**
 * Función pageHeaders()
 * Devuelve un array con la información básica del sitio
 * @return {Array} Array con la información básica del sitio
 */
function pageHeaders() {
  const pageInfo = [
    {
      lang: 'es', // Idioma
      title: `Desarrolladora Front-End | Mi curriculum vitae`, // Título
      content: `Bienvenidos al curriculum vitae de Betzabeth Linares`, // Descripción
    },
    {
      lang: 'en', // Language
      title: `Front-End Developer | My curriculum vitae`, // Title
      content: `Welcome to Betzabeth Linares' curriculum vitae`, // Description
    },
  ]

  return pageInfo
}
export { navbarLinks, pageHeaders }
