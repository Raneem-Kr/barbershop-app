export default function Contact() {
  return (
    <section id= 'contact' className="bg-zinc-900 text-white py-15">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Kontakt</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-3">📍 Adresse</h3>

            <p>Musterstraße 10</p>

            <p>28195 Bremen</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">📞 Telefon</h3>

            <p>+49 151 12345678</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">🕒 Öffnungszeiten</h3>

            <p>Mo - Fr: 09:00 - 19:00</p>
            <p>Sa: 09:00 - 17:00</p>
            <p>So: Geschlossen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
