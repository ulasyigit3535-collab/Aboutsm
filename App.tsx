
import React, { useEffect, useState } from 'react';
import { 
  Zap, 
  Eye, 
  Target, 
  FlaskConical, 
  Leaf, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  Quote,
  Share2,
  Globe,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${isScrolled ? 'bg-background-dark/90 backdrop-blur-md border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-primary p-2 rounded-lg transition-all group-hover:rotate-12">
              <Zap className="text-background-dark w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase tracking-tighter">Smart Moles</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden hero-mesh">
      {/* Wave overlay and noise */}
      <div className="hero-wave"></div>
      
      {/* Center Glow for "Stitch" vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-primary/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <h1 className="text-7xl md:text-[9rem] font-extrabold text-white mb-2 tracking-tighter leading-[0.85] text-center">
            Gelecek
          </h1>
          <h1 className="text-7xl md:text-[9rem] font-extrabold text-primary italic tracking-tighter leading-[0.85] glow-text text-center">
            Burada Kök <br/> Salıyor.
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-16"
        >
          Daha güzel yarınlar için Akıllı Su Yönetimi.
        </motion.p>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">HİKAYEMİZİ KEŞFEDİN</span>
          <ChevronDown className="text-primary w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
};

const WhoWeAre = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-[#0c120e]">
      <div className="absolute left-10 top-1/2 -translate-y-1/2 chapter-bg">01</div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">Biz Kimiz?</h2>
            <div className="w-20 h-1.5 bg-primary"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-xl text-slate-300 font-medium leading-relaxed"
            >
              <p>1997'den beri süregelen Yuluğ Mühendislik tecrübesini, Ege Üniversitesi Teknopark bünyesindeki Ar-Ge merkezimizde teknolojiyle harmanlıyoruz.</p>
              <p className="text-white font-bold text-2xl border-l-4 border-primary pl-8 py-2">
                Sadece sensör üretmiyoruz; her damla suyun kıymetini bilen bir mühendislik bilinci inşa ediyoruz. %100 yerli mühendislik gücümüzle toprağın sessiz dilini veriye dönüştürüyoruz.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
            >
              <div className="glass-card p-10 rounded-[2.5rem] border-l-8 border-l-primary group">
                <h4 className="text-5xl font-black text-primary mb-2">1997</h4>
                <p className="text-[12px] text-slate-400 uppercase tracking-[0.3em] font-black">MİRASIMIZ</p>
              </div>
              <div className="glass-card p-10 rounded-[2.5rem] border-l-8 border-l-primary group">
                <h4 className="text-5xl font-black text-primary mb-2">%93.12</h4>
                <p className="text-[12px] text-slate-400 uppercase tracking-[0.3em] font-black">YERLİ İMKANLAR</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section className="py-32 relative bg-background-dark">
      <div className="absolute right-10 top-1/2 -translate-y-1/2 chapter-bg">02</div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">Neden Buradayız?</h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto opacity-70">Geleceğin tarım teknolojilerini bugünden inşa ederek ekosistemimizi koruyoruz.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-14 rounded-[4rem] group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 border border-primary/20">
              <Eye className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-4xl font-extrabold text-white mb-8">Vizyonumuz</h3>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Suyun her damlasına değer veren bir anlayışla, tarımsal sulamada <span className="text-primary font-bold italic">sürdürülebilirliği esas alan</span> yenilikçi teknolojiler geliştirmek. Çevreye ve insana duyarlı, yerli ve milli çözümlerimizle sadece bugünün değil, yarının tarımını da korumak; dünya çapında su yönetimi teknolojileri alanında <span className="text-primary font-bold uppercase">öncü ve örnek</span> bir marka olmak.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-14 rounded-[4rem] group"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-10 border border-accent-blue/20">
              <Target className="text-accent-blue w-6 h-6" />
            </div>
            <h3 className="text-4xl font-extrabold text-white mb-8">Misyonumuz</h3>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Toprak altındaki veriyi görünür kılarak <span className="text-accent-blue font-bold italic">doğru kararları mümkün hale getirmek</span>. Akıllı sensör sistemleri ve yapay zekâ destekli karar destek mekanizmalarıyla; her damla suyun, her birim gübrenin ve her metre toprağın en verimli şekilde kullanılmasını sağlamak. Bilim, teknoloji ve saha deneyimini birleştirerek; verim artışını, maliyet optimizasyonunu ve <span className="text-accent-blue font-bold">çevresel sürdürülebilirliği</span> aynı potada buluşturan çözümler geliştirmek.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    { icon: <FlaskConical />, title: "Bilim ve Veri Odaklılık", color: "#0a84ff", shadow: "shadow-[#0a84ff]/20" },
    { icon: <Leaf />, title: "Sürdürülebilirlik", color: "#2bee6c", shadow: "shadow-[#2bee6c]/20" },
    { icon: <Users />, title: "Çiftçi Odaklılık", color: "#ff9f0a", shadow: "shadow-[#ff9f0a]/20" },
    { icon: <Lightbulb />, title: "Yenilikçilik", color: "#bf5af2", shadow: "shadow-[#bf5af2]/20" },
    { icon: <ShieldCheck />, title: "Şeffaflık ve Güven", color: "#64d2ff", shadow: "shadow-[#64d2ff]/20" },
  ];

  return (
    <section className="py-32 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-4 block">KÜLTÜRÜMÜZÜN TEMELİ</span>
          <h2 className="text-6xl font-extrabold text-white tracking-tight">Bizi Biz Yapan Değerler</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ 
                y: -8, 
                backgroundColor: 'rgba(255,255,255,0.05)',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
              }}
              className="glass-card p-10 rounded-[2.5rem] text-center flex flex-col items-center gap-6 group"
            >
              <div 
                style={{ color: v.color }} 
                className={`transition-all duration-300 group-hover:scale-110`}
              >
                {React.cloneElement(v.icon as React.ReactElement<any>, { size: 36 })}
              </div>
              <h4 className="text-sm font-extrabold text-white leading-tight group-hover:text-white/100 text-white/80 transition-colors">
                {v.title}
              </h4>
              <div 
                className="w-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: v.color }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#080c09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[4rem] overflow-hidden grid lg:grid-cols-5 items-stretch shadow-2xl border-white/5 bg-black/40">
          <div className="lg:col-span-2 relative min-h-[500px]">
            <img 
              src="https://smartmoles.com/assets/images/about/growtech-fuar-smartmoles-7.jpg" 
              alt="A. Ömer Yuluğ" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
            <div className="absolute bottom-12 left-12">
              <h4 className="text-4xl font-black text-white mb-2 tracking-tight">A. Ömer Yuluğ</h4>
              <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">CEO & KURUCU ORTAK</p>
            </div>
          </div>

          <div className="lg:col-span-3 p-10 md:p-20 flex flex-col justify-center relative bg-gradient-to-br from-white/5 to-transparent">
            <Quote className="text-primary w-20 h-20 mb-8 opacity-10 absolute top-10 right-10" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-10"
            >
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed tracking-tight italic">
                "Suyun israfı, sadece bugünün kaybı değil, yarının çölleşmesidir. Biz Smart Moles'ta, teknolojiyi doğaya meydan okumak için değil, onunla <span className="text-primary italic glow-text">kusursuz bir uyum</span> içinde yaşamak ve her damlayı korumak için kullanıyoruz."
              </p>

              <div className="space-y-6 text-sm text-slate-400 font-medium leading-relaxed opacity-80 border-t border-white/5 pt-10">
                <p>
                  Bizler 1997'den beri <span className="text-white">Yuluğ Mühendislik</span> çatısı altında Türkiye ve Dünya'nın birçok ülkesinde sulama sistemleri projeleri ve uygulamaları yapan bir ekibiz. Ege Üniversitesi Teknoloji Geliştirme Bölgesinde SmartMoles Su Yönetimi Teknolojisi markasıyla ARGE çalışmalarımızı sürdürüyoruz.
                </p>
                <p>
                  Bu yola çıkış nedenimiz; basınçlı sulama sistemlerinin adeta yüzey sulama yapar gibi kullanılmasındaki sürdürülemez israftır. Bu gidişata dur diyebilmek için geliştirdiğimiz ürünlerimiz, <span className="text-primary font-bold">%93.12 yerli ve millî</span> imkânlarla üretilen siber fiziksel teknolojimizle çevre dostu bir altın anahtardır.
                </p>
              </div>
            </motion.div>

            <div className="flex items-center justify-between mt-14">
              <span className="font-signature text-6xl text-white/50 select-none">A. Ömer Yuluğ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-40 relative bg-[#050b1a]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-14">
        <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.85]">
          İz Bırakmaya <br/>
          <span className="text-primary glow-text italic">Hazır Mısınız?</span>
        </h2>
        <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto opacity-70">
          Smart Moles bir iş yerinden fazlası; yeteneklerinizin küresel bir etkiye dönüştüğü yerdir. Sadece sensörlerimizi değil, toplumu dönüştüren bir vizyonu birlikte kuruyoruz.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-32">
          <div className="col-span-2 lg:col-span-2 space-y-10">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Zap className="text-background-dark w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase">Smart Moles</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed font-medium opacity-60">
              SmartMoles, yapay zeka destekli tarımsal çözümleriyle su yönetimini akıllı ve sürdürülebilir hale getirir. Yerli üretim gücüyle toprağı, suyu ve geleceği korur.
            </p>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-primary transition-all">
                <Share2 size={16} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-primary transition-all">
                <Globe size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-10">
            <h5 className="text-white font-black uppercase tracking-widest text-[10px]">Kurumsal</h5>
            <ul className="space-y-4 text-xs font-bold text-slate-500 tracking-wider">
              <li><a href="#" className="hover:text-primary transition-colors uppercase">EKİBİMİZ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase">AR-GE MERKEZİ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase">İŞ ORTAKLARI</a></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h5 className="text-white font-black uppercase tracking-widest text-[10px]">Kariyer</h5>
            <ul className="space-y-4 text-xs font-bold text-slate-500 tracking-wider">
              <li><a href="#" className="hover:text-primary transition-colors uppercase">KÜLTÜRÜMÜZ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase">İŞ İLANLARI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase">STAJ</a></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h5 className="text-white font-black uppercase tracking-widest text-[10px]">Hukuk</h5>
            <ul className="space-y-4 text-xs font-bold text-slate-500 tracking-wider">
              <li><a href="#" className="hover:text-primary transition-colors uppercase">KVKK</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase">ÇEREZ POLİTİKASI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase">İLETİŞİM</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-600 uppercase tracking-[0.4em] font-black">
          <p>© 2024 SMART MOLES | YULUĞ MÜHENDİSLİK. TÜM HAKLARI SAKLIDIR.</p>
          <div className="flex gap-10">
            <span className="text-primary/30">HASSAS TARIM SİSTEMLERİ V5.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- App Root ---

export default function App() {
  return (
    <div className="bg-background-dark min-h-screen text-slate-100 selection:bg-primary selection:text-background-dark">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <VisionMission />
        <Values />
        <Leadership />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
