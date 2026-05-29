export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1677444491957-ab1e8b9a80fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1657105052497-f996284ffff8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1677444546747-ac6ecbf08945?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Unsere Arbeiten
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-xl h-72 w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
