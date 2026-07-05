export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 flex flex-col items-center justify-center pt-24 px-6 text-center">
      <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
        International Junior Coding Championship 2026
      </span>

      <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-tight">
        TechNova
        <br />
        International
      </h1>

      <p className="mt-8 max-w-3xl text-lg md:text-2xl text-blue-100">
        Empowering the Next Generation of Innovators through
        Coding, Artificial Intelligence, Robotics and STEM Education.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-5">
        <button className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition duration-300">
          Register Now
        </button>

        <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
}