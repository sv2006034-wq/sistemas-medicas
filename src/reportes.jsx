import React, { useState } from 'react';
import { FileText, Download, Calendar, User } from 'lucide-react';
import './reportes.css';

export default function GenerarReportes() {
  const [filtros, setFiltros] = useState({
    fechaInicio: '',
    fechaFin: '',
    estado: '',
    formato: '',
    edad: '',
    sexo: '',
    nombre: '',
    tratamiento: '',
    eps: '',
    facturacion: '',
    observaciones: '',
    medico: ''
  });

  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerar = () => {
    console.log('Generando reporte con filtros:', filtros);
    alert('Generando reporte...');
  };

  const handleDescargar = () => {
    console.log('Descargando reporte...');
    alert('Descargando reporte en formato ' + filtros.formato);
  };

  return (
   <div className="reportes-container">
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-8 px-4 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl shadow-lg">
          <div className="flex items-center space-x-3">
            <FileText className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Generar Reportes de Pacientes</h1>
              <p className="text-teal-100 mt-1">Sistema de Gestión de Citas Médicas</p>
            </div>
          </div>
        </div>

        {/* Información del Reporte */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-teal-500">
                Período del Reporte
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha Inicio <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="fechaInicio"
                    value={filtros.fechaInicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha Fin <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="fechaFin"
                    value={filtros.fechaFin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-500">
                Configuración del Reporte
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estado
                  </label>
                  <select
                    name="estado"
                    value={filtros.estado}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 bg-white"
                  >
                    <option value="">Todos los estados</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Formato de Descarga <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="formato"
                    value={filtros.formato}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 bg-white"
                  >
                    <option value="">Seleccione formato</option>
                    <option value="pdf">PDF</option>
                    <option value="excel">Excel (XLSX)</option>
                    <option value="csv">CSV</option>
                    <option value="word">Word (DOCX)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros Adicionales */}
        <div className="bg-white shadow-lg mt-6">
          <div className="bg-teal-500 text-white px-6 py-4">
            <h3 className="text-xl font-bold">Filtros de Búsqueda</h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre del Paciente
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={filtros.nombre}
                  onChange={handleChange}
                  placeholder="Buscar por nombre"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Edad
                </label>
                <input
                  type="number"
                  name="edad"
                  value={filtros.edad}
                  onChange={handleChange}
                  placeholder="Edad"
                  min="0"
                  max="120"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sexo
                </label>
                <select
                  name="sexo"
                  value={filtros.sexo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 bg-white"
                >
                  <option value="">Todos</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tratamiento
                </label>
                <input
                  type="text"
                  name="tratamiento"
                  value={filtros.tratamiento}
                  onChange={handleChange}
                  placeholder="Tratamiento"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  EPS / Afiliación
                </label>
                <select
                  name="eps"
                  value={filtros.eps}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 bg-white"
                >
                  <option value="">Todas las EPS</option>
                  <option value="compensar">Compensar</option>
                  <option value="sanitas">Sanitas</option>
                  <option value="nueva_eps">Nueva EPS</option>
                  <option value="salud_total">Salud Total</option>
                  <option value="eps_familiar">EPS Familiar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Facturación
                </label>
                <input
                  type="text"
                  name="facturacion"
                  value={filtros.facturacion}
                  onChange={handleChange}
                  placeholder="Número de factura"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Médico Tratante
                </label>
                <input
                  type="text"
                  name="medico"
                  value={filtros.medico}
                  onChange={handleChange}
                  placeholder="Nombre del médico"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Observaciones
                </label>
                <textarea
                  name="observaciones"
                  value={filtros.observaciones}
                  onChange={handleChange}
                  placeholder="Notas adicionales para el reporte"
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botones de Accion */}
        <div className="bg-white shadow-lg rounded-b-2xl p-6 mt-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleGenerar}
              className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <FileText className="w-5 h-5" />
              <span>Generar Reporte</span>
            </button>
            
            <button
              onClick={handleDescargar}
              disabled={!filtros.formato}
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              <span>Descargar Reporte</span>
            </button>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Los campos marcados con <span className="text-red-500">*</span> son obligatorios
          </p>
        </div>

      </div>
    </div>
    </div>
  );
}