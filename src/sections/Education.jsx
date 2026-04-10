const education = [
  {
    title: "İstanbul Beykent Üniversitesi",
    role: "Yazılım Mühendisliği",
    period: "2021 – 2025",
    desc: "Yazılım Mühendisliği lisans eğitimim boyunca veri tabanı yönetimi, doğal dil işleme (NLP), yapay zekâ, makine öğrenmesi, web geliştirme, algoritmalar ve veri yapıları gibi alanlarda dersler alarak teknik altyapımı güçlendirdim. Bu dersler kapsamında Python, C#, Java ve SQL kullanarak çeşitli projeler geliştirdim ve özellikle backend sistemler ile veri odaklı uygulamalar üzerine yoğunlaştım. Üniversite süresince edindiğim teorik bilgileri projelere dökerek problem çözme ve analitik düşünme becerilerimi geliştirdim. Yazılım geliştirme süreçlerine hâkim, kendini sürekli geliştirmeye odaklı bir mühendis olarak kariyerime yön vermekteyim.",
  },
];

function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-24"
      style={{ borderTop: "1px solid #E8DDD0" }}>
      <h2 className="text-4xl font-bold mb-10 text-stone-900">Eğitim</h2>
      <div className="space-y-8">
        {education.map((e, i) => (
          <div key={i} className="pl-6" style={{ borderLeft: "2px solid #D4C4B0" }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
              <div>
                <h4 className="font-semibold text-lg text-stone-900">{e.title}</h4>
                <p className="text-sm mt-0.5" style={{ color: "#9C7A4B" }}>{e.role}</p>
              </div>
              <span className="text-stone-400 text-sm whitespace-nowrap">{e.period}</span>
            </div>
            <p className="text-stone-500 text-sm mt-3 leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;