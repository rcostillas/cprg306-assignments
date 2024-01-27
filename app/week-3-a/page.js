import Dog from "./dog";

export default function Page() {
  const dog1 = {
    name: "Fluffy",
    breed: "Poodle",
    age: 3,
  };

  const dog2 = {
    name: "Jellybean",
    breed: "Retriever",
    age: 2,
  };

  const dog3 = {
    name: "Spot",
    breed: "Dalmatian",
    age: 5,
  };

  return (
    <main class="m-9">
      <h1 className="text-4xl font-bold text-slate-100 mb-5">
        My Favorite Dogs
      </h1>
      <Dog name={dog1.name} breed={dog1.breed} age={dog1.age} />
      <Dog name={dog2.name} breed={dog2.breed} age={dog2.age} />
      <Dog name={dog3.name} breed={dog3.breed} age={dog3.age} />
    </main>
  );
}
