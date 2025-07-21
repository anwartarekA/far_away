import { useState } from "react";
import Logo from "./components/logoComponent";
import Form from "./components/formComponet";
import PackingList from "./components/packinglistComponent";
import Stats from "./components/statsComponent";
export default function App() {
  const [data, setData] = useState([]);
  function addItems(newItem) {
    setData((items) => [...items, newItem]);
  }
  function clearItems() {
    setData([]);
  }
  function toggleItem(id) {
    setData((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }

  function deleteItem(id) {
    setData((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div>
      <Logo />
      <Form onAddItem={addItems} />
      <PackingList
        data={data}
        onToggleItem={toggleItem}
        onDeleteItem={deleteItem}
        onClearItems={clearItems}
      />
      <Stats data={data} />
    </div>
  );
}
