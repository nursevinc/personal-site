const projects = [
  {
    title: "Akustik Özelliklerle Psikolojik Durum Sınıflandırması",
    description: "Bitirme projem kapsamında MELD veri setini kullanarak ses analizi ve makine öğrenmesi yöntemleri ile stres ve anksiyete seviyelerinin sınıflandırılmasına yönelik bir proje geliştirdim. Çalışmada ses verileri üzerinde veri temizleme, gürültü azaltma, eksik veri giderme ve normalizasyon işlemlerini uyguladım. Farklı makine öğrenmesi ve derin öğrenme modellerini (SVM, Random Forest, MLP vb.) karşılaştırarak model performanslarını doğruluk, hassasiyet, F1 skoru ve AUC-ROC gibi metriklerle değerlendirdim. Geliştirdiğim model ile yüksek doğruluk oranları elde ederek stres ve anksiyete seviyelerinin ses verisi üzerinden etkili bir şekilde sınıflandırılabileceğini gösterdim.Bu çalışmada ayrıca akustik ve dilsel özellikleri birleştiren hibrit bir yaklaşım önererek literatüre katkı sağlamayı hedefledim. Projem, yapay zekâ destekli psikoterapi uygulamalarına yönelik bir çözüm önerisi sunmakta olup UBMK’25 konferansında sunulmuştur.",
    tech: ["Python", "SVM", "Random Forest", "MLP", "LSTM"],
    github: "https://github.com/nursevinc",
  },

];

function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-24"
      style={{ borderTop: "1px solid #E8DDD0" }}>
      <h2 className="text-4xl font-bold mb-10 text-stone-900">Projeler</h2>
      <div className="flex flex-col gap-6">
        {projects.map((p, i) => (
          <div key={p.title}
            className="flex items-start gap-5 rounded-xl p-5 transition-all hover:shadow-sm"
            style={{ backgroundColor: "#EFE8DC", border: "1px solid #E0D5C5" }}>
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white mt-0.5"
              style={{ backgroundColor: "#9C7A4B" }}>
              {i + 1}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1 text-stone-900">{p.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs"
                    style={{ backgroundColor: "#D4C4B0", color: "#5C4A38" }}>
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer"
                className="text-sm hover:underline" style={{ color: "#9C7A4B" }}>
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;