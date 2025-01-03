/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../store/authStore';

export const RutaProtegidaRol = ({ rolesPermitidos }) => {
  const { profile } = useAuthStore();

  // Validar autenticación
  if (!profile) return <Navigate to="/" replace />;

  // Validar roles
  // if (!rolesPermitidos.includes(profile.rol))
  //   return <Navigate to="/no-autorizado" replace />;

  return <Outlet />;
};
