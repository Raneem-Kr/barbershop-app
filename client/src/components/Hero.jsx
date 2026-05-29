import { Link } from "react-router-dom";
import barbershop from "../assets/barbershop.avif";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${barbershop})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Modern Barbershop
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mb-8">
          Professionelle Haarschnitte, Bartpflege und modernes Styling in
          entspannter Atmosphäre.
        </p>

        <Link
          to="/booking"
          className="bg-yellow-500 hover:bg-yellow-400 transition px-8 py-4 rounded-lg font-bold text-black"
        >
          Jetzt Termin buchen
        </Link>
      </div>
    </section>
  );
}
