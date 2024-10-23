import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const EmpleadosList = () => {
  const [empleados, setEmpleados] = useState([]);
  const [error, setError] = useState(null);

  const [selectedArea, setSelectedArea] = useState(""); //estado para el área seleccionada
  const [filteredEmpleados, setFilteredEmpleados] = useState([]); //estado para los empleados filtrados

  useEffect(() => {
    const getEmpleados = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/empleados");
        //console.log("empleados: ", response.data)
        setEmpleados(response.data);
        setFilteredEmpleados(response.data); // Inicialmente mostrar todos los empleados
      } catch (error) {
        setError("Error al cargar los empleados");
      }
    };

    getEmpleados();
  }, []);

  // Función para manejar el cambio en el filtro de área
  const handleAreaChange = (e) => {
    const area = e.target.value;
    setSelectedArea(area);

    // Filtrar empleados según el área seleccionada
    if (area === "") {
      setFilteredEmpleados(empleados); // Si no hay área seleccionada, mostrar todos
    } else {
      const empleadosFiltrados = empleados.filter((emp) => emp.area === area);
      setFilteredEmpleados(empleadosFiltrados); // Actualizar el estado con los empleados filtrados
    }
  };

  // Obtener lista de áreas sin repetir
  const areas = [...new Set(empleados.map((emp) => emp.area))];

  return (
    <div className="container">
      <div className="header">
        <h1>Bienvenido a la Gestión de Empleados</h1>
        <p>Continúe para agregar o ver el listado de empleados.</p>
        <div className="controls">
          <Link to="/create">
            <button className="btn-crear">Crear Empleado</button>
          </Link>

          {/* Select para filtrar empleados por área */}
          <select value={selectedArea} onChange={handleAreaChange}>
            <option value="">Todas las Áreas</option>{" "}
            {/* Opción para mostrar todos */}
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-container">
        {error && <p>{error}</p>}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre Completo</th>
              <th>Área de Trabajo</th>
            </tr>
          </thead>
          <tbody>
            {/* Usar filteredEmpleados para mostrar solo los filtrados */}
            {filteredEmpleados.map((empleado, index) => (
              <tr key={empleado._id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/empleados/${empleado._id}`}>
                    {empleado.fullName}
                  </Link>
                </td>
                <td>{empleado.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpleadosList;
