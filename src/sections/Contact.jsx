import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await axios.post("https://personel-site-api-production.up.railway.app/api/contact", form);
      setSent(true);
    } catch (err) {
      setError("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    {
      label: "nursevinc90@gmail.com",
      href: "mailto:nursevinc90@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "github.com/nursevinc",
      href: "https://github.com/nursevinc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.222 0 4.61-2.804 5.628-5.476 5.922.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "linkedin.com/in/nur-sevinc",
      href: "https://linkedin.com/in/nur-sevinc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24"
      style={{ borderTop: "1px solid #E8DDD0" }}>
      <h2 className="text-4xl font-bold mb-10 text-stone-900">İletişim</h2>

      <div className="flex flex-col md:flex-row gap-12">

        {/* Sol — form */}
        <div className="flex-1">
          {sent ? (
            <div className="text-center py-16">
              <p className="text-xl font-semibold mb-2 text-stone-900">Teşekkürler!</p>
              <p className="text-stone-500 text-sm">En kısa sürede dönüş yapacağım.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-stone-500 text-sm mb-6">
                Benimle çalışmak veya bir şeyler sormak isterseniz, aşağıdan ulaşabilirsiniz.
              </p>
              {error && (
                <p className="text-sm text-red-500 bg-red-50 px-4 py-2 rounded-lg">{error}</p>
              )}
              <input name="name" placeholder="Adın" value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{ border: "1px solid #D4C4B0", backgroundColor: "#FAF7F2" }} />
              <input name="email" placeholder="E-posta" value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{ border: "1px solid #D4C4B0", backgroundColor: "#FAF7F2" }} />
              <textarea name="message" placeholder="Mesajın" rows={5} value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none resize-none"
                style={{ border: "1px solid #D4C4B0", backgroundColor: "#FAF7F2" }} />
              <button onClick={handleSubmit} disabled={loading}
                className="w-full py-2.5 rounded-lg text-sm text-white transition-colors"
                style={{ backgroundColor: loading ? "#C4A882" : "#9C7A4B", cursor: loading ? "not-allowed" : "pointer" }}>
                {loading ? "Gönderiliyor..." : "Gönder"}
              </button>
            </div>
          )}
        </div>

        {/* Sağ — iletişim bilgileri */}
        <div className="md:w-72 flex flex-col gap-4 justify-start" style={{ marginTop: "2.5rem" }}>
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all hover:shadow-sm"
              style={{ backgroundColor: "#EFE8DC", border: "1px solid #E0D5C5", color: "#6B5A47", cursor: "pointer" }}>
              <span style={{ color: "#9C7A4B" }}>{c.icon}</span>
              <span className="text-sm">{c.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;