import { useCallback } from "react";
import type { OrderTotalsProps } from "../types";

export default function OrderTotal({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subtotalAmount = useCallback(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order],
  );
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order]);
  const totalAmount = useCallback(
    () => subtotalAmount() + tipAmount(),
    [order, tip],
  );
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  return (
    <div className="pt-5">
      <h2 className="mb-4 text-xl font-black text-black">Totales y Propina:</h2>
      <div className="space-y-2 text-slate-800">
        <p>
          Subtotal a pagar: <span className="font-black">{formatCurrency(subtotalAmount())}</span>
        </p>
        <p>
          Propina: <span className="font-black">{formatCurrency(tipAmount())}</span>
        </p>
        <p>
          Total a Pagar: <span className="font-black">{formatCurrency(totalAmount())}</span>
        </p>
      </div>
      <button
        type="button"
        onClick={() => placeOrder()}
        className="mt-10 w-full bg-black p-3 font-bold uppercase text-white transition hover:bg-slate-800 disabled:opacity-10"
        disabled={totalAmount() === 0}
      >
        Guardar orden
      </button>
    </div>
  );
}