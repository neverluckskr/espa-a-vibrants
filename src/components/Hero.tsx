import { motion } from "framer-motion";
import heroImage from "@/assets/spain-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#1c1510]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-white drop-shadow-lg">
            Іспанія
          </h1>
          <div className="text-4xl md:text-6xl font-display font-bold mb-8 text-gradient-spanish">
            1918 — 1939
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Епоха змін: від монархії до республіки, від надії до громадянської війни
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-black/35 backdrop-blur-sm px-6 py-3 rounded-full text-sm text-white/85 shadow-spanish">
            <span className="uppercase tracking-[0.08em] text-xs text-white/70">Зробили презентацію:</span>
            <span className="font-semibold">Шегеда Влад</span>
            <span className="text-white/50">•</span>
            <span className="font-semibold">Швачко Вероніка</span>
            <span className="text-white/50">•</span>
            <span className="font-semibold">Бердичевська Оля</span>
            <span className="text-white/50">•</span>
            <span className="font-semibold">Шморгун Анна</span>
            <span className="text-white/50">•</span>
<<<<<<< HEAD
            <span className="font-semibold">Шпак Нелі</span>
=======
            <span className="font-semibold">Шпак Нелi</span>
>>>>>>> d9610851954864bd8de5bcc2347cdb7c21ca850d
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/60"
          >
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
