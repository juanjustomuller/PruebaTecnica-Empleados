import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EmpleadoDetail = () => {
  const {id} = useParams() //agarro el Id del empleado por el parametro de la url
  const [empleado, setEmpleado] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=> {
    const getEmpleadoById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/empleados/${id}`);
        setEmpleado(response.data)
      } catch (error) {
        console.log("Error al cargar al empleado: ", error)
        setError("Error al cargar la informacion del empleado!")
      }
    }

    getEmpleadoById()
  }, [id])

      // Si aún no hay empleado, mostrar un mensaje de carga
      if (!empleado) {
        return <p>Cargando información del empleado...</p>;
    }

  return (
    <div>
      <h1>Detalle del empleado</h1>
      {error && <p>{error}</p>} {/* Mostrar error si hay uno */}
            <p><strong>Nombre Completo:</strong> {empleado.fullName}</p>
            <p><strong>Edad:</strong> {empleado.edad}</p>
            <p><strong>Área:</strong> {empleado.area}</p>
            <p><strong>Antigüedad:</strong> {empleado.antiguedad} años</p>
            <p><strong>Teléfono:</strong> {empleado.telefono}</p>
    </div>
  )
}

export default EmpleadoDetail