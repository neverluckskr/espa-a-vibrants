import { motion } from "framer-motion";

const events = [
  {
    year: "1918",
    title: "Послевоенный кризис",
    description: "Испания остается нейтральной в Первой мировой войне, но сталкивается с экономическими и социальными проблемами"
  },
  {
    year: "1923",
    title: "Диктатура Примо де Риверы",
    description: "Генерал Мигель Примо де Ривера устанавливает военную диктатуру с одобрения короля Альфонсо XIII"
  },
  {
    year: "1931",
    title: "Вторая Испанская Республика",
    description: "Падение монархии и провозглашение республики после муниципальных выборов"
  },
  {
    year: "1936",
    title: "Начало Гражданской войны",
    description: "Военный мятеж под руководством генерала Франко против республиканского правительства"
  },
  {
    year: "1939",
    title: "Победа националистов",
    description: "Окончание Гражданской войны и установление диктатуры Франко"
  }
];

const Timeline = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-gradient-spanish">
            Хронология событий
          </h2>
          <p className="text-xl text-muted-foreground">
            Ключевые моменты периода 1918-1939
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-32 pb-12 border-l-2 border-spanish-red last:border-transparent"
            >
              <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-spanish-red shadow-spanish" />
              
              <div className="md:absolute md:left-0 md:top-0 mb-2 md:mb-0">
                <span className="inline-block bg-spanish-red text-white px-4 py-2 rounded-lg font-bold text-lg shadow-spanish">
                  {event.year}
                </span>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-spanish transition-shadow duration-300">
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
