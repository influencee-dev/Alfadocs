import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Users, Settings, Zap, BookOpen, MessageSquare, Calendar, PieChart, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Full Width Video */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-professional-checking-a-tablet-418-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-[1000px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Il software gestionale per il tuo studio medico
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md"
          >
            Semplifica la gestione, migliora la relazione con i pazienti e fai crescere il tuo studio con un'unica piattaforma integrata.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/prenotazione/prova-subito" className="bg-[var(--theme-primary)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--hover-purple)] transition-colors shadow-lg">
              Prova Gratis
            </Link>
            <Link to="/soluzioni" className="bg-white text-[var(--theme-primary)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Scopri le soluzioni
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Un sistema unico per governare la complessità */}
      <section className="py-16 md:py-24 px-6 bg-[var(--bg-body)] overflow-hidden relative">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Testo */}
          <div className="text-[var(--text-main)] z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[var(--theme-primary)]"
            >
              Un sistema unico<br />
              per governare<br />
              la complessità
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[var(--text-muted)] max-w-md font-serif italic"
            >
              Quattro aree funzionali integrate: dalla cartella clinica alla reportistica, dalla prenotazione online al marketing automatico.
            </motion.p>
          </div>

          {/* Cards a forma di croce */}
          <div className="relative h-[500px] w-full max-w-[500px] mx-auto z-10 flex items-center justify-center">
            <div className="relative w-[300px] h-[300px]">
              
              {/* Gestione (Top) */}
              <motion.div 
                initial={{ opacity: 0, y: -20, rotate: -15 }}
                whileInView={{ opacity: 1, y: 0, rotate: -15 }}
                whileHover={{ scale: 1.05, zIndex: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[160px] h-[220px]"
              >
                <Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici" className="bg-[var(--theme-primary)] hover:bg-[var(--hover-purple)] transition-colors rounded-2xl p-5 shadow-xl flex flex-col items-center justify-center gap-4 w-full h-full cursor-pointer no-underline group border border-white/10">
                  <div className="bg-white/20 text-white p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <BookOpen size={32} />
                  </div>
                  <span className="text-white text-lg font-bold text-center">Gestione</span>
                </Link>
              </motion.div>

              {/* Relazione (Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 20, rotate: -15 }}
                whileInView={{ opacity: 1, x: 0, rotate: -15 }}
                whileHover={{ scale: 1.05, zIndex: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-1/2 right-[-30%] -translate-y-1/2 w-[160px] h-[220px]"
              >
                <Link to="/soluzioni/relazione:-comunicazione-&-marketing" className="bg-[var(--theme-primary)] hover:bg-[var(--hover-purple)] transition-colors rounded-2xl p-5 shadow-xl flex flex-col items-center justify-center gap-4 w-full h-full cursor-pointer no-underline group border border-white/10">
                  <div className="bg-white/20 text-white p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare size={32} />
                  </div>
                  <span className="text-white text-lg font-bold text-center">Relazione</span>
                </Link>
              </motion.div>

              {/* Analisi (Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -20, rotate: -15 }}
                whileInView={{ opacity: 1, x: 0, rotate: -15 }}
                whileHover={{ scale: 1.05, zIndex: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-1/2 left-[-30%] -translate-y-1/2 w-[160px] h-[220px]"
              >
                <Link to="/soluzioni/analisi:-fatturazione-e-reportistica" className="bg-[var(--theme-primary)] hover:bg-[var(--hover-purple)] transition-colors rounded-2xl p-5 shadow-xl flex flex-col items-center justify-center gap-4 w-full h-full cursor-pointer no-underline group border border-white/10">
                  <div className="bg-white/20 text-white p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <PieChart size={32} />
                  </div>
                  <span className="text-white text-lg font-bold text-center">Analisi</span>
                </Link>
              </motion.div>

              {/* Organizzazione (Bottom) */}
              <motion.div 
                initial={{ opacity: 0, y: 20, rotate: -15 }}
                whileInView={{ opacity: 1, y: 0, rotate: -15 }}
                whileHover={{ scale: 1.05, zIndex: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[160px] h-[220px]"
              >
                <Link to="/soluzioni/organizzazione:-agenda-&-prenotazioni" className="bg-[var(--theme-primary)] hover:bg-[var(--hover-purple)] transition-colors rounded-2xl p-5 shadow-xl flex flex-col items-center justify-center gap-4 w-full h-full cursor-pointer no-underline group border border-white/10">
                  <div className="bg-white/20 text-white p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <Calendar size={32} />
                  </div>
                  <span className="text-white text-lg font-bold text-center">Organizzazione</span>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-b border-[var(--border-color)] bg-[var(--bg-card)]">
        <div className="max-w-[1300px] mx-auto px-6">
          <p className="text-[var(--text-muted)] text-sm font-medium mb-6 text-center md:text-left">Scelto da</p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
            <div className="h-8 w-32 bg-gray-300 rounded"></div>
            <div className="h-8 w-32 bg-gray-300 rounded"></div>
            <div className="h-8 w-32 bg-gray-300 rounded"></div>
            <div className="h-8 w-32 bg-gray-300 rounded"></div>
            <div className="h-8 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="mb-16">
          <span className="text-[var(--theme-accent)] font-serif italic text-sm font-bold uppercase tracking-wider">Perché noi?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-4">Abbiamo la soluzione giusta.</h2>
          <p className="text-[var(--text-muted)] max-w-2xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: BarChart3, title: "Analisi Avanzate", desc: "Prendi decisioni basate sui dati con analisi complete, rivelando opportunità chiave per la crescita." },
            { icon: Settings, title: "Controlla i tuoi Processi", desc: "Gestisci e traccia i tuoi dati in modo efficiente con prestazioni avanzate e operazioni ottimizzate." },
            { icon: Users, title: "Comunicazione Senza Barriere", desc: "Adattati a tutte le comunità con strumenti integrati per una comunicazione chiara e diretta." },
            { icon: Zap, title: "Visualizza la Crescita", desc: "Connetti i tuoi dati visivamente, trasformando i progressi in grafici chiari e intuitivi." }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-hover)] flex items-center justify-center text-[var(--theme-primary)]">
                <feature.icon size={20} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">{feature.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academy Row */}
      <section className="py-24 px-6 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-[var(--theme-primary)]/10 flex items-center justify-center text-[var(--theme-primary)] mb-6">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
              Scopri l'Academy di Alfadocs
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 max-w-lg">
              Risorse, guide, webinar e casi studio per aiutarti a sfruttare al massimo il potenziale del tuo studio medico e rimanere sempre aggiornato.
            </p>
            <Link to="/academy" className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-8 py-4 rounded-lg font-bold hover:bg-[var(--hover-purple)] transition-colors">
              Esplora le risorse
            </Link>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Team learning" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="bg-[var(--theme-accent)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Nuovo Webinar</span>
                <h3 className="text-2xl font-bold">Come ottimizzare l'agenda del tuo studio</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See the Big Picture */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mb-6">Guarda il Quadro Generale</h2>
            <p className="text-[var(--text-muted)] text-lg mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                "Sincronizza team e progetti per un facile allineamento.",
                "Ottieni una panoramica delle metriche di performance.",
                "Tieni traccia della salute finanziaria per ottimizzare i budget.",
                "Trasforma i dati in informazioni utili che guidano la tua comunicazione."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 text-[var(--theme-primary)]">
                    <ArrowRight size={20} />
                  </div>
                  <p className="text-[var(--text-main)] font-medium">{item}</p>
                </li>
              ))}
            </ul>
            
            <Link to="/soluzioni" className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-8 py-4 rounded-lg font-bold hover:bg-[var(--hover-purple)] transition-colors">
              Scopri di più
            </Link>
          </div>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" 
              alt="Abstract shapes" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Area Table */}
      <section className="py-24 px-6 max-w-[1000px] mx-auto text-center">
        <span className="text-[var(--theme-accent)] font-serif italic text-sm font-bold uppercase tracking-wider">Confronta</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-6">Perché scegliere Alfadocs?</h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-12">
          I nostri strumenti rivoluzionano il tuo modo di lavorare, rendendo ogni compito semplice con un approccio user-friendly alla gestione dei dati.
        </p>
        
        <Link to="/prezzi" className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--hover-purple)] transition-colors mb-16">
          Vedi i Prezzi
        </Link>

        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden text-left shadow-sm">
          <div className="grid grid-cols-3 border-b border-[var(--border-color)] bg-[var(--bg-header-hover)]">
            <div className="p-6 font-bold text-lg text-center border-r border-[var(--border-color)] text-[var(--theme-primary)]">Alfadocs</div>
            <div className="p-6 font-bold text-lg text-center border-r border-[var(--border-color)] text-[var(--text-main)]">Software Tradizionale</div>
            <div className="p-6 font-bold text-lg text-center text-[var(--text-main)]">Carta e Penna</div>
          </div>
          
          {[1, 2, 3, 4, 5, 6].map((row) => (
            <div key={row} className="grid grid-cols-3 border-b border-[var(--border-color)] last:border-0">
              <div className="p-4 border-r border-[var(--border-color)] flex items-center gap-3 bg-white">
                <CheckCircle2 size={18} className="text-[var(--theme-primary)]" />
                <span className="text-[var(--text-main)] font-medium text-sm">Dettaglio funzionalità {row}</span>
              </div>
              <div className="p-4 border-r border-[var(--border-color)] flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[var(--text-muted)] opacity-50" />
                <span className="text-[var(--text-muted)] text-sm">Alternativa {row}</span>
              </div>
              <div className="p-4 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[var(--text-muted)] opacity-50" />
                <span className="text-[var(--text-muted)] text-sm">Opzione {row}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop" 
              alt="Balancing stones" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pl-0 lg:pl-12">
            <blockquote className="text-3xl md:text-4xl font-medium text-[var(--theme-primary)] leading-tight mb-8">
              "Ero scettico, ma Alfadocs ha completamente trasformato il modo in cui gestisco il mio studio. Le visualizzazioni dei dati sono chiare e intuitive, e la piattaforma è facilissima da usare."
            </blockquote>
            <div>
              <p className="font-bold text-[var(--text-main)]">Dr. Mario Rossi</p>
              <p className="text-[var(--theme-accent)] text-sm font-serif italic">Direttore Sanitario</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Your Success */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[var(--border-color)] pb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)]">Traccia il tuo Successo</h2>
          <Link to="/soluzioni" className="hidden md:inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-6 py-2 rounded-lg font-bold hover:bg-[var(--hover-purple)] transition-colors">
            Scopri di più
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {[
            { num: "01", title: "Inizia Subito", desc: "Registrati e configura il tuo account in pochi minuti. È facile e veloce iniziare." },
            { num: "02", title: "Connetti e Configura", desc: "Integra le tue fonti di dati e personalizza la dashboard in base alle tue esigenze." },
            { num: "03", title: "Fai Crescere il tuo Studio", desc: "Traccia le performance e raggiungi i tuoi obiettivi strategici con insight azionabili." }
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="text-7xl font-light text-[var(--border-color)] mb-6">{step.num}</div>
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">{step.title}</h3>
              <p className="text-[var(--text-muted)]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden aspect-[21/9] w-full">
          <img 
            src="https://images.unsplash.com/photo-1506744626753-143b66b14b5e?q=80&w=2070&auto=format&fit=crop" 
            alt="Winding road" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Contattaci</h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-10 text-lg">
          Prenota una demo per vedere come la nostra piattaforma può aiutarti a raggiungere i tuoi obiettivi e trasformare il tuo studio.
        </p>
        <Link to="/prenotazione/prova-subito" className="inline-flex items-center justify-center bg-[var(--theme-accent)] text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-[var(--hover-purple)] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
          Parliamone
        </Link>
      </section>
    </div>
  );
}

