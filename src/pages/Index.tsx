import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import EraCard from "@/components/EraCard";
import KeyFigures from "@/components/KeyFigures";
import Economy from "@/components/Economy";
import Culture from "@/components/Culture";
import CivilWar from "@/components/CivilWar";
import International from "@/components/International";
import republicImage from "@/assets/republic-era.jpg";
import mapImage from "@/assets/spain-map.jpg";
import robinsonImage from "@/assets/robinson.jpg";
import protestImage from "@/assets/protest.jpg";

const Index = () => {
  const finalSequence = [
    { 
      year: "1918", 
      title: "Післявоєнна криза", 
      text: "Хоча Іспанія залишилася нейтральною у Першій світовій війні, її економіка зазнала потужного удару. Інфляція, безробіття та нерівність викликали масові страйки. Робітничий рух набирав силу, анархісти та соціалісти вимагали змін. Монархія Альфонсо XIII втрачала контроль." 
    },
    { 
      year: "1921", 
      title: "Катастрофа при Ануалі", 
      text: "Колоніальна війна в Марокко обернулася трагедією. Близько 8 000 іспанських солдатів загинули в битві при Ануалі проти рифських повстанців. Скандал розкрив корупцію армії та некомпетентність командування. Це стало початком кінця для монархічного режиму." 
    },
    { 
      year: "1923", 
      title: "Диктатура Прімо де Рівери", 
      text: "Генерал Мігель Прімо де Рівера здійснив військовий переворот за мовчазної згоди короля. Він обіцяв порядок, стабільність та модернізацію. Спочатку режим мав успіх — завершив війну в Марокко, будував дороги та залізниці. Але диктатура не вирішила головних проблем країни." 
    },
    { 
      year: "1929", 
      title: "Економічний крах", 
      text: "Світова економічна криза вдарила по Іспанії. Песета знецінилася, експорт впав, безробіття зросло. Прімо де Рівера втратив підтримку армії та бізнесу. У січні 1930 року він пішов у відставку і невдовзі помер в еміграції." 
    },
    { 
      year: "1931", 
      title: "Народження республіки", 
      text: "14 квітня муніципальні вибори принесли перемогу республіканцям у великих містах. Альфонсо XIII втік з країни без зречення. Друга Іспанська Республіка була проголошена під радісні вигуки натовпів. Нова конституція гарантувала свободу слова, права жінок, відокремлення церкви від держави." 
    },
    { 
      year: "1933", 
      title: "Чорне дворіччя", 
      text: "Праві партії перемогли на виборах. Новий уряд почав згортати реформи — повернув землі поміщикам, відновив привілеї церкви, придушив робітничий рух. У жовтні 1934 року шахтарі Астурії підняли повстання, яке було жорстоко придушене військами під командуванням генерала Франко." 
    },
    { 
      year: "1936", 
      title: "Перемога Народного фронту", 
      text: "Лютневі вибори принесли перемогу коаліції лівих сил. Поляризація досягла піку — політичні вбивства, підпали церков, страйки та локаути. 17 липня військові гарнізони в Марокко підняли заколот. Наступного дня заколот поширився на материкову Іспанію. Почалася громадянська війна." 
    },
    { 
      year: "1937", 
      title: "Герніка — символ трагедії", 
      text: "26 квітня німецький легіон «Кондор» знищив баскське місто Герніка. Загинули сотні мирних жителів. Пабло Пікассо відповів на це монументальним полотном, яке стало найвідомішим антивоєнним твором XX століття. Мадрид тримався під облогою, але республіка втрачала територію за територією." 
    },
    { 
      year: "1938", 
      title: "Битва на Ебро", 
      text: "Остання велика наступальна операція республіканців. 115 днів кривавих боїв — найбільша битва війни. Республіка кинула всі резерви, але програла. Каталонія впала, сотні тисяч біженців перетнули французький кордон. Поразка стала неминучою." 
    },
    { 
      year: "1939", 
      title: "Кінець республіки", 
      text: "1 квітня генерал Франко оголосив про перемогу. Близько 500 000 людей загинули у війні. Ще сотні тисяч опинилися в таборах, тюрмах або еміграції. Почалася диктатура, яка триватиме 36 років — до смерті Франко у 1975 році." 
    },
    {
      year: "Епілог",
      title: "Уроки історії",
      text: "Громадянська війна в Іспанії стала прологом до Другої світової. Тут Гітлер і Муссоліні випробували свою зброю, а демократії Заходу продемонстрували фатальну слабкість політики «невтручання». Іспанія заплатила страшну ціну за поляризацію, нетерпимість та нездатність до компромісу. Цей урок залишається актуальним і сьогодні — демократія вимагає постійного захисту, діалогу та поваги до прав людини."
    }
  ];

  const [showFinal, setShowFinal] = useState(false);
  const [finalStep, setFinalStep] = useState(0);

  useEffect(() => {
    if (!showFinal) return;
    setFinalStep(0);
    const id = setInterval(() => {
      setFinalStep((prev) => {
        if (prev >= finalSequence.length - 1) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [showFinal, finalSequence.length]);

  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      
      <section className="py-24 bg-gradient-to-b from-[#2a1f18] via-[#302419] to-[#2a1f18]">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-x-0 -top-14 md:-top-16 flex justify-center">
            <div className="flex items-center gap-2 bg-[#302419]/80 backdrop-blur-sm border border-amber-900/30 px-3 py-1.5 rounded-full shadow-soft text-xs font-semibold text-amber-100/90">
              <span className="w-7 h-7 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold text-sm">
                О
              </span>
              <span>Оля та Аня · Епохи</span>
            </div>
          </div>
          <EraCard
            title="Криза монархії"
            period="1918-1923"
            description="Після Першої світової війни Іспанія зіткнулася з серйозними соціальними та економічними проблемами. Зростання анархістського та соціалістичного рухів, колоніальні війни в Марокко та політична нестабільність підривали авторитет монархії Альфонсо XIII. Страйки, терористичні акти та соціальні заворушення стали повсякденністю. Військова катастрофа при Ануалі (1921) остаточно дискредитувала систему."
            image={protestImage}
            presenter="Оля · Криза монархії"
          />
          
          <EraCard
            title="Диктатура та падіння"
            period="1923-1931"
            description="Генерал Мігель Прімо де Рівера встановив військову диктатуру за підтримки короля. Режим спочатку досяг певних успіхів: завершення Марокканської війни, будівництво інфраструктури, промислове зростання. Однак він не вирішив структурних проблем країни - земельного питання, регіонального сепаратизму, соціальної нерівності. Економічна криза 1929 року призвела до падіння диктатури (1930) і втечі короля (1931)."
            image={republicImage}
            reverse
            presenter="Аня · Диктатура"
          />
          
          <EraCard
            title="Друга республіка"
            period="1931-1936"
            description="Проголошення республіки принесло надії на демократичні реформи. Були проведені аграрна реформа, секуляризація освіти, надані права жінкам, впроваджене трудове законодавство. Конституція 1931 року була однією з найпрогресивніших в Європі. Однак поляризація суспільства між лівими та правими силами тільки посилювалася. 'Чорне двохріччя' (1933-1936) призвело до згортання реформ. Перемога Народного фронту в 1936 році спровокувала військовий заколот."
            image={robinsonImage}
            presenter="Оля · Друга республіка"
          />
        </div>
      </section>

      <KeyFigures />
      <Culture />
      <International />
      <CivilWar />
      
<section className="py-24 bg-gradient-to-b from-[#150e08] via-[#100a06] to-[#0a0604]">
  <div className="container mx-auto px-4 relative">
    <div className="absolute inset-x-0 -top-14 md:-top-16 flex justify-center">
      <div className="flex items-center gap-2 bg-[#1a1208]/80 backdrop-blur-sm border border-amber-900/30 px-3 py-1.5 rounded-full shadow-soft text-xs font-semibold text-amber-100/90">
        <span className="w-7 h-7 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold text-sm">
          В
        </span>
        <span>Влад · Спадщина епохи</span>
      </div>
    </div>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-center text-gradient-spanish">
        Спадщина епохи
      </h2>
      <div className="space-y-6 text-lg text-amber-200/70 leading-relaxed">
        <p>
          Період 1918-1939 років став переломним в історії Іспанії. Від монархічної кризи через 
          надії республіки до трагедії громадянської війни — ці події визначили долю країни на 
          десятиліття вперед і залишили глибокий слід у світовій історії.
        </p>
        <p>
          Громадянська війна в Іспанії стала не просто внутрішнім конфліктом, а прологом до 
          Другої світової війни. Тут випробовувалася нова зброя, відпрацьовувалися тактики, 
          формувалися ідеологічні протистояння, що розділили світ у наступному десятилітті.
        </p>
        <p>
          Культурна спадщина цього періоду залишається безцінною. Твори Лорки, Пікассо, Далі, 
          Бунюеля та інших митців продовжують надихати світ. "Герніка" Пікассо стала вічним 
          символом протесту проти війни та насильства.
        </p>
        <p>
          Диктатура Франко, що встановилася після перемоги в 1939 році, тривала до 1975 року. 
          Лише після смерті диктатора Іспанія змогла повернутися до демократії. Пам'ять про 
          громадянську війну та її жертви залишається болючою темою в іспанському суспільстві 
          навіть сьогодні.
        </p>
        <p className="text-center italic text-xl mt-8 text-amber-100 font-display">
          "Той, хто забуває історію, приречений її повторити"
        </p>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowFinal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                       bg-black/30 backdrop-blur-md
                       text-white/90 font-medium text-sm
                       border border-white/10
                       shadow-[0_0_20px_rgba(0,0,0,0.3)]
                       hover:bg-black/40 hover:text-white
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            Закінчити презентацію
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Netflix-style Documentary Ending */}
      <AnimatePresence>
        {showFinal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="absolute inset-0 bg-black" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black via-black/98 to-black/95"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
            
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            <motion.div 
              className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-black z-10"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-black z-10"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-900/10 rounded-full blur-[100px]" />
            </div>

            <motion.button
              onClick={() => setShowFinal(false)}
              className="absolute top-20 md:top-28 right-6 md:right-12 z-20 text-white/40 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
              
              <motion.div 
                className="absolute left-6 md:left-12 top-28 bottom-28 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <div className="absolute left-4 md:left-8 top-28 bottom-28 flex flex-col justify-between py-4">
                {finalSequence.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-center gap-3 transition-all duration-700 ${
                      idx === finalStep ? 'opacity-100' : idx < finalStep ? 'opacity-30' : 'opacity-10'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: idx <= finalStep ? (idx === finalStep ? 1 : 0.3) : 0.1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      idx === finalStep ? 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]' : 'bg-white/30'
                    }`} />
                    <span className={`text-xs md:text-sm font-mono tracking-wider transition-colors duration-500 ${
                      idx === finalStep ? 'text-amber-500' : 'text-white/30'
                    }`}>
                      {item.year}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="ml-24 md:ml-40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={finalStep}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="min-h-[50vh] flex flex-col justify-center"
                  >
                    <motion.div 
                      className="flex items-center gap-4 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div className="h-px w-12 bg-gradient-to-r from-amber-500/80 to-transparent" />
                      <span className="text-amber-500/90 text-sm md:text-base font-light tracking-[0.3em] uppercase">
                        {finalStep === finalSequence.length - 1 ? 'Епілог' : `Розділ ${finalStep + 1}`}
                      </span>
                    </motion.div>

                    <motion.div
                      className="text-white/20 text-6xl md:text-8xl font-bold font-mono mb-4 tracking-tight"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                    >
                      {finalSequence[finalStep].year}
                    </motion.div>

                    <motion.h2
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                    >
                      {finalSequence[finalStep].title}
                    </motion.h2>

                    <motion.p
                      className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      {finalSequence[finalStep].text}
                    </motion.p>

                    <motion.div
                      className="mt-12 h-px w-32 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </motion.div>
                </AnimatePresence>

                <motion.div 
                  className="absolute bottom-20 md:bottom-28 left-24 md:left-40 right-6 md:right-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((finalStep + 1) / finalSequence.length) * 100}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-white/40 text-sm font-mono">
                      {finalStep + 1} / {finalSequence.length}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {finalStep === finalSequence.length - 1 && (
              <motion.div
                className="absolute bottom-32 md:bottom-36 right-6 md:right-12 text-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <p className="text-white/30 text-xs md:text-sm uppercase tracking-[0.2em] mb-2">
                  Документальний проєкт
                </p>
                <p className="text-white/50 text-sm md:text-base">
                  Іспанія: Шлях до війни
                </p>
                <p className="text-white/20 text-xs mt-2">
                  1918 — 1939
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
