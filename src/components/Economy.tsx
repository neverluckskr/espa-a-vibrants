import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import krizaImage from "@/assets/economy.jpg";

const Economy = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 relative">
        <div className="absolute right-0 -top-4 md:-top-6 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/60 px-3 py-1.5 rounded-full shadow-soft text-xs font-semibold text-foreground/90">
          <span className="w-7 h-7 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold text-sm">
            В
          </span>
          <span>Влад · Економіка</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-gradient-spanish">
            Економіка та суспільство
          </h2>
          <p className="text-xl text-muted-foreground">
            Соціально-економічні трансформації періоду
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Економічна ситуація 1918-1923
              </h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <h4 className="text-xl font-bold mb-3">Проблеми:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Аграрна відсталість - латифундії займали величезні території
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Слабка індустріалізація, переважно в Каталонії та Країні Басків
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Високе безробіття та низькі заробітні плати
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Масова міграція селян до міст та еміграція
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Соціальні рухи:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Потужний анархо-синдикалістський рух (CNT)
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Зростання соціалістичної партії (PSOE) та профспілок
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Масові страйки та соціальні заворушення
                      </li>
                      <li className="flex items-start">
                        <span className="text-spanish-red mr-2">•</span>
                        Конфлікти між робітниками та власниками
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-spanish">
                  <img
                    src={krizaImage}
                    alt="Економічна криза і страйки"
                    className="w-full h-80 md:h-96 object-cover object-[50%_30%]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/25" />
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
            <Card className="p-8">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Період диктатури (1923-1930)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3">Економічні досягнення:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Будівництво інфраструктури: дороги, залізниці, гідроелектростанції
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Промислове зростання, особливо в металургії
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Стабілізація песети та зовнішньої торгівлі
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Завершення Марокканської війни (1927)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Невирішені проблеми:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Аграрна реформа не проведена
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Залежність від іноземного капіталу
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Світова криза 1929 року важко вдарила по економіці
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Зростання державного боргу
                    </li>
                  </ul>
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
            <Card className="p-8 bg-gradient-to-br from-card to-muted/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Реформи Другої Республіки
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-spanish-red pl-4">
                  <h4 className="text-xl font-bold mb-2">Аграрна реформа (1932)</h4>
                  <p className="text-muted-foreground">
                    Експропріація великих латифундій та розподіл землі серед безземельних селян. 
                    Реформа проводилася повільно через опір землевласників.
                  </p>
                </div>
                <div className="border-l-4 border-spanish-red pl-4">
                  <h4 className="text-xl font-bold mb-2">Трудове законодавство</h4>
                  <p className="text-muted-foreground">
                    8-годинний робочий день, право на страйк, соціальне страхування, 
                    охорона материнства та дитинства.
                  </p>
                </div>
                <div className="border-l-4 border-spanish-red pl-4">
                  <h4 className="text-xl font-bold mb-2">Освітня реформа</h4>
                  <p className="text-muted-foreground">
                    Будівництво тисяч нових шкіл, підвищення зарплат вчителям, 
                    секуляризація освіти, розширення доступу до університетів.
                  </p>
                </div>
                <div className="border-l-4 border-spanish-red pl-4">
                  <h4 className="text-xl font-bold mb-2">Права жінок</h4>
                  <p className="text-muted-foreground">
                    Виборче право для жінок (1931), рівність перед законом, 
                    право на розлучення, доступ до професій.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Economy;
