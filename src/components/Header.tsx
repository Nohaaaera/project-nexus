import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="text-2xl font-bold text-gray-800" style={{fontFamily: "'Pacifico', cursive"}}>
              Nexus Hub
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
