export default function WhyUs() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Warum wir?</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-3">10+ Jahre Erfahrung</h3>
            <p>Professionelle Friseure mit langjähriger Erfahrung.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Hygienische Standards</h3>
            <p>Saubere und desinfizierte Werkzeuge bei jedem Kunden.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Online-Terminbuchung</h3>
            <p>Schnell und einfach Ihren Termin reservieren.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
