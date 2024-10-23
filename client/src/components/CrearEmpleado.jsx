import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const CrearEmpleado = () => {
  const [fullName, setFullName] = useState("");
  const [edad, setEdad] = useState("");
  const [area, setArea] = useState("");
  const [antiguedad, setAntiguedad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Estado para el mensaje de éxito
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoEmpleado = {
        fullName,
        edad,
        area,
        antiguedad,
        telefono,
      };

      const response = await axios.post(
        "http://localhost:5000/api/empleados/create",
        nuevoEmpleado
      );

      if (response.status === 201) {
        setSuccessMessage("Empleado creado con éxito!!!");

        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Error al crear el empleado: ", error);
      setError("Error al crear el empleado. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="container">
      <Link to="/"> 
        <button className="btn-crear">
          <i className="fa fa-home" aria-hidden="true"></i> 
        </button>
      </Link>

      <div className="header">
        <h1>Crear Nuevo Empleado</h1>
        {error && <p className="error">{error}</p>}
        {successMessage && (
        <div className="success-banner">
          <p>{successMessage}</p>
        </div>
      )} 
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Edad:</label>
            <input
              type="number"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Área:</label>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Antigüedad:</label>
            <input
              type="number"
              value={antiguedad}
              onChange={(e) => setAntiguedad(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-crear">Crear Empleado</button>
        </form>
      </div>
    </div>
  );
};

export default CrearEmpleado;
