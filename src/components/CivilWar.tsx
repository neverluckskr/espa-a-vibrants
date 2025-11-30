import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import mapImage from "@/assets/madridwar.jpg";

const CivilWar = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#25180e] via-[#1d130a] to-[#150e08]">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-x-0 -top-14 md:-top-16 flex justify-center">
          <div className="flex items-center gap-2 bg-[#1d130a]/80 backdrop-blur-sm border border-amber-900/30 px-3 py-1.5 rounded-full shadow-soft text-xs font-semibold text-amber-100/90">
            <span className="w-7 h-7 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold text-sm">
              В
            </span>
            <span>Вероніка · Громадянська війна</span>
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
            Громадянська війна
          </h2>
          <p className="text-xl text-amber-200/70">
            1936-1939: Конфлікт, що змінив Іспанію
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <Card className="overflow-hidden shadow-spanish bg-[#2a2118]/80 border-amber-900/30">
              <img 
                src={mapImage} 
                alt="Карта Іспанії періоду громадянської війни"
                className="w-full h-96 object-cover"
              />
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-[#2a2118]/60 backdrop-blur border-amber-900/30">
                <div className="inline-block bg-spanish-red/20 text-spanish-red px-4 py-2 rounded-lg font-bold mb-4">
                  Республіканці
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-amber-100">
                  Захисники республіки
                </h3>
                <ul className="space-y-3 text-amber-200/70">
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Підтримка лівих партій, соціалістів і комуністів
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Допомога СРСР та Інтернаціональних бригад
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Захист демократичних реформ і лаїцизму
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Контроль над великими містами (Мадрид, Барселона, Валенсія)
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Підтримка баскського та каталонського автономістів
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-[#2a2118]/60 backdrop-blur border-amber-900/30">
                <div className="inline-block bg-spanish-gold/20 text-spanish-red px-4 py-2 rounded-lg font-bold mb-4">
                  Націоналісти
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-amber-100">
                  Сили Франко
                </h3>
                <ul className="space-y-3 text-amber-200/70">
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Військове керівництво генерала Франко
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Підтримка фашистської Італії та нацистської Німеччини
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Традиціоналісти, монархісти, католицька церква
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Контроль над сільськими районами та Північною Африкою
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Підтримка великих землевласників та промисловців
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-8 bg-gradient-to-br from-[#2a2118]/90 to-[#1d130a]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-center text-amber-100">
                Ключові битви та події
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-spanish-red mb-3">Облога Мадрида (1936-1939)</h4>
                  <p className="text-amber-200/70">Столиця героїчно трималася майже всю війну. Гасло "¡No pasarán!" стало символом опору.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-spanish-red mb-3">Бомбардування Герніки (1937)</h4>
                  <p className="text-amber-200/70">Німецька авіація знищила баскське місто. Пікассо увіковічив трагедію у своїй картині.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-spanish-red mb-3">Битва при Гвадалахарі (1937)</h4>
                  <p className="text-amber-200/70">Республіканці завдали поразки італійським військам, що підтримували Франко.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-spanish-red mb-3">Битва на Ебро (1938)</h4>
                  <p className="text-amber-200/70">Найбільша битва війни. Поразка республіканців фактично вирішила долю конфлікту.</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-gradient-to-br from-[#2a2118]/90 to-[#1d130a]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-center text-amber-100">
                Наслідки війни
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-spanish-red mb-2">
                    ~500 000
                  </div>
                  <p className="text-amber-200/70">Загиблих під час війни</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-spanish-red mb-2">
                    ~200 000
                  </div>
                  <p className="text-amber-200/70">Репресованих після війни</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-spanish-red mb-2">
                    ~500 000
                  </div>
                  <p className="text-amber-200/70">Біженців</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-spanish-red mb-2">
                    36 років
                  </div>
                  <p className="text-amber-200/70">Диктатура Франко</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CivilWar;
