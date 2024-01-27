export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-blue-600 hover:border-slate-100 rounded-lg border-2 border-blue-500 border-solid p-2 mb-2 max-w-sm">
      <ul>
        <li className="text-xl">{name}</li>
        <li className="text-slate-400">
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
}
