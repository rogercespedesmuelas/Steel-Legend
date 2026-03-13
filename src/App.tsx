/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Dumbbell, Flame, MapPin, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1c1c1a] text-white font-sans selection:bg-yellow-400 selection:text-black">
      {/* Fixed Header */}
      <header className="fixed w-full z-50 top-0 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center h-full py-2">
            <img src="logo.png" alt="Steel Legend" className="h-[50px] w-auto object-contain" />
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-8">
            <button className="text-white font-bold tracking-wider uppercase text-sm hover:text-yellow-400 transition-colors">
              Menú
            </button>
            <button className="bg-[#FACC15] text-black font-bold px-6 py-2.5 hover:bg-yellow-300 transition-colors uppercase tracking-wide text-sm">
              Únete Ahora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('fons.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(50%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/75 z-10"></div>

        {/* Central Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-7xl sm:text-8xl lg:text-[130px] leading-[0.85] mb-8 uppercase tracking-tight drop-shadow-2xl">
              <span className="text-[#FACC15] block">STEEL LEGEND</span>
              <span className="text-white block">SALOU</span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-white mb-12 max-w-3xl font-sans font-light leading-relaxed drop-shadow-md">
              No somos un gimnasio más. Somos el templo del hierro en Salou. Entrena duro, supera tus límites y únete a una comunidad que exige resultados.
            </h2>
            <button className="bg-[#FACC15] text-black font-sans font-bold text-lg px-10 py-4 hover:bg-yellow-300 transition-all flex items-center gap-3 group shadow-[0_0_40px_rgba(250,204,21,0.2)] uppercase tracking-wide">
              ÚNETE A LA ÉLITE &rarr;
            </button>
          </motion.div>
        </div>
      </section>

      {/* Personal Training Section */}
      <section className="py-24 bg-zinc-950 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-5xl lg:text-7xl mb-6">ENTRENAMIENTO <span className="text-yellow-400">PERSONAL</span></h2>
            <p className="text-lg text-gray-400 mb-8">
              Nuestros entrenadores no cuentan repeticiones, forjan campeones. Diseñamos planes implacables y a medida para que alcances tu máximo rendimiento sin excusas.
            </p>
            <ul className="space-y-4">
              {[
                "Rutinas 100% personalizadas a tus objetivos.",
                "Seguimiento nutricional y biomecánico.",
                "Motivación extrema y resultados reales."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square lg:aspect-[4/5] bg-zinc-900 border border-white/10 p-8 flex flex-col justify-end overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity mix-blend-luminosity"></div>
            <div className="relative z-10">
              <div className="inline-block bg-yellow-400 text-black font-bold px-4 py-1 mb-4 uppercase text-sm">Coach Élite</div>
              <h3 className="font-display text-3xl">RESULTADOS GARANTIZADOS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl mb-16 text-center">ELIGE TU <span className="text-yellow-400">ARSENAL</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-zinc-900/50 border border-white/10 p-8 hover:border-yellow-400/50 transition-colors flex flex-col">
              <h3 className="font-display text-3xl mb-2 text-gray-300">BÁSICO</h3>
              <div className="text-4xl font-bold mb-6">[Precio]<span className="text-lg text-gray-500 font-normal">/mes</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-gray-400"><Flame className="w-5 h-5 text-yellow-400 shrink-0" /> Acceso a sala de musculación.</li>
                <li className="flex items-start gap-3 text-gray-400"><Flame className="w-5 h-5 text-yellow-400 shrink-0" /> Vestuarios premium.</li>
                <li className="flex items-start gap-3 text-gray-400"><Flame className="w-5 h-5 text-yellow-400 shrink-0" /> App de seguimiento.</li>
              </ul>
              <button className="w-full border border-white/20 py-4 font-bold hover:bg-white hover:text-black transition-colors uppercase">Seleccionar</button>
            </div>

            {/* Tier 2 */}
            <div className="bg-yellow-400 text-black p-8 transform md:-translate-y-4 shadow-[0_0_40px_rgba(250,204,21,0.15)] flex flex-col relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-yellow-400 px-4 py-1 font-bold text-sm uppercase border border-yellow-400">Más Popular</div>
              <h3 className="font-display text-3xl mb-2">HIERRO</h3>
              <div className="text-4xl font-bold mb-6">[Precio]<span className="text-lg text-black/60 font-normal">/mes</span></div>
              <ul className="space-y-4 mb-8 flex-grow font-medium">
                <li className="flex items-start gap-3"><Flame className="w-5 h-5 shrink-0" /> Acceso 24/7.</li>
                <li className="flex items-start gap-3"><Flame className="w-5 h-5 shrink-0" /> Clases dirigidas hardcore.</li>
                <li className="flex items-start gap-3"><Flame className="w-5 h-5 shrink-0" /> 1 sesión de PT al mes.</li>
              </ul>
              <button className="w-full bg-black text-white py-4 font-bold hover:bg-zinc-800 transition-colors uppercase">Seleccionar</button>
            </div>

            {/* Tier 3 */}
            <div className="bg-zinc-900/50 border border-white/10 p-8 hover:border-yellow-400/50 transition-colors flex flex-col">
              <h3 className="font-display text-3xl mb-2 text-gray-300">LEYENDA</h3>
              <div className="text-4xl font-bold mb-6">[Precio]<span className="text-lg text-gray-500 font-normal">/mes</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-gray-400"><Flame className="w-5 h-5 text-yellow-400 shrink-0" /> Todo lo incluido en Hierro.</li>
                <li className="flex items-start gap-3 text-gray-400"><Flame className="w-5 h-5 text-yellow-400 shrink-0" /> Programación personalizada.</li>
                <li className="flex items-start gap-3 text-gray-400"><Flame className="w-5 h-5 text-yellow-400 shrink-0" /> Acceso a zona VIP de recuperación.</li>
              </ul>
              <button className="w-full border border-white/20 py-4 font-bold hover:bg-white hover:text-black transition-colors uppercase">Seleccionar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-yellow-400 text-black px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl mb-16 text-center">NÚMEROS QUE HABLAN <br/>POR SÍ SOLOS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            <div>
              <div className="font-display text-5xl lg:text-7xl mb-2">+1.2K</div>
              <div className="font-bold uppercase tracking-wider text-sm lg:text-base">Leyendas Activas</div>
            </div>
            <div>
              <div className="font-display text-5xl lg:text-7xl mb-2">15</div>
              <div className="font-bold uppercase tracking-wider text-sm lg:text-base">Entrenadores Élite</div>
            </div>
            <div>
              <div className="font-display text-5xl lg:text-7xl mb-2">+10K</div>
              <div className="font-bold uppercase tracking-wider text-sm lg:text-base">Kilos Diarios</div>
            </div>
            <div>
              <div className="font-display text-5xl lg:text-7xl mb-2">10</div>
              <div className="font-bold uppercase tracking-wider text-sm lg:text-base">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="pt-24 pb-12 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Dumbbell className="w-16 h-16 text-yellow-400 mb-8" />
          <h2 className="font-display text-4xl lg:text-6xl mb-6">EL HIERRO TE ESPERA EN SALOU.<br/>¿ESTÁS LISTO?</h2>
          <button className="bg-white text-black font-display text-xl px-10 py-5 hover:bg-gray-200 transition-colors mb-16 uppercase">
            VISÍTANOS HOY
          </button>

          <div className="w-full max-w-md border border-white/10 p-1 flex bg-black mb-16">
            <input 
              type="email" 
              placeholder="Tu email para rutinas exclusivas..." 
              className="bg-transparent border-none outline-none px-4 py-3 flex-grow text-white placeholder:text-gray-600"
            />
            <button className="bg-yellow-400 text-black font-bold px-6 py-3 uppercase text-sm hover:bg-yellow-300 transition-colors">
              Suscribirse
            </button>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Salou, Tarragona, España</span>
            </div>
            <div>© 2026 Steel Legend Salou. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
