import { motion } from "framer-motion";
import heroImage from "@/assets/spain-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-background" />
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
            <span className="font-semibold">Шпак Нелi</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12"
        >
          <div className="inline-block bg-card/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-spanish">
            <p className="text-foreground font-medium">
              Період між двома світовими війнами
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
