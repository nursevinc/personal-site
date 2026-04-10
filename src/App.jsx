import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#FAF7F2" }} className="text-gray-900">
      <Navbar />

      {/* Sol dekoratif şerit */}
      <div className="fixed top-0 left-6 h-full hidden lg:flex flex-col items-center justify-center gap-6 z-40">
        <div className="w-px flex-1" style={{ backgroundColor: "#E0D5C5" }}></div>
        <span className="text-xs text-stone-400"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.15em" }}>
          nursevinc.com
        </span>
        <div className="w-px flex-1" style={{ backgroundColor: "#E0D5C5" }}></div>
      </div>

      {/* Sağ dekoratif şerit */}
      <div className="fixed top-0 right-6 h-full hidden lg:flex flex-col items-center justify-center gap-6 z-40">
        <div className="w-px flex-1" style={{ backgroundColor: "#E0D5C5" }}></div>
        <a href="https://github.com/nursevinc" target="_blank" rel="noreferrer"
          className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.15em" }}>
          GitHub
        </a>
        <div className="w-px h-8" style={{ backgroundColor: "#E0D5C5" }}></div>
        <a href="https://linkedin.com/in/nur-sevinc" target="_blank" rel="noreferrer"
          className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.15em" }}>
          LinkedIn
        </a>
        <div className="w-px h-8" style={{ backgroundColor: "#E0D5C5" }}></div>
        <a href="mailto:nursevinc90@gmail.com"
          className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.15em" }}>
          nursevinc90@gmail.com
        </a>
        <div className="w-px flex-1" style={{ backgroundColor: "#E0D5C5" }}></div>
      </div>

      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;