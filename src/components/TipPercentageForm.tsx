import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
  tip: number,
  setTip: Dispatch<SetStateAction<number>>
}

export default function TipPercentageForm({ tip, setTip }: TipPercentageFormProps) {
  return (
    <div>
      <h3> Propina</h3>
      <form >
        {tipOptions.map(

          tipOptions => (

            <div key={tipOptions.id}>
              <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
              <input id={tipOptions.id}
                type="radio"
                name="tip"
                value={tipOptions.value}
                onChange={e => setTip(+e.target.value)}
                checked={tipOptions.value === tip} />

            </div>
          )

        )}


      </form>

    </div>
  )
}