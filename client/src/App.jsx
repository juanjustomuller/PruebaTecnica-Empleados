import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmpleadosList from './components/EmpleadosList';
import EmpleadoDetail from './components/EmpleadoDetail';
import CrearEmpleado from './components/CrearEmpleado';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<EmpleadosList />} />
        <Route path='/empleados/:id' element={<EmpleadoDetail />} />
        <Route path='/create' element={<CrearEmpleado />} />
      </Routes>
    </Router>
  )
}

export default App
