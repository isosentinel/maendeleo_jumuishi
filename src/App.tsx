/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, BookOpen, Target, Mic2, MapPin, 
  FileText, Eye, Mail, Github, Twitter, Linkedin, Facebook,
  Search, ArrowRight, Calendar, User, LayoutDashboard,
  Award, TrendingUp, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Policy {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Strategy {
  id: number;
  title: string;
  description: string;
  category: string;
}

interface Speech {
  id: number;
  title: string;
  date: string;
  preview: string;
}

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
}

// --- Data ---
const policies: Policy[] = [
  { id: 1, title: "Elimu Jumuishi", description: "Kuhakikisha kila mtoto anapata elimu bora bila kujali hali yake ya kiuchumi.", icon: <BookOpen className="w-6 h-6 text-tz-blue" /> },
  { id: 2, title: "Uchumi wa Kidijitali", description: "Kukuza ubunifu na teknolojia kama nguzo kuu ya uchumi wa kisasa.", icon: <TrendingUp className="w-6 h-6 text-tz-green" /> },
  { id: 3, title: "Afya kwa Wote", description: "Kuboresha huduma za afya vijijini na mijini kwa gharama nafuu.", icon: <ShieldCheck className="w-6 h-6 text-tz-yellow" /> },
  { id: 4, title: "Utawala Bora", description: "Kuimarisha uwazi na uwajibikaji katika ngazi zote za uongozi.", icon: <Award className="w-6 h-6 text-tz-black" /> },
];

const strategies: Strategy[] = [
  { id: 1, title: "Mpango wa Vijana", description: "Kuwawezesha vijana kupitia mikopo na mafunzo ya ufundi.", category: "Maendeleo" },
  { id: 2, title: "Kilimo Biashara", description: "Kubadilisha kilimo cha kujikimu kuwa cha kibiashara na kisasa.", category: "Uzalishaji" },
  { id: 3, title: "Miundombinu", description: "Ujenzi wa barabara na mifumo ya nishati jadidifu.", category: "Ukuaji" },
];

const speeches: Speech[] = [
  { id: 1, title: "Maono ya Tanzania Mpya", date: "Januari 15, 2026", preview: "Leo tunasimama katika kizingiti cha mabadiliko makubwa..." },
  { id: 2, title: "Uongozi na Uwajibikaji", date: "Desemba 10, 2025", preview: "Uongozi si cheo, bali ni dhamana ya kuwatumikia wananchi..." },
  { id: 3, title: "Vijana na Uchumi", date: "Novemba 20, 2025", preview: "Nguvu ya taifa letu ipo mikononi mwa vijana wenye maono..." },
];

