import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import spainHeroImage from "@/assets/losmejores.jpg";
import picassoAvatar from "@/assets/picasso.jpg";
import daliAvatar from "@/assets/dali.jpg";
import miroAvatar from "@/assets/miro.jpg";

const Culture = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#35281c] via-[#3a2a1a] to-[#352416]">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-x-0 -top-14 md:-top-16 flex justify-center">
          <div className="flex items-center gap-2 bg-[#3a2a1a]/80 backdrop-blur-sm border border-amber-900/30 px-3 py-1.5 rounded-full shadow-soft text-xs font-semibold text-amber-100/90">
            <span className="w-7 h-7 rounded-full bg-spanish-red text-white flex items-center justify-center font-bold text-sm">
              А
            </span>
            <span>Анна · Культура</span>
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
            Культура та мистецтво
          </h2>
          <p className="text-xl text-amber-200/70">
            "Срібна доба" іспанської культури
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
              <div className="relative w-full h-[22rem] md:h-[26rem] rounded-xl overflow-hidden mb-6 shadow-spanish">
                <img
                  src={spainHeroImage}
                  alt="Іспанська культура"
                  className="w-full h-full object-cover object-[50%_32%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/25" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Література та поезія
              </h3>
              <p className="text-amber-200/70 mb-6">
                Період 1918-1939 став часом розквіту іспанської літератури, відомим як "Покоління 27 року" - 
                група блискучих поетів та письменників, що об'єдналися навколо 300-річчя Луїса де Гонгори.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg text-amber-100">Федеріко Гарсіа Лорка</h4>
                    <p className="text-sm text-amber-200/70">
                      Найвідоміший поет періоду. Автор "Циганського романсеро". 
                      Вбитий франкістами на початку війни.
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg text-amber-100">Рафаель Альберті</h4>
                    <p className="text-sm text-amber-200/70">
                      Поет і драматург, активний республіканець, емігрував після поразки.
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg text-amber-100">Луїс Сернуда</h4>
                    <p className="text-sm text-amber-200/70">
                      Поет-модерніст, один з найтонших ліриків свого покоління.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg text-amber-100">Мігель де Унамуно</h4>
                    <p className="text-sm text-amber-200/70">
                      Філософ і письменник "Покоління 98-го", критик і диктатури, і республіки.
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg text-amber-100">Рамон дель Валье-Інклан</h4>
                    <p className="text-sm text-amber-200/70">
                      Драматург і романіст, творець "есперпенто" - гротескного театру.
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg text-amber-100">Артуро Барея</h4>
                    <p className="text-sm text-amber-200/70">
                      Автор трилогії "Викування повстанця" про Громадянську війну.
                    </p>
                  </div>
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
            <Card className="p-8 bg-[#2a2118]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Образотворче мистецтво
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-spanish ring-2 ring-spanish-gold/70">
                    <img
                      src={picassoAvatar}
                      alt="Пабло Пікассо"
                      className="w-full h-full object-cover object-[50%_40%]"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-amber-100">Пабло Пікассо</h4>
                  <p className="text-sm text-amber-200/70">
                    Творець "Герніки" (1937) - найвідомішої антивоєнної картини у світі, 
                    присвяченої бомбардуванню баскського міста.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-spanish ring-2 ring-spanish-gold/70">
                    <img
                      src={daliAvatar}
                      alt="Сальвадор Далі"
                      className="w-full h-full object-cover object-[50%_42%]"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-amber-100">Сальвадор Далі</h4>
                  <p className="text-sm text-amber-200/70">
                    Лідер сюрреалізму, провокатор і геній. У 1930-ті створив свої найвідоміші роботи.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-spanish ring-2 ring-spanish-gold/70">
                    <img
                      src={miroAvatar}
                      alt="Хоан Міро"
                      className="w-full h-full object-cover object-[50%_36%]"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-amber-100">Хоан Міро</h4>
                  <p className="text-sm text-amber-200/70">
                    Майстер абстрактного мистецтва та сюрреалізму, створював поетичні композиції.
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
            <Card className="p-8 bg-gradient-to-br from-[#2a2118]/90 to-[#35281c]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Кінематограф та театр
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-100">Кіно</h4>
                  <ul className="space-y-2 text-amber-200/70">
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Луїс Бунюель - піонер сюрреалістичного кіно ("Андалузький пес", 1929)
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Розвиток іспанського кінематографа, особливо в Барселоні
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Документальні фільми про Громадянську війну
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-100">Театр</h4>
                  <ul className="space-y-2 text-amber-200/70">
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Театр "Ла Баррака" Лорки - пересувний театр для селян
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      Експериментальні вистави та авангардний театр
                    </li>
                    <li className="flex items-start">
                      <span className="text-spanish-red mr-2">•</span>
                      П'єси про соціальні проблеми та політику
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
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-[#2a2118]/80 border-amber-900/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Музика та фламенко
              </h3>
              <p className="text-amber-200/70 mb-4">
                Період став часом визнання фламенко як мистецької форми та розвитку класичної музики.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-amber-100">Мануель де Фалья</h4>
                    <p className="text-sm text-amber-200/70">
                      Композитор, що поєднував класичну музику з іспанським фольклором
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-amber-100">Андрес Сеговія</h4>
                    <p className="text-sm text-amber-200/70">
                      Легендарний гітарист, що підніс класичну гітару до концертного рівня
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-amber-100">Карлос Ґардель</h4>
                    <p className="text-sm text-amber-200/70">
                      Король танго, хоча і аргентинець, але дуже популярний в Іспанії
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-amber-100">Відродження фламенко</h4>
                    <p className="text-sm text-amber-200/70">
                      Лорка та Фалья організували перший фестиваль канте хондо (1922)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
