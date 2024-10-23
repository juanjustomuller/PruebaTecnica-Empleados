import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

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
    <div className="container">
      
      <Link to="/" className="btn-volver">
        <button className="btn-crear">
          <i className="fa fa-home" aria-hidden="true"></i> 
        </button>
      </Link>

      {/* Título y detalles del empleado */}
      <div className="header">
        <h1>Detalle del empleado</h1>
        {error && <p className="error">{error}</p>} 
      </div>

      {/* Tabla de detalles del empleado */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Atributo</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nombre Completo:</strong></td>
              <td>{empleado.fullName}</td>
            </tr>
            <tr>
              <td><strong>Edad:</strong></td>
              <td>{empleado.edad}</td>
            </tr>
            <tr>
              <td><strong>Área:</strong></td>
              <td>{empleado.area}</td>
            </tr>
            <tr>
              <td><strong>Antigüedad:</strong></td>
              <td>{empleado.antiguedad} años</td>
            </tr>
            <tr>
              <td><strong>Teléfono:</strong></td>
              <td>{empleado.telefono}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmpleadoDetail