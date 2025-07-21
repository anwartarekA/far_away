export default function Stats({ data }) {
  const packedItems = data.filter((item) => item.packed === true);
  return (
    <footer>
      <span>
        {data.length === 0
          ? "👜 you have x items in your list, and you already packed x( x %)"
          : `👜 you have ${
              data.length
            } items in your list, and you already packed ${packedItems.length}
        (${Math.round((packedItems.length / data.length) * 100)} %)`}
      </span>
    </footer>
  );
}
