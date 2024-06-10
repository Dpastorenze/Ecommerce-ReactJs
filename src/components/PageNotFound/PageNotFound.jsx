import React from 'react'
import Swal from 'sweetalert2'
const PageNotFound = () => {
  
  Swal.fire({
    title: '404 - Página No Encontrada',
    text: 'Lo sentimos, la página que estás buscando no existe.',
    icon: 'error',
    confirmButtonText: 'Ir al inicio'
  })
  return null ;
}

export default PageNotFound
