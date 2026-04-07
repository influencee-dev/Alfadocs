import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Solution() {
  const { category, id } = useParams();

  // Helper to format the ID into a readable title
  const formatTitle = (str: string) => {
    if (!str) return 'Soluzione';
    // Replace special sequences with spaces
    let cleanStr = str.replace(/:-/g, ': ').replace(/---/g, ' — ').replace(/-/g, ' ').replace(/&/g, ' & ');
    // Capitalize words
    return cleanStr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').replace(/\s+/g, ' ').trim();
  };

  // Determine the title based on whether it's a sub-solution or a main category
  const title = formatTitle(id || category || '');
  
  // Only use the sub-solution hero if both category and id are present (e.g., /soluzioni/gestione/cartella-clinica)
  const isSubSolution = !!category && !!id;

  return (
    <div className="w-full">
      {/* Hero Section */}
      {isSubSolution ? (
        <section className="pt-32 pb-24 px-6 bg-[var(--theme-primary)] text-white text-center">
          <div className="max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[var(--theme-accent)] font-serif italic text-sm font-bold uppercase tracking-wider mb-4 block">
                {formatTitle(category || '')} / {title}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-white/80 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Scopri come la nostra soluzione di {title.toLowerCase()} può rivoluzionare il modo in cui gestisci il tuo studio medico ogni giorno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/prenotazione/prova-subito" className="inline-flex items-center justify-center bg-white text-[var(--theme-primary)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Richiedi una Demo
                </Link>
                <Link to="/prezzi" className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  Vedi Prezzi
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="pt-24 pb-16 px-6 max-w-[1300px] mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[var(--theme-accent)] font-serif italic text-sm font-bold uppercase tracking-wider mb-4 block">
                Soluzioni / {title}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--theme-primary)] mb-6 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-[var(--text-muted)] text-lg mb-10 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/prenotazione/prova-subito" className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-8 py-4 rounded-lg font-bold hover:bg-[var(--hover-purple)] transition-colors">
                  Richiedi una Demo
                </Link>
                <Link to="/prezzi" className="inline-flex items-center justify-center bg-transparent border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] px-8 py-4 rounded-lg font-bold hover:bg-[var(--bg-hover)] transition-colors">
                  Vedi Prezzi
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[var(--theme-accent)] rounded-[32px] opacity-20 -z-10 transform translate-y-4 translate-x-4"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-[var(--bg-card)] border border-[var(--card-border)] aspect-square lg:aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt={`${title} Preview`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features List */}
      <section className="py-24 px-6 bg-[var(--bg-header-hover)]">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mb-6">Perché scegliere {title}?</h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[var(--bg-card)] p-8 rounded-2xl shadow-sm border border-[var(--card-border)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-hover)] flex items-center justify-center text-[var(--theme-primary)] mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-4">Vantaggio Competitivo {item}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-[var(--theme-primary)] mb-6">Ottimizza il tuo flusso di lavoro</h2>
            <p className="text-[var(--text-muted)] text-lg mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Nemo enim ipsam voluptatem quia voluptas",
                "Sit aspernatur aut odit aut fugit",
                "Sed quia consequuntur magni dolores eos",
                "Qui ratione voluptatem sequi nesciunt"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <ArrowRight size={18} className="text-[var(--theme-accent)]" />
                  <span className="text-[var(--text-main)] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--theme-primary)]">Pronto a trasformare il tuo studio?</h2>
          <p className="text-[var(--text-muted)] text-lg mb-10">
            Unisciti a migliaia di professionisti che hanno già scelto Alfadocs per semplificare la loro gestione quotidiana.
          </p>
          <Link to="/prenotazione/prova-subito" className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[var(--hover-purple)] transition-colors">
            Inizia la Prova Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
