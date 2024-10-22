import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmpleadoDetail from './components/EmpleadoDetail';
import CrearEmpleado from './components/CrearEmpleado';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empleados/:id' element={<EmpleadoDetail />} />
        <Route path='/create' element={<CrearEmpleado />} />
      </Routes>
    </Router>
  )
}

export default App
