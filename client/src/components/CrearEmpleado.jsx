import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearEmpleado = () => {
  const [fullName, setFullName] = useState("");
  const [edad, setEdad] = useState("");
  const [area, setArea] = useState("");
  const [antiguedad, setAntiguedad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(null);
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
        // Redireccionar a la lista de empleados después de crear uno nuevo
        navigate("/");
      }
    } catch (error) {
      console.error("Error al crear el empleado: ", error);
      setError("Error al crear el empleado. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div>
      <h1>Crear Nuevo Empleado</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Área:</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Antigüedad:</label>
          <input
            type="number"
            value={antiguedad}
            onChange={(e) => setAntiguedad(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Empleado</button>
      </form>
    </div>
  );
};

export default CrearEmpleado;
