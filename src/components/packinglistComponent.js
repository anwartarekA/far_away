import { useState } from "react";
export default function PackingList({
  data,
  onToggleItem,
  onDeleteItem,
  onClearItems,
}) {
  const [selectSort, setSelectSort] = useState("input");
  let sortedData;
  if (selectSort === "input") sortedData = data;
  if (selectSort === "description")
    sortedData = data
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (selectSort === "packed")
    sortedData = data
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="packingLists">
      <ul>
        {sortedData.map((item) => (
          <li
            key={item.id}
            style={item.packed ? { textDecoration: "line-through" } : {}}
          >
            <input type="checkbox" onChange={() => onToggleItem(item.id)} />
            <span>
              {item.qunatity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <div className="sorted">
        <select
          className="select"
          onChange={(e) => setSelectSort(e.target.value)}
        >
          <option value="input">sorted by input order</option>
          <option value="description">sorted by description</option>
          <option value="packed">sorted by packed</option>
        </select>
        <button className="clear" onClick={onClearItems}>
          clear list
        </button>
      </div>
    </div>
  );
}
