import { useState } from 'react';

// Create the custom hook
export function useHandleClick(items, initialInvoiceItems) {
  const [invoiceItems, setInvoiceItems] = useState(initialInvoiceItems);

  const handleClick = (id, quantity) => {
    console.log("handleClick");
    if (quantity === '') return;

    const item_to_add = items.find((i) => i.id === id);
    const find_item = invoiceItems.find((i) => i.id === item_to_add.id);

    if (find_item && quantity === 0) {
      setInvoiceItems(invoiceItems.filter((item) => item.id !== find_item.id));
    } else if (find_item) {
      let updated_item = invoiceItems.map((item) =>
        item.id === find_item.id ? { ...item, quantity: quantity } : item
      );
      setInvoiceItems(updated_item);
    } else if (quantity !== 0) {
      setInvoiceItems([...invoiceItems, { ...item_to_add, quantity: quantity }]);
    }
  };

  // Return the handleClick function and invoiceItems state
  return { handleClick, invoiceItems };
}
