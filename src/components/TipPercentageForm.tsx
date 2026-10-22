import type { TipPercentageFormProps } from "../types";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm({ tip, setTip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="mb-2 text-xl font-black text-black">Propina:</h3>
      <form className="space-y-1">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex items-center gap-2">
            <label htmlFor={tipOption.id} className="text-slate-800">
              {tipOption.label}
            </label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
              className="h-4 w-4 accent-black"
            />
          </div>
        ))}
      </form>
    </div>
  );
}