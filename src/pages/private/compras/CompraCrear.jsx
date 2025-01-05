import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FormularioCompra } from '../../../components/compras/FormularioCompra';

function CompraCrear() {
  // Variables de estado
  const [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);

  const navigate = useNavigate();

  // Guardar la compra
  const onGuardar = (data) => {
    console.log('Datos enviados:', data);
    navigate('/compras');
  };

  useEffect(() => {
    const cargarDatos = async () => {
      const proveedoresSimulados = [
        { id: '1', nombre: 'Proveedor A' },
        { id: '2', nombre: 'Proveedor B' },
      ];
      const productosSimulados = [
        { id: '1', nombre: 'Producto A' },
        { id: '2', nombre: 'Producto B' },
        { id: '3', nombre: 'Producto C' },
      ];
      setProveedores(proveedoresSimulados);
      setProductos(productosSimulados);
    };

    cargarDatos();
  }, []);

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
