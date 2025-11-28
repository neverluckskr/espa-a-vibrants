import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const figures = [
  {
    name: "Альфонсо XIII",
    role: "Король Испании",
    period: "1886-1931",
    description: "Последний король до провозглашения республики"
  },
  {
    name: "Мигель Примо де Ривера",
    role: "Диктатор",
    period: "1923-1930",
    description: "Военный диктатор с поддержкой монархии"
  },
  {
    name: "Мануэль Асанья",
    role: "Президент республики",
    period: "1936-1939",
    description: "Президент во время Гражданской войны"
  },
  {
    name: "Франсиско Франко",
    role: "Генерал",
    period: "1936-1975",
    description: "Лидер националистов и будущий диктатор"
  }
];

const KeyFigures = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-gradient-spanish">
            Ключевые фигуры
          </h2>
          <p className="text-xl text-muted-foreground">
            Люди, определившие судьбу Испании
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {figures.map((figure, index) => (
            <motion.div
              key={figure.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-spanish transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-spanish-red to-spanish-gold rounded-full mb-4 flex items-center justify-center shadow-spanish">
                  <span className="text-3xl font-display font-bold text-white">
                    {figure.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                  {figure.name}
                </h3>
                <div className="text-sm text-spanish-red font-semibold mb-2">
                  {figure.role}
                </div>
                <div className="text-xs text-muted-foreground mb-3 font-mono">
                  {figure.period}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {figure.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
