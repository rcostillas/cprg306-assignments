export default function Item({ name, quantity, category }) {
  return (
    <div className="pt-2 pl-2 pb-2 m-2 bg-slate-900 max-w-sm">
      <ul>
        <li className="text-xl font-bold">{name}</li>
        <li className="text-sm">
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
}
