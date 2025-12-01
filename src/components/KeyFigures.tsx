import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import alfonsoAvatar from "@/assets/alfonso.jpg";
import migeliAvatar from "@/assets/migeli.jpeg";
import nisetoAvatar from "@/assets/niseto.jpg";
import manuelAvatar from "@/assets/manuel.jpg";
import franciscoAvatar from "@/assets/francisco.jpg";
import juanAvatar from "@/assets/juan.jpg";
import francoAvatar from "@/assets/franco.jpg";
import doloresAvatar from "@/assets/dolores.jpg";

type Figure = {
  name: string;
  role: string;
  period: string;
  description: string;
  avatar?: string;
};

const figures: Figure[] = [
  {
    name: "Альфонсо XIII",
    role: "Король Іспанії",
    period: "1886-1931",
    description: "Останній король до проголошення республіки. Підтримав диктатуру Прімо де Рівери.",
    avatar: alfonsoAvatar
  },
  {
    name: "Мігель Прімо де Рівера",
    role: "Диктатор",
    period: "1923-1930",
    description: "Військовий диктатор за підтримки монархії. Провів модернізацію, але не вирішив структурних проблем.",
    avatar: migeliAvatar
  },
  {
    name: "Нісето Алькала-Самора",
    role: "Перший президент республіки",
    period: "1931-1936",
    description: "Помірний республіканець, перший президент Другої республіки.",
    avatar: nisetoAvatar
  },
  {
    name: "Мануель Асанья",
    role: "Президент республіки",
    period: "1936-1939",
    description: "Інтелектуал і письменник, президент під час Громадянської війни.",
    avatar: manuelAvatar
  },
  {
    name: "Франсіско Ларго Кабальєро",
    role: "Лідер соціалістів",
    period: "Прем'єр 1936-1937",
    description: "Лідер соціалістів, очолював республіканський уряд на початку війни.",
    avatar: franciscoAvatar
  },
  {
    name: "Хуан Негрін",
    role: "Прем'єр-міністр",
    period: "1937-1939",
    description: "Останній прем'єр республіканського уряду, організував опір франкістам.",
    avatar: juanAvatar
  },
  {
    name: "Франсіско Франко",
    role: "Генерал, каудильо",
    period: "1936-1975",
    description: "Лідер військового заколоту, переможець у війні. Диктатор Іспанії до 1975 року.",
    avatar: francoAvatar
  },
  {
    name: "Долорес Ібаррурі",
    role: "Комуністична лідерка",
    period: "Активна 1930-ті",
    description: "\"Ла Пасіонарія\" - натхненний оратор республіканського руху. Відома гаслом \"¡No pasarán!\"",
    avatar: doloresAvatar
  }
];

const KeyFigures = () => {
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
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-gradient-spanish">
            Ключові постаті
          </h2>
          <p className="text-xl text-amber-200/70">
            Люди, що визначили долю Іспанії
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {figures.map((figure, index) => (
            <motion.div
              key={figure.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="p-6 h-full hover:shadow-spanish transition-all duration-300 hover:-translate-y-2 bg-[#2a2118]/80 border-amber-900/30">
                {figure.avatar ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-spanish ring-2 ring-spanish-gold/70">
                    <img
                      src={figure.avatar}
                      alt={figure.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-spanish-red to-spanish-gold rounded-full mb-4 flex items-center justify-center shadow-spanish">
                    <span className="text-3xl font-display font-bold text-white">
                      {figure.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-display font-bold mb-2 text-amber-100">
                  {figure.name}
                </h3>
                <div className="text-sm text-spanish-red font-semibold mb-2">
                  {figure.role}
                </div>
                <div className="text-xs text-amber-200/60 mb-3 font-mono">
                  {figure.period}
                </div>
                <p className="text-sm text-amber-200/70 leading-relaxed">
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
