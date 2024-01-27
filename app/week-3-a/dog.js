export default function Dog({ name, breed, age }) {
  return (
    <section class="border-rose-500 border-2 p-2 mb-2">
      <h2 class="text-xl">Name:{name}</h2>
      <p class="text-slate-400">Breed:{breed}</p>
      <p class="text-slate-400">Age:{age}</p>
    </section>
  );
}
