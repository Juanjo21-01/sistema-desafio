import { ResumenCarrito } from '../../components/carrito/ResumenCarrito';
import { FaShoppingCart } from 'react-icons/fa';

function Carrito() {
  return (
    <div className="px-4 py-0">
      <ul className="steps steps-horizontal w-full mb-4">
        <li className="step step-primary">Carrito</li>
        <li className="step">Confirmar</li>
      </ul>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <FaShoppingCart className="text-primary" />
          Carrito de Compras
        </h1>
      </div>

      {/* Carrito */}
      <ResumenCarrito />
    </div>
  );
}

export default Carrito;
