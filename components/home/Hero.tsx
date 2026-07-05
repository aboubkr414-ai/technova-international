import Countdown from "./Countdown";
import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 flex flex-col items-center justify-center pt-24 px-6 text-center">
      <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
        International Junior Coding Championship 2026
      </span>

      <h1 className="mt-8 text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tight">
  TechNova
  <br />
  <span className="text-yellow-400">International</span>
</h1>

      <p className="mt-8 max-w-4xl text-xl md:text-2xl text-blue-100 leading-relaxed">
  Empowering the Next Generation of Innovators through
  <span className="font-semibold text-white">
    {" "}Coding, Artificial Intelligence, Robotics, STEM Education,
  </span>
  and Future Digital Skills.
</p>
<div className="mt-10 flex flex-wrap justify-center gap-4">

  <span className="bg-white/10 px-5 py-2 rounded-full text-white">
    💻 Coding
  </span>

  <span className="bg-white/10 px-5 py-2 rounded-full text-white">
    🤖 AI
  </span>

  <span className="bg-white/10 px-5 py-2 rounded-full text-white">
    🚀 Robotics
  </span>

  <span className="bg-white/10 px-5 py-2 rounded-full text-white">
    🧪 STEM
  </span>

</div>
      <div className="mt-12 flex flex-col md:flex-row gap-5">

  <Button>
    Register Now
  </Button>

  <Button variant="secondary">
    Learn More
  </Button>

  <Button variant="success">
    WhatsApp
  </Button>

</div>
<Countdown />
    </section>
  );
}