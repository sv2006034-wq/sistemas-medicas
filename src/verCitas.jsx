import React, { useState } from 'react';
import { Calendar, Eye, X, User, FileText, Clock } from 'lucide-react';
import "./verCitas.css";

export default function VerCitasAgendadas() {
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Datos de ejemplo de citas (vacias para demostracion XD)
  const citasAgendadas = [
    {
      id: 1,
      modalidad: '',
      servicio: '',
      lugar: '',
      fecha: '',
      hora: '',
      medico: ''
    },
    {
      id: 2,
      modalidad: '',
      servicio: '',
      lugar: '',
      fecha: '',
      hora: '',
      medico: ''
    },
    {
      id: 3,
      modalidad: '',
      servicio: '',
      lugar: '',
      fecha: '',
      hora: '',
      medico: ''
    }
  ];

  const handleVerDetalle = (cita) => {
    setCitaSeleccionada(cita);
    setShowModal(true);
  };

  return (
    <div className="ver-citas-container">
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 py-8 px-4 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="bg-white rounded-t-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-10 h-10 text-purple-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Citas Agendadas</h1>
                <p className="text-gray-600 mt-1">Gestiona y visualiza todas las citas programadas</p>
              </div>
            </div>
          </div>

          {/* Tabla de Citas */}
          <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Lista de Citas</h2>
              
              <div className="space-y-4">
                {citasAgendadas.map((cita) => (
                  <div 
                    key={cita.id} 
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-purple-200 hover:border-purple-400"
                    onClick={() => handleVerDetalle(cita)}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 mb-3">
                            Cita #{cita.id}
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Modalidad:</span>
                              <span className="ml-2 text-gray-500 italic">Sin datos</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Servicio:</span>
                              <span className="ml-2 text-gray-500 italic">Sin datos</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Lugar:</span>
                              <span className="ml-2 text-gray-500 italic">Sin datos</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Fecha:</span>
                              <span className="ml-2 text-gray-500 italic">Sin datos</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Hora:</span>
                              <span className="ml-2 text-gray-500 italic">Sin datos</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Médico:</span>
                              <span className="ml-2 text-gray-500 italic">Sin datos</span>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVerDetalle(cita);
                          }}
                          className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md flex items-center space-x-2"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Ver Detalle</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal de Detalles */}
          {showModal && citaSeleccionada && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative my-8">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Detalles de la Cita #{citaSeleccionada.id}
                  </h2>
                </div>

                <div className="space-y-6">
                  
                  {/* Información de la Cita */}
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-purple-600" />
                      Información de la Cita
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Médico Asignado:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Fecha de la Cita:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Motivo de Consulta:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Estado de la Cita:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                    </div>
                  </div>

                  {/* Datos del Paciente */}
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-indigo-600" />
                      Datos del Paciente
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">ID del Paciente:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Nombre Completo:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Tipo de Documento:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Número de Documento:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Edad:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Fecha de Nacimiento:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Teléfono:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                      <div>
                        <label className="font-semibold text-gray-700 block mb-1">Correo Electrónico:</label>
                        <p className="text-gray-500 italic">Sin datos</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Cerrar
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