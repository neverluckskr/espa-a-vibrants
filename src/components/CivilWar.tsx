import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import mapImage from "@/assets/spain-map.jpg";

const CivilWar = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-gradient-spanish">
            Гражданская война
          </h2>
          <p className="text-xl text-muted-foreground">
            1936-1939: Конфликт, изменивший Испанию
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="overflow-hidden shadow-spanish mb-12">
              <img 
                src={mapImage} 
                alt="Карта Испании периода гражданской войны"
                className="w-full h-96 object-cover"
              />
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-card/50 backdrop-blur">
                <div className="inline-block bg-spanish-red/20 text-spanish-red px-4 py-2 rounded-lg font-bold mb-4">
                  Республиканцы
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Защитники республики
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Поддержка левых партий и профсоюзов
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Помощь СССР и интернациональных бригад
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Защита демократических реформ
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Контроль над крупными городами
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
              <Card className="p-8 h-full bg-card/50 backdrop-blur">
                <div className="inline-block bg-spanish-gold/20 text-spanish-red px-4 py-2 rounded-lg font-bold mb-4">
                  Националисты
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Силы Франко
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Военное руководство генерала Франко
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Поддержка фашистской Италии и нацистской Германии
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Традиционалисты, монархисты, церковь
                  </li>
                  <li className="flex items-start">
                    <span className="text-spanish-red mr-2">•</span>
                    Контроль над сельскими районами
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
            className="mt-12"
          >
            <Card className="p-8 bg-gradient-to-br from-card to-muted/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-center">
                Последствия войны
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-spanish-red mb-2">
                    ~500 000
                  </div>
                  <p className="text-muted-foreground">Погибших</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-spanish-red mb-2">
                    36 лет
                  </div>
                  <p className="text-muted-foreground">Диктатура Франко</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-spanish-red mb-2">
                    Сотни тысяч
                  </div>
                  <p className="text-muted-foreground">Беженцев</p>
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
