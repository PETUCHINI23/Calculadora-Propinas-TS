import React from "react"; // Aseg


export type TipPercentageFormProps = {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export type MenuItem= {
 id: number;
 name: string;
 price: number;
}

export type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
export type OrderItem = MenuItem & {
   quantity: number;
};
export type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};
export type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};