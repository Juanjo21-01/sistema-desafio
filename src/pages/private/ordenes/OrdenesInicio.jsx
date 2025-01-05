import { NavLink } from 'react-router';
import { TablaOrdenes } from '../../../components/ordenes/TablaOrdenes';

function OrdenesInicio() {
  // Store de ordenes
  const ordenes = [
    {
      id: 1,
      fecha_orden: '2021-09-01',
      cliente_id: 'Juan José',
      cantidad_productos: 3,
      estado: 'V',
    },
    {
      id: 2,
      fecha_orden: '2021-09-02',
      cliente_id: 'María Fernanda',
      cantidad_productos: 1,
      estado: 'R',
    },
  ];

  // Cambiar estado de orden
  const cambiarEstado = (orden) => {
    console.log('Cambiar estado: ', orden);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4 mb-8">
        {/* Título */}
        <h1 className="text-3xl font-bold">Órdenes</h1>

        {/* Ver ordenes pendientes */}
        <NavLink
          className="btn btn-primary text-white"
          to="/ordenes/pendientes"
        >
          <span className="hidden sm:inline">Ver Órdenes</span>Pendientes
        </NavLink>
      </div>

      <hr className="divider" />

      {/* Tabla */}
      <TablaOrdenes ordenes={ordenes} onEstado={cambiarEstado} />
    </div>
  );
}

export default OrdenesInicio;
