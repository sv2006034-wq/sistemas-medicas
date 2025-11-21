import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Register from "./regiser";
import Citas from "./Citas";
import AsignarCita from "./AsigCitas";
import GenerarReportes from "./reportes";
import ModificarCita from "./modificar";
import VerCitasAgendadas from "./verCitas";


//Rutas de navegacion
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/regiser" element={<Register />} />
        <Route path="/Citas" element={<Citas />} />
        <Route path="/AsigCitas" element={<AsignarCita />} />
        <Route path="/reportes" element={<GenerarReportes/>}/>
        <Route path="/modificar" element={<ModificarCita/>}/>
        <Route path="/verCitas" element={<VerCitasAgendadas />} />
      </Routes>
    </Router>
  );
}

export default App;
