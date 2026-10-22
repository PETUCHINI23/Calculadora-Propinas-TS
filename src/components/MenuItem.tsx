import type { MenuItemProps } from "../types";

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={() => addItem(item)}
      className="flex w-full items-center justify-between rounded-md border-2 border-[#48d1b2] p-3 transition hover:bg-teal-50"
    >
      <p className="text-slate-800">{item.name}</p>
      <p className="font-black text-slate-900">
        ${item.price}
      </p>
    </button>
  );
}