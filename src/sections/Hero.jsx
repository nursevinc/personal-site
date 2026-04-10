import foto from "../assets/nur.jpg";
import cv from "../assets/Nur SEVİNÇ CV.pdf";

function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#EDE5D8" }}>

      {/* Geometrik arka plan - daha koyu */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 20 }).map((_, row) =>
          Array.from({ length: 30 }).map((_, col) => (
            <circle key={`${row}-${col}`}
              cx={col * 60 + 30} cy={row * 60 + 30}
              r="1.5" fill="#9C7A4B" opacity="0.2" />
          ))
        )}
        <circle cx="80" cy="50%" r="180" fill="none" stroke="#9C7A4B" strokeWidth="0.8" opacity="0.25" />
        <circle cx="80" cy="50%" r="280" fill="none" stroke="#9C7A4B" strokeWidth="0.5" opacity="0.15" />
        <circle cx="100%" cy="30%" r="200" fill="none" stroke="#9C7A4B" strokeWidth="0.8" opacity="0.2" />
        <line x1="0" y1="0" x2="300" y2="300" stroke="#9C7A4B" strokeWidth="0.5" opacity="0.2" />
        <line x1="0" y1="100" x2="200" y2="300" stroke="#9C7A4B" strokeWidth="0.5" opacity="0.15" />
      </svg>

      {/* Ana içerik */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full">
          <div className="flex-1 text-center md:text-left">
            <p className="fade-up-delay-1 text-xs font-medium mb-3 tracking-widest uppercase"
              style={{ color: "#7A5C35" }}>
              Merhaba, ben
            </p>
            <h1 className="fade-up-delay-2 text-5xl md:text-6xl font-bold mb-4 leading-tight text-stone-900">
              Nur Sevinç
            </h1>
            <p className="fade-up-delay-3 text-xl text-stone-500 mb-6 font-light">
              Yazılım Mühendisi
            </p>
            <div className="fade-up-delay-3 w-12 h-0.5 mb-8 mx-auto md:mx-0"
              style={{ backgroundColor: "#9C7A4B" }}></div>
            <div className="fade-up-delay-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <button onClick={() => scrollTo("contact")}
                style={{ cursor: "pointer" }}
                className="border border-stone-400 px-6 py-3 rounded-lg text-sm hover:bg-stone-200 transition-colors text-stone-700">
                İletişime geç
              </button>
              <a href={cv} download="Nur_Sevinc_CV.pdf"
                className="px-6 py-3 rounded-lg text-sm font-medium transition-colors text-white"
                style={{ backgroundColor: "#9C7A4B", cursor: "pointer" }}>
                CV indir
              </a>
            </div>
           
          </div>

          <div className="fade-up-delay-2 flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "1px solid #C4B09A" }}>
                <img src={foto} alt="Nur Sevinç" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-80 md:h-80 rounded-2xl -z-10"
                style={{ border: "1px solid #B09880" }}></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl"
                style={{ borderColor: "#7A5C35" }}></div>
              <div className="absolute -bottom-5 -right-5 w-6 h-6 border-b-2 border-r-2 rounded-br"
                style={{ borderColor: "#7A5C35" }}></div>
            </div>
          </div>
        </div>

        {/* Scroll ipucu */}
        <div className="fade-up-delay-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-stone-500 tracking-widest">Aşağı kaydır</span>
          <div className="w-px h-8 animate-bounce" style={{ backgroundColor: "#9C7A4B" }}></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;