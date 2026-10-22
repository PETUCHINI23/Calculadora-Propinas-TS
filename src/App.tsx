import { menuItems } from "./assets/data/db";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";
import useOrder from "./hooks/useOrder";

function App() {
  // Asegúrate de que tu hook useOrder retorne 'setTip' para actualizar la propina
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="bg-[#48d1b2] px-4 py-5 shadow-sm">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-3xl font-black text-black sm:text-4xl">
            Calculadora de Propinas y Consumo
          </h1>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-8 lg:py-12">
        <section>
          <h2 className="mb-6 text-3xl font-black text-black">Menú</h2>
          
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </section>

        <section
          aria-label="Resumen de la orden"
          className="h-fit rounded-lg border-2 border-dashed border-slate-300 p-5 sm:p-7"
        >
          {order.length ? (
            <div className="space-y-8">
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm tip={tip} setTip={setTip} />
              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center text-center">
              <p className="font-bold text-slate-800">
                Tu orden está vacía
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;