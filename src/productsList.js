import { useState } from "react";

function ProductsList() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");

  const map = (name) => <div>{name}</div>;

  const handleChange = (event) => setNewName(event.target.value);
  const handleAdd = () => {
    const s = new Set([...names, newName]);
    setNames([...s]);
  };

  return (
    <div className="products">
      {names.map(map)}
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default ProductsList;
