import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Edit, UserPlus, ClipboardList, FileText, Settings } from 'lucide-react';

export default function Citas() {
  const navigate = useNavigate();
   
  //targetas Cards para los botones
  const cards = [
    {
      title: 'Asignar Cita',
      icon: Calendar,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Modificar Cita',
      icon: Edit,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Registrar Usuarios',
      icon: UserPlus,
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      title: 'Ver Citas Agendadas',
      icon: ClipboardList,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Generar Reportes',
      icon: FileText,
      color: 'from-orange-400 to-orange-600'
    }
  ];

  //parte superior derecha
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Settings className="w-8 h-8 text-gray-700" />
              <h1 className="text-3xl font-bold text-gray-900">Sistema de citas</h1>
            </div>
            <nav className="flex space-x-2">
              <button onClick={() => navigate('/')} 
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Inicio
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                Servicios
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                Contacto
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`h-48 bg-gradient-to-br ${card.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <Icon className="w-24 h-24 text-white relative z-10" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <button
                  onClick={() => {
                       if (card.title === 'Registrar Usuarios') {
                           navigate('/regiser');
                          }
                       if (card.title === 'Asignar Cita'){
                           navigate('/AsigCitas');
                      }
                       if (card.title === 'Generar Reportes'){
                           navigate('/reportes');
                       }
                       if (card.title === 'Modificar Cita'){
                           navigate('/modificar');
                       }
                       if (card.title === 'Ver Citas Agendadas'){
                           navigate('/verCitas');
                       }
                      }} 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                    {card.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}