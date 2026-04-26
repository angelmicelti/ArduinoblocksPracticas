/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronRight, 
  BookOpen, 
  Cpu, 
  ExternalLink, 
  CheckCircle2, 
  Filter, 
  Zap, 
  Layout, 
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICES, CATEGORIES, EVALUATION_CRITERIA, Practice } from './data';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPractice, setSelectedPractice] = useState<Practice | null>(null);

  const filteredPractices = useMemo(() => {
    return PRACTICES.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const practicesByCategory = useMemo(() => {
    const groups: Record<string, Practice[]> = {};
    filteredPractices.forEach(p => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    return groups;
  }, [filteredPractices]);

  return (
    <div className="min-h-screen bg-yellow-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 flex flex-col md:flex-row justify-between items-center shadow-lg sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight uppercase leading-none">ArduinoBlocks 4º ESO</h1>
            <p className="text-indigo-200 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Recopilación de Prácticas • Tecnología</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar práctica..."
              className="w-full pl-10 pr-4 py-2 bg-indigo-500 text-white placeholder-indigo-200 border border-indigo-400 rounded-full text-xs font-bold focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <a 
              href="https://practicasarduinoblocks.blogspot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 transition-colors px-4 py-2 rounded-full text-[10px] font-black shadow-md uppercase tracking-wider flex items-center gap-2"
            >
              BLOG <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 bg-white border-r-4 border-indigo-100 p-8 flex flex-col gap-8 lg:overflow-y-auto custom-scrollbar">
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <Layers className="w-4 h-4" /> Grupos Temáticos
            </h3>
            <nav className="flex flex-wrap lg:flex-col gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`p-3 rounded-xl font-black text-xs text-left transition-all border-2 ${
                  selectedCategory === null 
                  ? 'bg-amber-100 text-amber-700 border-amber-200 shadow-sm' 
                  : 'bg-slate-50 text-slate-600 border-transparent hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                1. Todas las prácticas
              </button>
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`p-3 rounded-xl font-black text-xs text-left transition-all border-2 ${
                    selectedCategory === cat 
                    ? 'bg-indigo-100 text-indigo-700 border-indigo-200 shadow-sm' 
                    : 'bg-slate-50 text-slate-600 border-transparent hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  {idx + 2}. {cat}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
            <h4 className="text-[10px] font-black text-indigo-300 mb-3 uppercase tracking-widest">ESTADO DEL CURSO</h4>
            <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden mb-3">
              <div className="w-3/4 bg-indigo-400 h-full rounded-full"></div>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-[10px] font-bold text-slate-400 leading-none">
                {PRACTICES.length} Prácticas<br/>disponibles
              </p>
              <span className="text-lg font-black text-indigo-400 leading-none">75%</span>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <h2 className="text-5xl font-black text-slate-800 tracking-tighter leading-none mb-2">
                {selectedCategory || "Explorar Todo"}
              </h2>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">Selecciona una actividad para ver los detalles y criterios</p>
            </div>
            {searchTerm && (
              <div className="bg-white border-2 border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-xs font-black uppercase shadow-sm">
                Buscando: "{searchTerm}"
              </div>
            )}
          </div>

          {Object.keys(practicesByCategory).length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center border-4 border-dashed border-indigo-50">
              <Info className="w-16 h-16 text-indigo-200 mx-auto mb-4" />
              <h3 className="text-slate-900 font-black text-2xl tracking-tight">Sin coincidencias</h3>
              <p className="text-slate-400 font-bold mt-2 uppercase text-xs tracking-widest">Ajusta tus filtros de búsqueda</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}
                className="mt-8 bg-indigo-600 text-white font-black py-3 px-8 rounded-2xl text-xs uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-lg"
              >
                Limpiar todo
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {(Object.entries(practicesByCategory) as [string, Practice[]][]).map(([category, items]) => (
                <div key={category} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">
                      BLOQUE: {category}
                    </h3>
                    <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {items.map(practice => (
                      <PracticeCard 
                        key={practice.id} 
                        practice={practice} 
                        onClick={() => setSelectedPractice(practice)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Footer Legend */}
      <footer className="bg-white border-t-4 border-slate-100 px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Leyenda de Criterios:</span>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-wider">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div> Programación
            </span>
            <span className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-wider">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div> Montaje Físico
            </span>
            <span className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-wider">
              <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div> Algoritmos
            </span>
          </div>
        </div>
        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] italic">
          Design: Tecnología 4º ESO
        </div>
      </footer>

      {/* Practice Detail Modal */}
      <AnimatePresence>
        {selectedPractice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPractice(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative border-4 border-white"
            >
              <div className="bg-indigo-600 p-10 text-white relative">
                <div className="absolute top-0 right-0 p-10">
                  <button 
                    onClick={() => setSelectedPractice(null)}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"
                  >
                    <Layout className="w-6 h-6 rotate-45" />
                  </button>
                </div>
                
                <span className="bg-pink-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg mb-6 inline-block">
                  {selectedPractice.id}
                </span>
                <h3 className="text-5xl font-black tracking-tighter leading-none mb-4">{selectedPractice.title}</h3>
                <div className="flex items-center gap-3 text-indigo-200">
                  <div className="p-1.5 bg-indigo-500 rounded-lg">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-black uppercase text-[10px] tracking-widest">{selectedPractice.category}</span>
                </div>
              </div>

              <div className="p-10 space-y-10">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Criterios de Evaluación
                  </h4>
                  <div className="grid gap-4">
                    {selectedPractice.criteria.map(cid => {
                      const criterion = EVALUATION_CRITERIA.find(c => c.id === cid);
                      return (
                        <div key={cid} className="flex gap-6 items-start p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 transition-all hover:border-indigo-100">
                          <span className="bg-indigo-600 text-white font-black px-3 py-1 rounded-lg text-[10px] shrink-0 uppercase tracking-tighter">
                            {cid}
                          </span>
                          <p className="text-sm text-slate-600 font-bold leading-relaxed">
                            {criterion?.description || "Criterio tecnológico aplicado a la resolución de problemas."}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href={selectedPractice.blogUrl || "https://practicasarduinoblocks.blogspot.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white font-black py-5 rounded-3xl text-center flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 uppercase text-xs tracking-widest"
                  >
                    Ver en Blog <ExternalLink className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => setSelectedPractice(null)}
                    className="border-4 border-slate-100 text-slate-400 font-black py-5 rounded-3xl hover:bg-slate-50 transition-all uppercase text-xs tracking-widest"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PracticeCard({ practice, onClick }: { practice: Practice, onClick: () => void, key?: string }) {
  // Randomly assign a color accent for variety, or use specific logic
  const accents = ['indigo', 'amber', 'rose', 'blue'];
  const accent = accents[practice.id.length % accents.length];
  const accentClass = `card-accent-${accent}`;

  return (
    <motion.div 
      whileHover={{ y: -8, x: -4 }}
      onClick={onClick}
      className={`group cursor-pointer bg-white p-8 rounded-3xl border-2 border-slate-200 ${accentClass} relative overflow-hidden transition-all shadow-sm hover:shadow-xl`}
    >
      <div className="absolute top-0 right-0 p-3 bg-slate-50 text-slate-400 font-black text-[10px] rounded-bl-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors uppercase tracking-widest">
        {practice.id}
      </div>
      
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
          {practice.title}
        </h3>
        
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6 flex-1">
          {practice.category}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex -space-x-2">
            {practice.criteria.map((c, i) => (
              <div 
                key={c} 
                className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black text-white shadow-sm`}
                style={{ backgroundColor: `var(--color-${accents[i % accents.length]}-500)` }}
                title={c}
              >
                {c.split('.').pop()}
              </div>
            ))}
          </div>
          
          <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            accent === 'indigo' ? 'bg-indigo-600 text-white' :
            accent === 'amber' ? 'bg-amber-500 text-white' :
            accent === 'rose' ? 'bg-rose-500 text-white' :
            'bg-blue-500 text-white'
          }`}>
            Explorar
          </div>
        </div>
      </div>
      
      {practice.isHighlighted && (
        <div className="absolute top-0 left-0">
          <div className="bg-yellow-400 text-yellow-900 text-[8px] font-black px-3 py-1 rounded-br-lg shadow-sm flex items-center gap-1 uppercase tracking-tighter">
            <Zap className="w-2.5 h-2.5 fill-yellow-900" /> Destacada
          </div>
        </div>
      )}
    </motion.div>
  );
}

