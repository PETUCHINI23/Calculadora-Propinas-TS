import type { OrderContentsProps } from "../types";

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="mb-5 text-2xl font-black text-black">Consumo</h2>
      <div className="space-y-4">
        {order.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b border-slate-200 pb-4 last:border-b-0">
            <div className="min-w-0">
              <p className="text-slate-800">
                {item.name} - ${item.price.toFixed(2)}
              </p>
              <p className="font-black text-black">
                Cantidad: {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              aria-label={`Quitar ${item.name} de la orden`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-black text-white transition hover:bg-red-700"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}