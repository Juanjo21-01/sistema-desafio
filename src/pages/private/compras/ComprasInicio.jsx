import { NavLink } from 'react-router';
import { TablaCompras } from '../../../components/compras/TablaCompras';

function ComprasInicio() {
  // Store de compras
  const compras = [
    {
      id: 1,
      fecha_compra: '2021-09-01',
      proveedor_id: 'Juan José',
      cantidad_productos: 3,
      estado: 'Activo',
    },
    {
      id: 2,
      fecha_compra: '2021-09-02',
      proveedor_id: 'María Fernanda',
      cantidad_productos: 1,
      estado: 'Inactivo',
    },
  ];

  // Cambiar estado de compra
  const cambiarEstado = (compra) => {
    console.log('Cambiar estado: ', compra);
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
      <TablaCompras compras={compras} onEstado={cambiarEstado} />
    </div>
  );
}

export default ComprasInicio;
