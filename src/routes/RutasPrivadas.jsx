import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../store/authStore';

export const RutasPrivadas = () => {
  // const logged = useAuthStore((state) => state.logged);

  const logged = true;

  return logged ? <Outlet /> : <Navigate to="/" />;
};
