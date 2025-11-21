import React, { useState } from 'react';
import { Calendar, Clock, User, Edit, X, AlertCircle } from 'lucide-react';
import './modificar.css'

export default function ModificarCita() {
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [datosModificados, setDatosModificados] = useState({
    fecha: '',
    hora: '',
    motivo: ''
  });

  // Datos de ejemplo de citas programadas (solo estructura)
  const citasProgramadas = [
    {
      id: 1,
      modalidad: '',
      servicio: '',
      lugar: '',
      fecha: '',
      hora: '',
      paciente: '',
      medico: '',
      especialidad: ''
    }
  ];

  const handleSeleccionarCita = (cita) => {
    setCitaSeleccionada(cita);
    setDatosModificados({
      fecha: '',
      hora: cita.hora,
      motivo: ''
    });
    setShowModal(true);
  };

  const handleModificar = () => {
    console.log('Modificando cita:', citaSeleccionada, datosModificados);
    alert('Cita modificada exitosamente');
    setShowModal(false);
    setCitaSeleccionada(null);
  };

  const handleChange = (e) => {
    setDatosModificados({
      ...datosModificados,
      [e.target.name]: e.target.value
    });
  };

  return (
  <div className="modificar-cita-container">
   <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 py-8 px-4 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-3">
            <Edit className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Modificar Cita</h1>
              <p className="text-gray-600 mt-1">Selecciona una cita para modificar</p>
            </div>
          </div>
        </div>

        {/* Lista de Citas */}
        <div className="space-y-4">
          {citasProgramadas.map((cita) => (
            <div key={cita.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Cita - {cita.servicio}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Modalidad:</span>
                        <span className="ml-2 text-gray-600">{cita.modalidad}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Servicio:</span>
                        <span className="ml-2 text-gray-600">{cita.servicio}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Lugar:</span>
                        <span className="ml-2 text-gray-600">{cita.lugar}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Fecha:</span>
                        <span className="ml-2 text-gray-600">{cita.fecha}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Hora:</span>
                        <span className="ml-2 text-gray-600">{cita.hora}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Médico:</span>
                        <span className="ml-2 text-gray-600">{cita.medico}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSeleccionarCita(cita)}
                    className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md"
                  >
                    Modificar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Confirmación */}
        {showModal && citaSeleccionada && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <AlertCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  ¿Modificar esta cita?
                </h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Paciente:</span>
                    <span className="text-gray-600">{citaSeleccionada.paciente}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Centro Médico:</span>
                    <span className="text-gray-600">{citaSeleccionada.lugar}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Fecha Original:</span>
                    <span className="text-gray-600">{citaSeleccionada.fecha}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Hora Original:</span>
                    <span className="text-gray-600">{citaSeleccionada.hora}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Especialidad:</span>
                    <span className="text-gray-600">{citaSeleccionada.especialidad}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Médico:</span>
                    <span className="text-gray-600">{citaSeleccionada.medico}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-bold text-gray-800 mb-3">Nuevos datos:</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nueva Fecha
                      </label>
                      <input
                        type="date"
                        name="fecha"
                        value={datosModificados.fecha}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nueva Hora
                      </label>
                      <input
                        type="time"
                        name="hora"
                        value={datosModificados.hora}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Motivo del cambio
                      </label>
                      <textarea
                        name="motivo"
                        value={datosModificados.motivo}
                        onChange={handleChange}
                        placeholder="Explica brevemente por qué modificas la cita"
                        rows="2"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors"
                >
                  Cancelar Cita
                </button>
                <button
                  onClick={handleModificar}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  Modificar Cita
                  
                </button>
              </div>
            </div>
          </div>
        )}
       </div>
      </div>
    </div>
  );
}