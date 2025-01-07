import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { Loader } from '../../components/Loader';
import { FaSearch, FaShoppingCart, FaBox } from 'react-icons/fa';
import { useCarritoStore } from '../../store/carritoStore';
import { useProductosStore } from '../../store/productosStore';
import { toast } from 'sonner';

function Inicio() {
  // Variables de estado
  const [busqueda, setBusqueda] = useState('');

  // Store de carrito
  const { agregarProducto } = useCarritoStore();
  // Store de productos
  const { productos, obtener } = useProductosStore();

  // Agregar al carrito
  const agregarCarrito = (producto) => {
    const productoCarrito = {
      ...producto,
      cantidad: 1,
      precio_unitario: producto.precio_unitario * 1.12,
    };

    const hayStock = agregarProducto(productoCarrito);

    if (hayStock) {
      toast.success('Producto agregado al carrito');
    } else {
      toast.error('No hay suficiente stock');
    }
  };

  // Obtener productos
  useEffect(() => {
    obtener();
  }, [obtener]);

  // Filtrar productos
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.marca.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Header y Búsqueda */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Catálogo de Productos</h1>
        <div className="join w-full md:w-96">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="input input-bordered join-item w-full"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button className="btn join-item">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productosFiltrados.map((producto) => (
          <div
            key={producto.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {/* Imagen */}
            <figure className="relative">
              <img
                src="https://picsum.photos/200"
                alt={producto.nombre}
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <div
                  className={`badge text-white ${
                    producto.stock === 0 ? 'badge-error' : 'badge-success'
                  }`}
                >
                  {producto.tipo_producto_id.nombre}
                </div>
              </div>
            </figure>

            <div className="card-body">
              {/* Info Principal */}
              <h2 className="card-title text-lg">{producto.nombre}</h2>
              <p className="text-gray-500 text-sm">Marca: {producto.marca}</p>

              {/* Precio y Stock */}
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <FaBox
                    className={`${
                      producto.stock === 0 ? 'text-error' : 'text-primary'
                    }`}
                  />
                  <span className="text-sm">Stock: {producto.stock}</span>
                </div>
                <span className="text-xl font-bold text-primary">
                  Q{(producto.precio_unitario * 1.12).toFixed(2)}
                </span>
              </div>

              {/* Botón de Agregar */}
              <div className="card-actions justify-center mt-4">
                <button
                  className="btn btn-primary btn-sm gap-2"
                  disabled={producto.stock === 0}
                  onClick={() => agregarCarrito(producto)}
                >
                  <FaShoppingCart />
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-rose-500">
            No se encontraron productos
          </h2>
          <p className="text-gray-400 mb-6 font-semibold">
            Intenta con otra búsqueda
          </p>

          <div className="mb-8">
            <Loader />
          </div>

          {/* Recargar la pagina */}
          <NavLink to="/" className="btn btn-warning">
            Recargar la página
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Inicio;
