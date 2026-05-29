export default function Services() {
  const services = [
    {
      title: "Haarschnitt",
      price: "15 €",
    },
    {
      title: "Bartpflege",
      price: "10 €",
    },
    {
      title: "Haarschnitt + Bart",
      price: "25 €",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Unsere Dienstleistungen
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white shadow-xl rounded-xl p-8 text-center hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-yellow-600 text-3xl font-bold">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
