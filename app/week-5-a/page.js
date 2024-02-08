export default function Page() {
  const dogs = [
    {
      name: "Winky",
      description: "A winky dog",
      imageURL:
        "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Precious",
      description: "A precious dog. So precious",
      imageURL:
        "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Grumpy",
      description: "A grumpy dog",
      imageURL:
        "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  dogs.sort((a, b) => a.name.localeCompare(b.name));
  //dog.sort((a, b) => { if (a.name < b.name) return -1; if (a.name) > b.name) return 1; return 1}

  return (
    <main className="bg-slate-700 sm:bg-slate-500 md:bg-slate-300">
      <h1 className="text-4xl">Week 5 A</h1>
      <h2 className="text-4xl">My favourite dogs</h2>
      {dogs.map((dog) => (
        <div className="bg-white text-black p-4 m-4 rounded-lg">
          <h3 className="text-2xl">{dog.name}</h3>
          <p>{dog.description}</p>
          <img src={dog.imageURL} alt={dog.name} />
        </div>
      ))}
    </main>
  );
}
