import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <Image
            src="/logo/technova-logo.png"
            alt="TechNova International"
            width={55}
            height={55}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-blue-900">
              TechNova International
            </h1>

            <p className="text-sm text-gray-500">
              Learn • Code • Innovate • Inspire
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-medium">

          <a href="#" className="hover:text-blue-700 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            About
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            Programs
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            Competition
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            Gallery
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            Contact
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button className="hidden md:block border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            العربية
          </button>

          <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
            Register
          </button>

        </div>

      </div>
    </nav>
  );
}