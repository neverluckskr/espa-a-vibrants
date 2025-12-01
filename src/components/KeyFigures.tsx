import { motion } from "framer-motion";
import FigureCard from "@/components/FigureCard";
import { figures } from "@/data/figures";

const KeyFigures = () => {
  const firstGroup = figures.slice(0, 4);
  const secondGroup = figures.slice(4);

  return (
    <section className="py-24 bg-gradient-to-b from-[#2a1f18] via-[#302419] to-[#35281c]">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-x-0 -top-14 md:-top-16 flex justify-center">
          <div className="flex items-center gap-2 bg-[#35281c]/80 backdrop-blur-sm border border-amber-900/30 px-3 py-1.5 rounded-full shadow-soft text-xs font-semibold text-amber-100/90">
            <span className="w-7 h-7 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold text-sm">
              О
            </span>
            <span>Оля та Нелі · Ключові постаті</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-gradient-spanish">Ключові постаті</h2>
          <p className="text-xl text-amber-200/70">
            Хто вони були, що зробили і чому їхні рішення змінили хід конфлікту.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {firstGroup.map((figure, index) => (
            <motion.div
              key={figure.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <FigureCard figure={figure} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center my-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#2a2118]/90 backdrop-blur-sm border border-amber-900/40 px-4 py-2 rounded-full shadow-spanish text-sm font-semibold text-amber-100">
            <span className="w-8 h-8 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold">
              H
            </span>
            <span>Далі Нелі</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {secondGroup.map((figure, index) => (
            <motion.div
              key={figure.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <FigureCard figure={figure} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
