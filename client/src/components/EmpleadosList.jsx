import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const EmpleadosList = () => {
    const [empleados, setEmpleados] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const getEmpleados = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/empleados')
                console.log("empleados: ", response.data)
                setEmpleados(response.data)
            } catch (error) {
                setError("Error al cargar los empleados")
            }
        }

        getEmpleados()
    }, [])


  return (
    <div>
        <h1>Lista de Empleados</h1>

        <ul>
            {empleados.map((empleado) => (
                <li key={empleado._id}>
                    <Link to={`/empleados/${empleado._id}`}>{empleado.fullName}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default EmpleadosList