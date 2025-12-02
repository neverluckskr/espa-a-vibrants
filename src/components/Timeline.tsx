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
    <section className="py-24 bg-gradient-to-b from-[#1c1510] via-[#231a14] to-[#2a1f18]">
      <div className="container mx-auto px-4 relative">

        <div className="absolute inset-x-0 -top-14 md:-top-16 flex justify-center">
          <div className="flex items-center gap-2 bg-[#2a2118]/80 backdrop-blur-sm border border-amber-900/30 px-3 py-1.5 rounded-full shadow-soft text-xs font-semibold text-amber-100/90">
            <span className="w-7 h-7 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold text-sm">
              О
            </span>
            <span>Оля та Влад · Хронологія</span>
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
            Хронологія подій
          </h2>
          <p className="text-xl text-amber-200/70">
            Ключові моменти періоду 1918-1939
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {events.slice(0, 7).map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative pl-12 md:pl-48 pb-12 border-l-2 border-spanish-red"
            >
              <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-spanish-red shadow-spanish" />

              <div className="md:absolute md:left-0 md:top-0 mb-2 md:mb-0 md:-translate-x-1">
                <span className="inline-block bg-spanish-red text-white px-3 py-1.5 rounded-lg font-bold text-base shadow-spanish whitespace-nowrap tracking-tight">
                  {event.year}
                </span>
              </div>

              <div className="bg-[#2a2118]/80 backdrop-blur-sm border border-amber-900/30 p-6 rounded-xl shadow-soft hover:shadow-spanish transition-shadow duration-300">
                <h3 className="text-2xl font-display font-bold mb-3 text-amber-100">
                  {event.title}
                </h3>
                <p className="text-amber-200/70 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Разделитель "Далі Аня" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-12 md:pl-48 pb-12 border-l-2 border-spanish-red"
          >
            <div className="absolute left-0 -translate-x-1/2 w-5 h-5 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50 animate-pulse" />
            
            <div className="flex items-center gap-2 bg-[#2a2118]/90 backdrop-blur-sm border border-amber-500/50 px-4 py-2 rounded-full shadow-lg inline-flex">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-[#1c1510] flex items-center justify-center font-bold text-xs">
                В
              </span>
              <span className="text-sm font-semibold text-amber-100">Далі Влад</span>
            </div>
          </motion.div>

          {events.slice(7).map((event, index) => (
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

              <div className="bg-[#2a2118]/80 backdrop-blur-sm border border-amber-900/30 p-6 rounded-xl shadow-soft hover:shadow-spanish transition-shadow duration-300">
                <h3 className="text-2xl font-display font-bold mb-3 text-amber-100">
                  {event.title}
                </h3>
                <p className="text-amber-200/70 leading-relaxed">
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
