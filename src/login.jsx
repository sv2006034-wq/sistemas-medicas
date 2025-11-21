import "./ini.css";

import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // para navegar entre rutas

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que recargue la página
    // validar los datos 
    navigate("/Citas"); // redirige a la pagina principal
  };

  return (
    <div className="login-background">
      <div className="formulario">
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="username">
            <input type="text" required />
            <label htmlFor="nombre_usuario">Nombre de usuario</label>
          </div>

          <div className="password">
            <input type="password" required />
            <label htmlFor="contraseña">Contraseña</label>
          </div>

          <div className="tipo_documento">
            <label htmlFor="tipo_documento"></label>
            <select id="tipo_documento" name="tipo_documento" className="controls">
              <option value="">Tipo de documento</option>
              <option value="CC">CC</option>
              <option value="pasaporte">Pasaporte</option>
              <option value="TI">Tarjeta de identidad</option>
              <option value="Carné de extranjería">Carné de extranjería</option>
            </select>
          </div>

          <div className="id">
            <input type="number" required />
            <label htmlFor="NU_doc">Número de documento</label>
          </div>

          <div className="recorder">¿Olvidó su contraseña?</div>

          {/* Cuando enva el formulario,ejecuta handleSubmit */}
          <input type="submit" value="Iniciar" />

          <div className="registrarse">
            ¿No tienes cuenta? <Link to="/regiser">Registrarse</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


