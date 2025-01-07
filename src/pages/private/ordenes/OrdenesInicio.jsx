import { NavLink } from 'react-router';
import { Loader } from '../../../components/Loader';
import { TablaOrdenes } from '../../../components/ordenes/TablaOrdenes';
import { useOrdenesStore } from '../../../store/ordenesStore';
import { cambiarEstadoOrden } from '../../../helpers/api/ordenes';
import { useEffect } from 'react';

function OrdenesInicio() {
  // Store de ordenes
  const { ordenes, obtener, isLoading } = useOrdenesStore();

  // Obtener ordenes
  useEffect(() => {
    obtener();
  }, [obtener]);

  // Cambiar estado de orden
  const cambiarEstado = async (orden) => {
    await cambiarEstadoOrden(orden.id, {
      estado: orden.estado === 'V' ? 'R' : 'V',
    });

    obtener();
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
      {isLoading ? (
        <Loader />
      ) : (
        <TablaOrdenes ordenes={ordenes} onEstado={cambiarEstado} />
      )}
    </div>
  );
}

export default OrdenesInicio;
