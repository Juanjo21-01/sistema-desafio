import { useState } from 'react';
import { NavLink } from 'react-router';
import { TarjetasOrdenesPendientes } from '../../../components/ordenes/TarjetaOrdenesPendientes';
import { ModalOrdenResponsable } from '../../../components/ordenes/ModalOrdenResponsable';

function OrdenesPendientes() {
  // Variables de estado
  const [modalOpen, setModalOpen] = useState(false);
  const [orden, setOrden] = useState(null);
  const [ordenesPendientes, setOrdenesPendientes] = useState([
    {
      id: 3,
      fecha_orden: '2021-09-03',
      cliente_id: 'Carlos Pérez',
      cantidad_productos: 5,
      detalle: [
        { id: 1, nombre: 'Producto A', cantidad: 2, precio: 10.5 },
        { id: 2, nombre: 'Producto B', cantidad: 3, precio: 7.99 },
      ],
    },
    {
      id: 4,
      fecha_orden: '2021-09-04',
      cliente_id: 'Ana Gómez',
      cantidad_productos: 2,
      detalle: [
        { id: 3, nombre: 'Producto C', cantidad: 1, precio: 15.99 },
        { id: 4, nombre: 'Producto D', cantidad: 1, precio: 12.5 },
      ],
    },
  ]);

  // Funciones
  const finalizarOrden = (data) => {
    console.log('Finalizar orden', orden, data);
    setModalOpen(false);

    setOrdenesPendientes((prev) => prev.filter((o) => o.id !== orden.id));
  };

  const validarOrden = (orden) => {
    console.log('Validar orden: ', orden);

    setModalOpen(true);
    setOrden(orden);
  };

  const rechazarOrden = (orden) => {
    console.log('Rechazar orden: ', orden);

    setModalOpen(true);
    setOrden(orden);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4 mb-8">
        {/* Título */}
        <h1 className="text-3xl font-bold">Órdenes Pendientes</h1>

        {/* Regresar */}
        <NavLink className="btn btn-primary text-white" to="/ordenes">
          Regresar
        </NavLink>
      </div>

      <hr className="divider" />

      <TarjetasOrdenesPendientes
        ordenes={ordenesPendientes}
        onValidar={validarOrden}
        onRechazar={rechazarOrden}
      />

      {/* Modal de confirmación */}
      <ModalOrdenResponsable isOpen={modalOpen} onGuardar={finalizarOrden} />
    </div>
  );
}

export default OrdenesPendientes;
