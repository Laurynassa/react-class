import { useState } from "react";

export function useUnique(initial) {
  const [items, setItems] = useState(initial);
  const add = (newItem) => {
    const uniqueItems = [...new Set([...items, newItem])];
    setItems(uniqueItems);
  };
  return [items, add];
}
