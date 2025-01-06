import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../store/authStore';

export const RutasPrivadas = () => {
  const logged = useAuthStore((state) => state.logged);

  return logged ? <Outlet /> : <Navigate to="/" />;
};
