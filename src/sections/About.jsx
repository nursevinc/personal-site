const skills = {
  "PROGRAMLAMA DİLLERİ": ["C#", "JavaScript", "Java"],
  "FRAMEWORKS": [".NET Core", "ASP.NET MVC", "React.js", "Entity Framework"],
  "WEB GELİŞTİRME": ["HTML5", "CSS3", "Bootstrap", "RESTful API", "Responsive Design"],
  "VERİTABANLARI": ["MSSQL", "Veritabanı Tasarımı & Optimizasyon"],
  "ARAÇLAR": ["JIRA", "Git", "GitHub", "Visual Studio", "Azure DevOps"],
  "KAVRAMLAR": ["SOLID", "OOP", "SDLC"],
};

function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-24"
      style={{ borderTop: "1px solid #E8DDD0" }}>
      <h2 className="text-4xl font-bold mb-8 text-stone-900">Hakkımda</h2>
      <p className="text-stone-600 leading-relaxed mb-6">
        İstanbul Beykent Üniversitesi - Yazılım Mühendisliği bölümünden 2025 yılında mezun oldum.
        Bitirme projemde makine öğrenmesi yöntemleriyle ses tabanlı psikolojik durum
        sınıflandırması üzerine çalıştım; bu çalışma UBMK'25 konferansında sunuldu.
        
      </p>
      <p className="text-stone-600 leading-relaxed mb-6">
        Zorlu Holding bünyesinde stajyer ve part-time geliştirici olarak React, C# ve .NET
        teknolojileriyle Vestel Kariyer, Vestel Akademi ve Zorlu Kariyer gibi kurumsal projelerde
        yer aldım.
      </p>
      <p className="text-stone-600 leading-relaxed mb-12">
        Kendimi özellikle yapay zekâ, backend geliştirme ve veri analizi alanlarında geliştirmeye odaklanıyor;
        bu alanlarda yeni teknolojileri öğrenerek edindiğim bilgileri projelerime aktif olarak uyguluyorum.
        
      </p>

      <h3 className="text-lg font-semibold mb-6 text-stone-900">Yetkinlikler</h3>
      <div className="space-y-5">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p className="text-xs text-stone-400 tracking-wider mb-2">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s}
                  className="text-sm px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#EFE8DC", color: "#6B5A47" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;