
import careerai from "../assets/careerai.png";

const projects = [
  {
    title: "CareerAI: Yapay Zekâ Destekli İş Başvuru Asistanı",
    description:
      "CareerAI, bir adayın CV’sini ve başvurmak istediği iş ilanını karşılaştırır. Eşleşen ve eksik becerileri gösterir, uyum skorunu hesaplar ve adaya özel öneriler sunar. Birçok araçtan farklı olarak skoru yapay zekâ tahmin etmez. OpenAI yalnızca CV ve ilandan JSON şemasıyla yapılandırılmış beceri listeleri çıkarır, skor ise zorunlu ve tercih edilen becerilere farklı ağırlık veren, birim testli bir C# algoritmasıyla hesaplanır. Böylece sonuç tutarlı ve açıklanabilir olur. Modelin uydurduğu becerileri elemek için her beceri CV metnindeki bir alıntıyla doğrulanır. Öneriler ise adayın sahip olmadığı bir deneyimi varmış gibi göstermeyecek şekilde kısıtlanmıştır.\n\nBackend, ASP.NET Core (.NET 10) ile katmanlı mimaride yazıldı. JWT ve BCrypt ile kimlik doğrulama, şifre değişince diğer oturumları kapatan oturum iptali, kullanıcı bazlı veri izolasyonu ve hesapla birlikte tüm verileri (CV dosyaları dahil) silen bir hesap silme akışı içeriyor. Yüklenen PDF’ler yalnızca uzantıdan değil, dosya içeriğinden de doğrulanıyor. Arayüz React, TypeScript ve Tailwind CSS ile geliştirildi ve skor, beceri kartları, öneriler ve grafikli bir gösterge paneli içeriyor. Proje xUnit birim ve entegrasyon testleriyle, Docker ve GitHub Actions CI ile desteklenmektedir.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "C#",
      "ASP.NET Core Web API",
      ".NET 10",
      "OpenAI API",
      "Docker",
      "GitHub Actions",
      "Vercel (frontend)",
      "Render (backend)",
      "Azure SQL Database"
    ],
    github: "https://github.com/nursevinc/careerai",
    live: "https://careerai-chi-ivory.vercel.app/",
    image: careerai,
  },
  {
    title: "Akustik Özelliklerle Psikolojik Durum Sınıflandırması",
    description:
      "MELD veri seti kullanılarak ses tabanlı stres ve anksiyete sınıflandırması. SVM, Random Forest, MLP ve LSTM modelleri karşılaştırıldı; %74,5 doğruluk ile MLP en iyi sonucu verdi. UBMK'25'te sunuldu.",
    tech: ["Python", "SVM", "Random Forest", "MLP", "LSTM"],
    github: "https://github.com/nursevinc",
    live: "",
    image: null,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-3xl mx-auto px-6 py-24"
      style={{ borderTop: "1px solid #E8DDD0" }}
    >
      <h2 className="text-4xl font-bold mb-10 text-stone-900">
        Projeler
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="flex items-start gap-5 rounded-xl p-5 transition-all hover:shadow-sm"
            style={{
              backgroundColor: "#EFE8DC",
              border: "1px solid #E0D5C5",
            }}
          >
            <div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white mt-0.5"
              style={{ backgroundColor: "#9C7A4B" }}
            >
              {i + 1}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base mb-2 text-stone-900">
                {p.title}
              </h3>

              <p className="text-stone-500 text-sm leading-relaxed mb-3 whitespace-pre-line">
                {p.description}
              </p>

              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full rounded-lg mb-4 object-cover"
                  style={{
                    border: "1px solid #E0D5C5",
                    maxHeight: "320px",
                  }}
                />
              )}

              <div className="flex flex-wrap gap-2 mb-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      backgroundColor: "#D4C4B0",
                      color: "#5C4A38",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "#9C7A4B", cursor: "pointer" }}
                >
                  GitHub →
                </a>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "#9C7A4B", cursor: "pointer" }}
                  >
                    Canlı Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
