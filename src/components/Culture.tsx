import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Culture = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
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
          <p className="text-xl text-muted-foreground">
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
            <Card className="p-8">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Література та поезія
              </h3>
              <p className="text-muted-foreground mb-6">
                Період 1918-1939 став часом розквіту іспанської літератури, відомим як "Покоління 27 року" - 
                група блискучих поетів та письменників, що об'єдналися навколо 300-річчя Луїса де Гонгори.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg">Федеріко Гарсіа Лорка</h4>
                    <p className="text-sm text-muted-foreground">
                      Найвідоміший поет періоду. Автор "Циганського романсеро". 
                      Вбитий франкістами на початку війни.
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg">Рафаель Альберті</h4>
                    <p className="text-sm text-muted-foreground">
                      Поет і драматург, активний республіканець, емігрував після поразки.
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg">Луїс Сернуда</h4>
                    <p className="text-sm text-muted-foreground">
                      Поет-модерніст, один з найтонших ліриків свого покоління.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg">Мігель де Унамуно</h4>
                    <p className="text-sm text-muted-foreground">
                      Філософ і письменник "Покоління 98-го", критик і диктатури, і республіки.
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg">Рамон дель Валье-Інклан</h4>
                    <p className="text-sm text-muted-foreground">
                      Драматург і романіст, творець "есперпенто" - гротескного театру.
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold text-lg">Артуро Барея</h4>
                    <p className="text-sm text-muted-foreground">
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
            <Card className="p-8">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Образотворче мистецтво
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-spanish-red to-spanish-gold rounded-full mx-auto mb-4 flex items-center justify-center shadow-spanish">
                    <span className="text-4xl font-display font-bold text-white">P</span>
                  </div>
                  <h4 className="font-bold text-xl mb-2">Пабло Пікассо</h4>
                  <p className="text-sm text-muted-foreground">
                    Творець "Герніки" (1937) - найвідомішої антивоєнної картини у світі, 
                    присвяченої бомбардуванню баскського міста.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-spanish-red to-spanish-gold rounded-full mx-auto mb-4 flex items-center justify-center shadow-spanish">
                    <span className="text-4xl font-display font-bold text-white">D</span>
                  </div>
                  <h4 className="font-bold text-xl mb-2">Сальвадор Далі</h4>
                  <p className="text-sm text-muted-foreground">
                    Лідер сюрреалізму, провокатор і геній. У 1930-ті створив свої найвідоміші роботи.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-spanish-red to-spanish-gold rounded-full mx-auto mb-4 flex items-center justify-center shadow-spanish">
                    <span className="text-4xl font-display font-bold text-white">M</span>
                  </div>
                  <h4 className="font-bold text-xl mb-2">Хоан Міро</h4>
                  <p className="text-sm text-muted-foreground">
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
            <Card className="p-8 bg-gradient-to-br from-card to-muted/30">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Кінематограф та театр
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3">Кіно</h4>
                  <ul className="space-y-2 text-muted-foreground">
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
                  <h4 className="text-xl font-bold mb-3">Театр</h4>
                  <ul className="space-y-2 text-muted-foreground">
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
            <Card className="p-8">
              <h3 className="text-3xl font-display font-bold mb-6 text-spanish-red">
                Музика та фламенко
              </h3>
              <p className="text-muted-foreground mb-4">
                Період став часом визнання фламенко як мистецької форми та розвитку класичної музики.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold">Мануель де Фалья</h4>
                    <p className="text-sm text-muted-foreground">
                      Композитор, що поєднував класичну музику з іспанським фольклором
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold">Андрес Сеговія</h4>
                    <p className="text-sm text-muted-foreground">
                      Легендарний гітарист, що підніс класичну гітару до концертного рівня
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold">Карлос Ґардель</h4>
                    <p className="text-sm text-muted-foreground">
                      Король танго, хоча і аргентинець, але дуже популярний в Іспанії
                    </p>
                  </div>
                  <div className="border-l-4 border-spanish-red pl-4">
                    <h4 className="font-bold">Відродження фламенко</h4>
                    <p className="text-sm text-muted-foreground">
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
