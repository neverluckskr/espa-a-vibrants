import { motion } from "framer-motion";

const events = [
  {
    year: "1918",
    title: "Післявоєнна криза",
    description: "Іспанія залишається нейтральною у Першій світовій війні, але стикається з економічними та соціальними проблемами. Зростання анархістського руху та страйків."
  },
  {
    year: "1921",
    title: "Катастрофа при Ануалі",
    description: "Марокканські повстанці завдають важкої поразки іспанській армії. Загинуло близько 10 000 солдатів. Це підірвало престиж монархії."
  },
  {
    year: "1923",
    title: "Диктатура Пріморівери",
    description: "Генерал Мігель Прімо де Рівера встановлює військову диктатуру за підтримки короля Альфонсо XIII. Обіцяє відновити порядок і стабільність."
  },
  {
    year: "1929",
    title: "Економічна криза",
    description: "Світова економічна криза досягає Іспанії. Безробіття зростає, соціальна напруга посилюється. Падає популярність диктатури."
  },
  {
    year: "1930",
    title: "Відставка Прімо де Рівери",
    description: "Прімо де Рівера залишає посаду диктатора через втрату підтримки армії та короля. Король призначає нові уряди, але не може стабілізувати ситуацію."
  },
  {
    year: "1931",
    title: "Проголошення Другої Республіки",
    description: "Республіканці перемагають на муніципальних виборах. Король Альфонсо XIII тікає з країни. 14 квітня проголошується Друга Іспанська Республіка."
  },
  {
    year: "1931-1933",
    title: "Двохріччя реформ",
    description: "Перший республіканський уряд проводить прогресивні реформи: аграрна реформа, відділення церкви від держави, надання прав жінкам, освітні реформи."
  },
  {
    year: "1933-1936",
    title: "Чорне двохріччя",
    description: "Правоцентристські та праві сили перемагають на виборах. Багато реформ згортаються. Революція в Астурії 1934 року жорстоко придушена."
  },
  {
    year: "1936 (лютий)",
    title: "Перемога Народного фронту",
    description: "Коаліція лівих партій Народний фронт перемагає на виборах. Поновлення реформ викликає опір правих сил та армії."
  },
  {
    year: "1936 (липень)",
    title: "Військовий заколот",
    description: "17-18 липня частина армії на чолі з генералом Франко піднімає заколот проти республіканського уряду. Початок Громадянської війни."
  },
  {
    year: "1937",
    title: "Інтернаціоналізація конфлікту",
    description: "Італія та Німеччина активно підтримують франкістів. СРСР допомагає республіканцям. Формуються Інтернаціональні бригади добровольців."
  },
  {
    year: "1938",
    title: "Битва на Ебро",
    description: "Найбільша битва війни. Республіканці зазнають важкої поразки. Франкісти розділяють республіканську територію навпіл."
  },
  {
    year: "1939 (березень)",
    title: "Падіння Мадрида",
    description: "Мадрид капітулює. 1 квітня Франко оголошує про перемогу. Встановлюється диктатура, яка триватиме 36 років."
  }
];

const Timeline = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-gradient-spanish">
            Хронологія подій
          </h2>
          <p className="text-xl text-muted-foreground">
            Ключові моменти періоду 1918-1939
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative pl-12 md:pl-48 pb-12 border-l-2 border-spanish-red last:border-transparent"
            >
              <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-spanish-red shadow-spanish" />

              <div className="md:absolute md:left-0 md:top-0 mb-2 md:mb-0 md:-translate-x-1">
                <span className="inline-block bg-spanish-red text-white px-3 py-1.5 rounded-lg font-bold text-base shadow-spanish whitespace-nowrap tracking-tight">
                  {event.year}
                </span>
              </div>

              <div className="bg-card/95 backdrop-blur-sm border border-border/60 p-6 rounded-xl shadow-soft hover:shadow-spanish transition-shadow duration-300">
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
