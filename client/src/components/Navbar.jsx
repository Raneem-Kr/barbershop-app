import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500"> Barbershop</h1>

        <div className="flex gap-6">
          <Link to="/">Startseite</Link>

          <a href="#services">Dienstleistungen</a>
          <Link to="/booking">Termin buchen</Link>
          <a href="#contact">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}
