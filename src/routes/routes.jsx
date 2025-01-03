import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { RutasPrivadas } from './RutasPrivadas';
import { RutasPublicas } from './RutasPublicas';
import { RutaProtegidaRol } from '../components/RutaProtegidaRol';
import Error403 from '../pages/Error403';
import Error404 from '../pages/Error404';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';
import Inicio from '../pages/private/Inicio';
import Layout from '../pages/private/Layout';
import UsuariosInicio from '../pages/private/usuarios/UsuariosInicio';
import UsuarioDetalle from '../pages/private/usuarios/UsuarioDetalle';
import ProveedoresInicio from '../pages/private/proveedores/ProveedoresInicio';
import ProveedorDetalle from '../pages/private/proveedores/ProveedorDetalle';
import TipoProductosInicio from '../pages/private/tipoProductos/TipoProductosInicio';
import TipoProductoDetalle from '../pages/private/tipoProductos/TipoProductoDetalle';
import ProductosInicio from '../pages/private/productos/ProductosInicio';
import ProductoDetalle from '../pages/private/productos/ProductoDetalle';
import ComprasInicio from '../pages/private/compras/ComprasInicio';
import CompraCrear from '../pages/private/compras/CompraCrear';
import CompraDetalle from '../pages/private/compras/CompraDetalle';
import OrdenesInicio from '../pages/private/ordenes/OrdenesInicio';
import OrdenDetalle from '../pages/private/ordenes/OrdenDetalle';
import Carrito from '../pages/private/Carrito';
import CheckOut from '../pages/private/CheckOut';
import PerfilInicio from '../pages/private/perfil/PerfilInicio';
import PerfilPedidos from '../pages/private/perfil/PerfilPedidos';
import PerfilPedido from '../pages/private/perfil/PerfilPedido';

const Rutas = () => {
  return (
    <Router>
      {/* RUTAS */}
      <Routes>
        {/* --> Rutas PÚBLICAS */}
        <Route path="/" element={<RutasPublicas />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* --> Rutas PRIVADAS */}
        <Route path="/" element={<RutasPrivadas />}>
          <Route path="/" element={<Layout />}>
            {/* -> Inicio */}
            <Route path="/inicio" element={<Inicio />} />

            {/* -> Usuarios */}
            <Route
              path="/usuarios"
              element={<RutaProtegidaRol rolesPermitidos={[1, 2]} />}
            >
              <Route index element={<UsuariosInicio />} />
              <Route path=":id" element={<UsuarioDetalle />} />
            </Route>

            {/* -> Proveedores */}
            <Route
              path="/proveedores"
              element={<RutaProtegidaRol rolesPermitidos={[1, 2]} />}
            >
              <Route index element={<ProveedoresInicio />} />
              <Route path=":id" element={<ProveedorDetalle />} />
            </Route>

            {/* -> Tipo de Productos */}
            <Route
              path="/tipo-productos"
              element={<RutaProtegidaRol rolesPermitidos={[1, 2]} />}
            >
              <Route index element={<TipoProductosInicio />} />
              <Route path=":id" element={<TipoProductoDetalle />} />
            </Route>

            {/* -> Productos */}
            <Route
              path="/productos"
              element={<RutaProtegidaRol rolesPermitidos={[1, 2, 3]} />}
            >
              <Route index element={<ProductosInicio />} />
              <Route path=":id" element={<ProductoDetalle />} />
            </Route>

            {/* -> Compras */}
            <Route
              path="/compras"
              element={<RutaProtegidaRol rolesPermitidos={[1, 2]} />}
            >
              <Route index element={<ComprasInicio />} />
              <Route path="crear" element={<CompraCrear />} />
              <Route path=":id" element={<CompraDetalle />} />
            </Route>

            {/* -> Ordenes */}
            <Route
              path="/ordenes"
              element={<RutaProtegidaRol rolesPermitidos={[1, 2]} />}
            >
              <Route index element={<OrdenesInicio />} />
              <Route path=":id" element={<OrdenDetalle />} />
            </Route>

            {/* --> Carrito de compras (lado del cliente) */}
            <Route
              path="/carrito"
              element={<RutaProtegidaRol rolesPermitidos={[3]} />}
            >
              <Route index element={<Carrito />} />
            </Route>

            {/* --> Checkout (lado del cliente) */}
            <Route
              path="/checkout"
              element={<RutaProtegidaRol rolesPermitidos={[3]} />}
            >
              <Route index element={<CheckOut />} />
            </Route>

            {/* --> Perfil de usuario */}
            <Route
              path="/perfil"
              element={<RutaProtegidaRol rolesPermitidos={[1, 2, 3]} />}
            >
              <Route index element={<PerfilInicio />} />
              <Route path="pedidos" element={<PerfilPedidos />} />
              <Route path="pedidos/:id" element={<PerfilPedido />} />
            </Route>
          </Route>
        </Route>

        {/* --> Ruta de ERROR 403 */}
        <Route path="/no-autorizado" element={<Error403 />} />

        {/* --> Ruta de ERROR 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