const events: Event[] = [
  { id: 1, title: "Mkutano wa Wadau wa Elimu", location: "Dodoma", date: "Machi 10, 2026", description: "Kujadili changamoto na fursa katika sekta ya elimu." },
  { id: 2, title: "Ziara ya Kikazi Mwanza", location: "Mwanza", date: "Februari 25, 2026", description: "Kusikiliza kero za wananchi na kuangalia miradi ya maendeleo." },
  { id: 3, title: "Kongamano la Vijana", location: "Dar es Salaam", date: "Januari 30, 2026", description: "Kuhamasisha ushiriki wa vijana katika siasa na uchumi." },
];

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center bg-tz-black rounded-lg overflow-hidden transition-transform group-hover:scale-110">
      <div className="absolute inset-0 bg-gradient-to-br from-tz-green via-tz-yellow to-tz-blue opacity-80" />
      <span className="relative text-white font-bold text-xl">MJ</span>
    </div>
    <span className="font-bold text-xl tracking-tight text-tz-black hidden sm:block">
      Maendeleo <span className="text-tz-green">Jumuishi</span>
    </span>
  </div>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-sm font-medium text-slate-600 hover:text-tz-blue transition-colors py-2 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tz-blue transition-all group-hover:w-full" />
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-tz-yellow selection:text-tz-black">
      {/* Top Marquee */}
      <div className="bg-tz-black text-tz-yellow py-2 overflow-hidden border-b border-tz-yellow/20">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="mx-8 font-medium italic">"Ninaamini katika zama mpya za maendeleo jumuishi"</span>
          <span className="mx-8 font-medium italic">"Ninaamini katika zama mpya za maendeleo jumuishi"</span>
          <span className="mx-8 font-medium italic">"Ninaamini katika zama mpya za maendeleo jumuishi"</span>
          <span className="mx-8 font-medium italic">"Ninaamini katika zama mpya za maendeleo jumuishi"</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#sera">Sera</NavLink>
            <NavLink href="#mikakati">Mikakati</NavLink>
            <NavLink href="#hotuba">Hotuba</NavLink>
            <NavLink href="#ziara">Ziara</NavLink>
            <NavLink href="#rekodi">Rekodi</NavLink>
            <NavLink href="#vision">Vision</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button className="bg-tz-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-tz-green transition-colors shadow-lg shadow-black/10">
              Jiunge Nasi
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-tz-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {['Home', 'Sera', 'Mikakati', 'Hotuba', 'Ziara', 'Rekodi', 'Vision', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-slate-700 hover:text-tz-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-tz-black text-white px-5 py-3 rounded-xl text-center font-semibold">
                  Jiunge Nasi
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-tz-blue rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-tz-green rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-tz-yellow/20 text-tz-black text-xs font-bold uppercase tracking-wider mb-6 border border-tz-yellow/30">
                Uongozi wa Zama Mpya
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-tz-black mb-8 leading-tight">
                Karibu Katika Zama Mpya <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tz-green via-tz-blue to-tz-black">
                  za Uongozi
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Tunaamini katika maendeleo yanayomgusa kila mwananchi. Maendeleo jumuishi ni msingi wa taifa letu imara na lenye matumaini kwa vizazi vijavyo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#sera" className="w-full sm:w-auto bg-tz-black text-white px-8 py-4 rounded-full font-bold hover:bg-tz-green transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20 flex items-center justify-center gap-2">
                  Angalia Sera <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#hotuba" className="w-full sm:w-auto bg-white text-tz-black border-2 border-tz-black px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Soma Hotuba <FileText className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sera Section */}
        <section id="sera" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-tz-black mb-4">Sera Zetu (Policies)</h2>
                <p className="text-slate-600">Miongozo na mipango yetu ya kimkakati kwa ajili ya kuleta mabadiliko chanya na ya kudumu nchini Tanzania.</p>
              </div>
              <div className="flex items-center gap-2 text-tz-blue font-semibold cursor-pointer group">
                Angalia zote <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {policies.map((policy, idx) => (
                <motion.div 
                  key={policy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-tz-blue/30 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-tz-black mb-3">{policy.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{policy.description}</p>
                  <button className="text-tz-blue font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Soma Zaidi <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mikakati Section */}
        <section id="mikakati" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tz-black mb-4">Mikakati ya Utekelezaji</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Mipango madhubuti ya utekelezaji wa sera zetu ili kuhakikisha matokeo yanawafikia wananchi kwa wakati.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategies.map((strategy, idx) => (
                <motion.div 
                  key={strategy.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-tz-blue/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-tz-blue/10" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tz-blue mb-4 block">{strategy.category}</span>
                  <h3 className="text-2xl font-bold text-tz-black mb-4">{strategy.title}</h3>
                  <p className="text-slate-600 mb-8">{strategy.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                      ))}
                    </div>
                    <button className="p-2 rounded-full bg-slate-100 text-tz-black hover:bg-tz-black hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotuba Section */}
        <section id="hotuba" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-grow bg-slate-200" />
              <h2 className="text-3xl md:text-4xl font-bold text-tz-black px-4">Hotuba na Makala</h2>
              <div className="h-px flex-grow bg-slate-200" />
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {speeches.map((speech) => (
                <motion.div 
                  key={speech.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  <div className="md:w-48 flex-shrink-0">
                    <div className="text-tz-blue font-bold text-sm mb-1">{speech.date}</div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar className="w-3 h-3" /> 10 min read
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-tz-black mb-3 group-hover:text-tz-blue transition-colors">{speech.title}</h3>
                    <p className="text-slate-600 mb-4">{speech.preview}</p>
                    <button className="text-tz-black font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      Soma Hotuba Kamili <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-8 py-3 rounded-full border-2 border-tz-black font-bold hover:bg-tz-black hover:text-white transition-all">
                Maktaba ya Hotuba
              </button>
            </div>
          </div>
        </section>

        {/* Ziara Section */}
        <section id="ziara" className="py-24 bg-tz-black text-white relative overflow-hidden">
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-tz-green/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-tz-blue/10 rounded-full blur-[100px] -ml-48 -mb-48" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ziara na Matukio</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Kukutana na wananchi, kusikiliza changamoto, na kushiriki katika ujenzi wa taifa letu.</p>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tz-green via-tz-yellow to-tz-blue opacity-30 transform md:-translate-x-1/2" />

              {events.map((event, idx) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-tz-yellow rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(252,209,22,0.5)]" />
                  
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex items-center gap-2 text-tz-yellow text-sm font-bold mb-2">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{event.description}</p>
                      <span className="text-xs text-slate-500 font-medium">{event.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rekodi Section */}
        <section id="rekodi" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tz-blue to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <LayoutDashboard className="w-8 h-8 text-tz-yellow" />
                  <h2 className="text-3xl font-bold">Rekodi Muhimu</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      Hifadhi ya nyaraka, tafiti, na rekodi za maendeleo kwa ajili ya rejea na uwazi katika uongozi.
                    </p>
                    <div className="space-y-4">
                      {['Nyaraka za Sera 2026', 'Ripoti ya Maendeleo ya Vijana', 'Tafiti za Kiuchumi', 'Miongozo ya Uongozi'].map((doc) => (
                        <div key={doc} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-tz-green" />
                            <span className="font-medium">{doc}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-tz-green/20 p-6 rounded-3xl border border-tz-green/30 flex flex-col justify-between">
                      <div className="text-tz-green font-bold text-4xl mb-2">150+</div>
                      <div className="text-slate-300 text-sm">Miradi Iliyofanyiwa Utafiti</div>
                    </div>
                    <div className="bg-tz-blue/20 p-6 rounded-3xl border border-tz-blue/30 flex flex-col justify-between">
                      <div className="text-tz-blue font-bold text-4xl mb-2">45</div>
                      <div className="text-slate-300 text-sm">Hotuba za Kimkakati</div>
                    </div>
                    <div className="bg-tz-yellow/20 p-6 rounded-3xl border border-tz-yellow/30 flex flex-col justify-between">
                      <div className="text-tz-yellow font-bold text-4xl mb-2">12</div>
                      <div className="text-slate-300 text-sm">Mikoa Iliyotembelewa</div>
                    </div>
                    <div className="bg-white/10 p-6 rounded-3xl border border-white/20 flex flex-col justify-between">
                      <div className="text-white font-bold text-4xl mb-2">20k</div>
                      <div className="text-slate-300 text-sm">Wanachama wa Maono</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://picsum.photos/seed/leadership/800/1000" 
                    alt="Leadership Vision" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tz-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-medium italic text-lg">"Uongozi ni kuona fursa pale wengine wanapoona vikwazo."</p>
                  </div>
                </div>
                {/* Accent Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-tz-green rounded-tl-3xl" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-tz-blue rounded-br-3xl" />
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 text-tz-blue font-bold uppercase tracking-widest text-sm mb-4">
                  <Eye className="w-5 h-5" /> Maono Yetu (Our Vision)
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-tz-black mb-8 leading-tight">
                  Tanzania Yenye <br />
                  <span className="text-tz-green">Usawa na Neema</span>
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Maono yangu ni kuona Tanzania ambapo kila mwananchi, bila kujali asili yake, ana nafasi sawa ya kufanikiwa. Tunajenga mfumo unaozingatia haki, ubunifu, na uzalishaji.
                  </p>
                  <p>
                    Tunataka kuona vijana wakiongoza mabadiliko ya kiteknolojia, wakulima wakipata thamani halisi ya jasho lao, na watoto wetu wakikua katika mazingira yanayochochea ndoto zao.
                  </p>
                  <p className="font-bold text-tz-black">
                    Hii si ndoto tu, ni mpango kazi. Karibu tushirikiane kuijenga Tanzania tunayoitaka.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-tz-black flex items-center justify-center text-white">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-tz-black">Mh. Kiongozi Mzalendo</div>
                    <div className="text-sm text-slate-500">Mwasisi wa Maendeleo Jumuishi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 bg-tz-black p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Wasiliana Nasi</h2>
                  <p className="text-slate-400 mb-8">Una maoni, swali, au unataka kujiunga na harakati zetu? Tuandikie ujumbe leo.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-tz-yellow">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-sm">info@maendeleojumuishi.tz</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-tz-green">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-sm">Dar es Salaam, Tanzania</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  {[Twitter, Facebook, Linkedin, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tz-blue transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-3/5 p-12">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-tz-black">Jina Lako</label>
                      <input 
                        type="text" 
                        placeholder="Ingiza jina" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-tz-blue focus:ring-2 focus:ring-tz-blue/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-tz-black">Barua Pepe</label>
                      <input 
                        type="email" 
                        placeholder="email@mfano.com" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-tz-blue focus:ring-2 focus:ring-tz-blue/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-tz-black">Ujumbe</label>
                    <textarea 
                      rows={4} 
                      placeholder="Andika ujumbe wako hapa..." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-tz-blue focus:ring-2 focus:ring-tz-blue/20 outline-none transition-all resize-none"
                    />
                  </div>
                  <button className="w-full bg-tz-black text-white py-4 rounded-xl font-bold hover:bg-tz-green transition-all shadow-lg shadow-black/10">
                    Tuma Ujumbe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Logo />
              <p className="text-slate-400 text-sm leading-relaxed">
                Jukwaa la kimkakati la uongozi linalolenga kuleta maendeleo jumuishi na mabadiliko chanya nchini Tanzania kupitia sera bora na uongozi wa mfano.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Viungo vya Haraka</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#home" className="hover:text-tz-yellow transition-colors">Home</a></li>
                <li><a href="#sera" className="hover:text-tz-yellow transition-colors">Sera na Mipango</a></li>
                <li><a href="#hotuba" className="hover:text-tz-yellow transition-colors">Hotuba na Makala</a></li>
                <li><a href="#ziara" className="hover:text-tz-yellow transition-colors">Ziara za Kikazi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Msaada na Mawasiliano</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#contact" className="hover:text-tz-yellow transition-colors">Wasiliana Nasi</a></li>
                <li><a href="#" className="hover:text-tz-yellow transition-colors">Maswali ya Mara kwa Mara</a></li>
                <li><a href="#" className="hover:text-tz-yellow transition-colors">Sera ya Faragha</a></li>
                <li><a href="#" className="hover:text-tz-yellow transition-colors">Vigezo na Masharti</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Jarida (Newsletter)</h4>
              <p className="text-slate-400 text-sm mb-4">Jiunge na jarida letu kupata habari na sasisho za hivi punde.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Barua pepe" 
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-tz-blue flex-grow"
                />
                <button className="bg-tz-blue p-2 rounded-lg hover:bg-tz-blue/80 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs">
            <p>© 2026 Maendeleo Jumuishi - All Rights Reserved</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
