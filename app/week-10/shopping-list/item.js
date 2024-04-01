export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="max-w-sm m-2 p-2 border border-orange-950 bg-blue-950 w-full hover:bg-orange-700"
      onClick={onSelect}
    >
      <ul>
        <li className="text-xl font-bold">{name}</li>
        <li className="text-sm">
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
}
