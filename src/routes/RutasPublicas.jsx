import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../store/authStore';

export const RutasPublicas = () => {
  // const logged = useAuthStore((state) => state.logged);

  const logged = true;

  return logged ? <Navigate to="/inicio" /> : <Outlet />;
};
