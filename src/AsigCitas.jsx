import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';

export default function AsignarCita() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    tipoDocumento: '',
    numeroDocumento: '',
    motivo: '',
    fecha: '',
    hora: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Cita agendada:', formData);
    alert('¡Cita agendada exitosamente!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-4 overflow-y-auto py-8">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden my-8">
        <div className="grid md:grid-cols-2 gap-0">
          
          {/* Sección izquierda */}
          <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-12 flex flex-col justify-center text-white">
            <div className="mb-8">
              <Calendar className="w-20 h-20 mb-6" strokeWidth={1.5} />
              <h2 className="text-4xl font-bold mb-4">Agenda tu cita</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                Para brindarte la mejor atención personalizada, déjanos tus datos en el formulario o contáctanos vía WhatsApp
              </p>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6" />
                <span>Horario: Lun-Vie 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6" />
                <span>contacto@clinica.com</span>
              </div>
            </div>

            <button className="mt-8 bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 w-full md:w-auto">
              <Phone className="w-5 h-5" />
              <span>Chatea con nosotros</span>
            </button>
          </div>

          {/* Formulario derecho */}
          <div className="p-12 overflow-y-auto max-h-screen">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Agendar Cita</h3>
            <p className="text-gray-600 mb-8">
              Todos los campos marcados con <span className="text-red-500">*</span> son obligatorios
            </p>

            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellido <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Ingresa tu apellido"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Edad <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  placeholder="Ingresa tu edad"
                  min="1"
                  max="120"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de documento <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors bg-white"
                  >
                    <option value="">Seleccione tipo</option>
                    <option value="CC">Cédula de Ciudadanía (CC)</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="TI">Tarjeta de Identidad (TI)</option>
                    <option value="DNI">DNI</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de documento <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="numeroDocumento"
                    value={formData.numeroDocumento}
                    onChange={handleChange}
                    placeholder="Número de documento"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Motivo de la cita <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  placeholder="Describe brevemente el motivo de tu cita"
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hora <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl mt-6"
              >
                Agendar Cita
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                ¿Ya tienes una cita?{' '}
                <a href="#" className="text-teal-600 hover:underline font-semibold">
                  Ver mis citas
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
