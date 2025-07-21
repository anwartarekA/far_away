import { useState } from "react";
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [qunatity, setQuantity] = useState("1");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newObj = {
      description,
      qunatity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newObj);
    setDescription("");
    setQuantity("1");
  }
  return (
    <div className="con">
      <div className="form">
        <h2>what are you need for your 😍 trips?</h2>
        <form onSubmit={handleSubmit}>
          <select
            className="select"
            value={qunatity}
            onChange={(e) => setQuantity(+e.target.value)}
          >
            {Array.from({ length: 20 }, (_, index) => index + 1).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="add">add</button>
        </form>
      </div>
    </div>
  );
}
