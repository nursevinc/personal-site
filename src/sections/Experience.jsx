const experience = [
  {
    title: "Ledsoft",
    role: "Full Stack Software Developer",
    period: "Kasım 2025 – Ocak 2026",
    desc: "LedSoft tarafından geliştirilen LAF Framework kullanarak kurumsal web uygulamaları geliştirdim. ASP.NET Core Web API ile RESTful API tasarlayıp geliştirdim ve bu servislerin dokümantasyonunu hazırladım. B2B proje kapsamında ürün, kategori ve sipariş yönetimi süreçlerine yönelik geliştirmeler yaparak sistemin işleyişini iyileştirdim.",
  },
  {
    title: "Zorlu Holding",
    role: "Part-Time Software Developer",
    period: "Kasım 2024 – Mayıs 2025",
    desc: "Staj sürecimin ardından part-time olarak ekibe dahil oldum. React, HTML ve CSS kullanarak ön yüz geliştirmeleri yaptım; kullanıcı deneyimini iyileştiren etkileşimler tasarladım. Backend tarafında C# ve .NET teknolojileriyle geliştirmeler yaptım ve mevcut sistemlerdeki hataları (bug fix) giderdim. Mevcut projelere yeni özellikler ekleyerek platformların fonksiyonelliğini artırdım ve kullanıcı taleplerine uygun değişiklikler yaptım.\n\n Yapay zekâ araçları üzerine araştırmalar yaparak bu teknolojilerin kurumsal projelere entegrasyon potansiyelini analiz ettim. ",
  },
  {
    title: "Zorlu Holding",
    role: "Software Development Intern",
    period: "Temmuz 2024 – Eylül 2024",
    desc: "Yazılım geliştirme alanındaki ilk profesyonel deneyimim kapsamında, React.js ile frontend geliştirmelerinde ve .NET teknolojileriyle backend projelerinde aktif olarak görev aldım. Vestel Kariyer ve Vestel Akademi gibi holding bünyesindeki projelerde yer alarak kurumsal yazılım geliştirme süreçlerini deneyimleme fırsatı buldum. Bu süreçte ekip çalışması, kod geliştirme ve proje takibi konularında kendimi geliştirerek yazılım geliştirme pratiği kazandım.",
  },
];

function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-24"
      style={{ borderTop: "1px solid #E8DDD0" }}>
      <h2 className="text-4xl font-bold mb-10 text-stone-900">Deneyim</h2>
      <div className="space-y-10">
        {experience.map((e, i) => (
          <div key={i} className="pl-6" style={{ borderLeft: "2px solid #9C7A4B" }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
              <div>
                <h4 className="font-semibold text-lg text-stone-900">{e.title}</h4>
                <p className="text-sm mt-0.5" style={{ color: "#9C7A4B" }}>{e.role}</p>
              </div>
              <span className="text-stone-400 text-sm whitespace-nowrap">{e.period}</span>
            </div>
            <p 
  className="text-stone-500 text-sm mt-3 leading-relaxed"
  style={{ whiteSpace: "pre-line" }}
>
  {e.desc}
</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;