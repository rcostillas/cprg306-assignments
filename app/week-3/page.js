import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="m-9">
      <h1 className="text-4xl font-bold text-slate-100 mb-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}
