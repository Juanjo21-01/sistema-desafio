import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FormularioCompra } from '../../../components/compras/FormularioCompra';
import { useProveedoresStore } from '../../../store/proveedoresStore';
import { useProductosStore } from '../../../store/productosStore';
import { registerCompra } from '../../../helpers/api/compras';

function CompraCrear() {
  const navigate = useNavigate();

  // Store de proveedores
  const { proveedores, obtener: obtenerProveedores } = useProveedoresStore();
  // Store de productos
  const { productos, obtener: obtenerProductos } = useProductosStore();

  // Obtener proveedores y productos
  useEffect(() => {
    obtenerProveedores();
    obtenerProductos();
  }, [obtenerProveedores, obtenerProductos]);

  // Guardar la compra
  const onGuardar = async (data) => {
    await registerCompra(data);
    navigate('/compras');
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-2xl font-bold mb-4">Crear Compra</h1>
      <FormularioCompra
        proveedores={proveedores}
        productos={productos}
        onGuardar={onGuardar}
      />
    </div>
  );
}

export default CompraCrear;
