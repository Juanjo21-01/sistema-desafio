import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { Loader } from '../../../components/Loader';
import { TarjetasOrdenesPendientes } from '../../../components/ordenes/TarjetaOrdenesPendientes';
import { ModalOrdenResponsable } from '../../../components/ordenes/ModalOrdenResponsable';
import { useOrdenesStore } from '../../../store/ordenesStore';
import {
  cambiarEstadoOrden,
  registerResponsableOrden,
} from '../../../helpers/api/ordenes';
import { useAuthStore } from '../../../store/authStore';

function OrdenesPendientes() {
  // Variables de estado
  const [modalOpen, setModalOpen] = useState(false);
  const [orden, setOrden] = useState(null);

  // Store de ordenes
  const { ordenesPendientes, obtener, isLoading } = useOrdenesStore();

  // Obtener las ordenes pendientes
  useEffect(() => {
    obtener();
  }, [obtener]);

  // Usuario autenticado
  const { profile } = useAuthStore();

  // Funciones
  const finalizarOrden = async (data) => {
    const encargado = {
      orden_id: orden.id,
      encargado_id: profile.id,
      observaciones: data.observaciones,
    };

    await registerResponsableOrden(encargado);

    setModalOpen(false);

    obtener();
  };

  const validarOrden = async (orden) => {
    if (orden.estado !== 'P') return;

    await cambiarEstadoOrden(orden.id, { estado: 'V' });

    setModalOpen(true);
    setOrden(orden);
  };

  const rechazarOrden = async (orden) => {
    if (orden.estado !== 'P') return;

    await cambiarEstadoOrden(orden.id, { estado: 'R' });

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

      {/* Tarjetas */}
      {isLoading ? (
        <Loader />
      ) : (
        <TarjetasOrdenesPendientes
          ordenes={ordenesPendientes}
          onValidar={validarOrden}
          onRechazar={rechazarOrden}
        />
      )}

      {/* Modal de confirmación */}
      <ModalOrdenResponsable isOpen={modalOpen} onGuardar={finalizarOrden} />
    </div>
  );
}

export default OrdenesPendientes;
