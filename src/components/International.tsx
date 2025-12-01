import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import madridWarImage from "@/assets/battleship.jpg";

const International = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#352416] via-[#2d1e12] to-[#25180e]">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-x-0 -top-14 md:-top-16 flex justify-center">
          <div className="flex items-center gap-2 bg-[#2d1e12]/80 backdrop-blur-sm border border-amber-900/30 px-3 py-1.5 rounded-full shadow-soft text-xs font-semibold text-amber-100/90">
            <span className="w-7 h-7 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold text-sm">
              В
            </span>
            <span>Влад та Вероніка · Міжнародний контекст</span>
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
            Міжнародний контекст
          </h2>
          <p className="text-xl text-amber-200/70">
            Іспанія та світ у 1918-1939 роках
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-[#2a2118]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Нейтралітет у Першій світовій війні
              </h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-amber-100">Переваги:</h4>
                    <ul className="space-y-2 text-amber-200/70">
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Економічне зростання завдяки торгівлі з обома сторонами
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Накопичення золотих резервів
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Розвиток промисловості через постачання воюючим
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-amber-100">Проблеми:</h4>
                    <ul className="space-y-2 text-amber-200/70">
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Інфляція та зростання цін
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Соціальна нерівність посилилася
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Після війни - втрата ринків збуту
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative w-full rounded-xl overflow-hidden shadow-spanish bg-[#1a1410]/40 h-[24rem] md:h-[28rem]">
                  <img
                    src={madridWarImage}
                    alt="Іспанія у світовому контексті"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/30" />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8 bg-gradient-to-br from-[#2a2118]/90 to-[#35281c]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Марокканська війна (1909-1927)
              </h3>
              <p className="text-amber-200/70 mb-6">
                Колоніальний конфлікт у Марокко став тяжким тягарем для Іспанії і одним з факторів політичної кризи.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-spanish-red pl-4">
                  <h4 className="text-xl font-bold mb-2 text-amber-100">Катастрофа при Ануалі (1921)</h4>
                  <p className="text-amber-200/70">
                    Повстанці Абд аль-Кріма завдали нищівної поразки іспанській армії. 
                    Загинуло близько 10 000 солдатів. Цей конфлікт став національною травмою.
                  </p>
                </div>
                <div className="border-l-4 border-spanish-red pl-4">
                  <h4 className="text-xl font-bold mb-2 text-amber-100">Десант в Альуемасі (1925)</h4>
                  <p className="text-amber-200/70">
                    Спільна іспано-французька операція під командуванням Франко призвела до поразки рифів. 
                    Війна завершилася у 1927 році.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-[#2a2118]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Іноземна інтервенція в Громадянську війну
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-spanish-red">Підтримка республіканців</h4>
                  <div className="space-y-4">
                    <div className="bg-[#1a1410]/50 p-4 rounded-lg border border-amber-900/20">
                      <h5 className="font-bold mb-2 text-amber-100">СРСР</h5>
                      <p className="text-sm text-amber-200/70">
                        Постачав зброю, танки, літаки. Надіслав військових радників. 
                        Організував Інтернаціональні бригади. Вимагав оплату іспанським золотом.
                      </p>
                    </div>
                    <div className="bg-[#1a1410]/50 p-4 rounded-lg border border-amber-900/20">
                      <h5 className="font-bold mb-2 text-amber-100">Інтернаціональні бригади</h5>
                      <p className="text-sm text-amber-200/70">
                        Близько 35 000 добровольців з 50+ країн. Письменники Ернест Гемінгвей, 
                        Джордж Орвелл брали участь або підтримували республіку.
                      </p>
                    </div>
                    <div className="bg-[#1a1410]/50 p-4 rounded-lg border border-amber-900/20">
                      <h5 className="font-bold mb-2 text-amber-100">Мексика</h5>
                      <p className="text-sm text-amber-200/70">
                        Єдина держава, що офіційно підтримала республіку. Після війни прийняла 
                        тисячі іспанських біженців.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 text-spanish-red">Підтримка франкістів</h4>
                  <div className="space-y-4">
                    <div className="bg-[#1a1410]/50 p-4 rounded-lg border border-amber-900/20">
                      <h5 className="font-bold mb-2 text-amber-100">Нацистська Німеччина</h5>
                      <p className="text-sm text-amber-200/70">
                        Легіон "Кондор" - 19 000 військових, найсучасніші літаки та танки. 
                        Використовувала війну для випробування зброї. Бомбардування Герніки.
                      </p>
                    </div>
                    <div className="bg-[#1a1410]/50 p-4 rounded-lg border border-amber-900/20">
                      <h5 className="font-bold mb-2 text-amber-100">Фашистська Італія</h5>
                      <p className="text-sm text-amber-200/70">
                        Надіслала 50 000+ солдатів, авіацію, флот. Муссоліні розглядав війну 
                        як спосіб розширення італійського впливу в Середземномор'ї.
                      </p>
                    </div>
                    <div className="bg-[#1a1410]/50 p-4 rounded-lg border border-amber-900/20">
                      <h5 className="font-bold mb-2 text-amber-100">Португалія</h5>
                      <p className="text-sm text-amber-200/70">
                        Режим Салазара підтримував Франко дипломатично та дозволяв транзит 
                        військових вантажів.
                      </p>
                    </div>
                  </div>
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
            <Card className="p-8 bg-gradient-to-br from-[#2a2118]/90 to-[#35281c]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Політика невтручання
              </h3>
              <p className="text-amber-200/70 mb-6">
                Західні демократії (Великобританія, Франція, США) проголосили політику невтручання, 
                яка фактично сприяла перемозі Франко.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-100">Причини:</h4>
                  <ul className="space-y-2 text-amber-200/70">
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Страх перед поширенням комунізму
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Політика умиротворення агресорів
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Небажання провокувати нову європейську війну
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Економічні інтереси великого бізнесу
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-100">Наслідки:</h4>
                  <ul className="space-y-2 text-amber-200/70">
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Республіка не могла купувати зброю легально
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Німеччина та Італія ігнорували угоду
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Демократії втратили довіру антифашистів
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Війна стала "репетицією" Другої світової
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default International;
