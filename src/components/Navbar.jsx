
import { useState, useEffect } from "react";

const sections = ["hero", "about", "education", "experience", "projects", "contact"];

const labels = {
  hero: null,
  about: "Hakkımda",
  education: "Eğitim",
  experience: "Deneyim",
  projects: "Projeler",
  contact: "İletişim",
};

function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = sections.filter((id) => labels[id]);

  return (
    <nav style={{ backgroundColor: "rgba(250,247,242,0.92)" }}
      className="sticky top-0 z-50 backdrop-blur-sm border-b border-stone-200 px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <button onClick={() => scrollTo("hero")}
  style={{ cursor: "pointer" }}
  className="font-semibold text-xl tracking-tight text-stone-800 flex items-center gap-2">
  <img src="/NS.png" alt="logo" className="w-8 h-8 rounded-full object-cover" />
  NUR <span style={{ color: "#9C7A4B" }}>SEVİNÇ</span>
</button>

      {/* Masaüstü linkler */}
      <ul className="hidden md:flex gap-8">
        {links.map((id) => (
          <li key={id}>
            <button onClick={() => scrollTo(id)}
              style={{
                cursor: "pointer",
                color: active === id ? "#9C7A4B" : undefined,
                fontWeight: active === id ? "600" : undefined,
                borderBottom: active === id ? "2px solid #9C7A4B" : "2px solid transparent",
                paddingBottom: "2px",
                transition: "all 0.2s",
              }}
              className="text-base text-stone-500 hover:text-stone-900 tracking-wide">
              {labels[id]}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger butonu — sadece mobilde */}
      <button className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ cursor: "pointer" }}>
        <span className="block w-5 h-0.5 bg-stone-600"></span>
        <span className="block w-5 h-0.5 bg-stone-600"></span>
        <span className="block w-5 h-0.5 bg-stone-600"></span>
      </button>

      {/* Mobil açılır menü */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col items-center gap-5 py-6 md:hidden z-50"
          style={{ backgroundColor: "rgba(250,247,242,0.98)", borderBottom: "1px solid #E8DDD0" }}>
          {links.map((id) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{
                cursor: "pointer",
                color: active === id ? "#9C7A4B" : undefined,
                fontWeight: active === id ? "600" : undefined,
              }}
              className="text-base text-stone-600">
              {labels[id]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;