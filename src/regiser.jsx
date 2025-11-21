import { useNavigate, Link } from "react-router-dom";
import './stykle.css'; 

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Citas");
  };

  return (
    <div className="register-background">
      <section className="forms-register">
        <h4>Formulario Registro</h4>

        <div>
          <input
            className="controls"
            type="text"
            name="nombres"
            placeholder="Ingrese su Nombre"
            required  // ← Agregar esto
          />
          <input
            className="controls"
            type="text"
            name="apellido"
            placeholder="Ingrese su Apellido"
            required  
          />
          <input
            className="controls"
            type="date"
            name="Fecha_nacimiento"
            required  
          />
          <input
            className="controls"
            type="email"
            name="correo"
            placeholder="Ingrese su Correo"
            required  
          />
          <input
            className="controls"
            type="password"
            name="contraseña"
            placeholder="Ingrese su Contraseña"
            required 
          />
          <input
            className="controls"
            type="password"
            name="confirmar_contaseña"
            placeholder="Confirmar contraseña"
            required  
          />

          <select 
            id="tipo_documento" 
            name="tipo_documento" 
            className="controls"
            required  
          >
            <option value="">Tipo de documento</option>
            <option value="CC">CC</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="Carné de extranjería">Carné de extranjería</option>
          </select>

          <input
            className="controls"
            type="number"
            name="Numero_de_documento"
            placeholder="Número de documento"
            required  
          />

          <select 
            id="rol" 
            name="rol" 
            className="controls"
            required  
          >
            <option value="">Seleccione el tipo de usuario</option>
            <option value="medico">Médico</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="paciente">Paciente</option>
          </select>

          <p>
            Estoy de acuerdo con los <a href="#">Términos y condiciones</a>
          </p>

          <button className="botons" onClick={handleSubmit}>
            Registrar
          </button>

          <p>
            <Link to="/">¿Ya tengo cuenta?</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Register;