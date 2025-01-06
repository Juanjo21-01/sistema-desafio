import { DatosCheckout } from '../../components/carrito/DatosCheckOut';

function CheckOut() {
  return (
    <div className="px-4 py-0">
      <ul className="steps steps-horizontal w-full mb-4">
        <li className="step step-primary">Carrito</li>
        <li className="step step-primary">Confirmar</li>
      </ul>

      <h1 className="text-2xl md:text-3xl font-bold mb-4">Finalizar Compra</h1>

      {/* Datos de Checkout */}
      <DatosCheckout />
    </div>
  );
}

export default CheckOut;
