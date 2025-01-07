import { NavLink } from 'react-router';
import { Loader } from '../../../components/Loader';
import { TablaCompras } from '../../../components/compras/TablaCompras';
import { useComprasStore } from '../../../store/comprasStore';
import { cambiarEstadoCompra } from '../../../helpers/api/compras';
import { useEffect } from 'react';

function ComprasInicio() {
  // Store de compras
  const { compras, obtener, isLoading } = useComprasStore();

  // Obtener compras
  useEffect(() => {
    obtener();
  }, [obtener]);

  // Cambiar estado de compra
  const cambiarEstado = async (compra) => {
    await cambiarEstadoCompra(compra.id, { estado: !compra.estado });
    obtener();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4 mb-8">
        {/* Título */}
        <h1 className="text-3xl font-bold">Compras</h1>

        {/* Crear */}
        <NavLink className="btn btn-primary text-white" to="/compras/crear">
          Crear<span className="hidden sm:inline">Nueva Compra</span>
        </NavLink>
      </div>

      {/* Tabla */}
      {isLoading ? (
        <Loader />
      ) : (
        <TablaCompras compras={compras} onEstado={cambiarEstado} />
      )}
    </div>
  );
}

export default ComprasInicio;
