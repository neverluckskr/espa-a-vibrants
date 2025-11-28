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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <EraCard
            title="Криза монархії"
            period="1918-1923"
            description="Після Першої світової війни Іспанія зіткнулася з серйозними соціальними та економічними проблемами. Зростання анархістського та соціалістичного рухів, колоніальні війни в Марокко та політична нестабільність підривали авторитет монархії Альфонсо XIII. Страйки, терористичні акти та соціальні заворушення стали повсякденністю. Військова катастрофа при Ануалі (1921) остаточно дискредитувала систему."
            image={mapImage}
          />
          
          <EraCard
            title="Диктатура та падіння"
            period="1923-1931"
            description="Генерал Мігель Прімо де Рівера встановив військову диктатуру за підтримки короля. Режим спочатку досяг певних успіхів: завершення Марокканської війни, будівництво інфраструктури, промислове зростання. Однак він не вирішив структурних проблем країни - земельного питання, регіонального сепаратизму, соціальної нерівності. Економічна криза 1929 року призвела до падіння диктатури (1930) і втечі короля (1931)."
            image={republicImage}
            reverse
          />
          
          <EraCard
            title="Друга республіка"
            period="1931-1936"
            description="Проголошення республіки принесло надії на демократичні реформи. Були проведені аграрна реформа, секуляризація освіти, надані права жінкам, впроваджене трудове законодавство. Конституція 1931 року була однією з найпрогресивніших в Європі. Однак поляризація суспільства між лівими та правими силами тільки посилювалася. 'Чорне двохріччя' (1933-1936) призвело до згортання реформ. Перемога Народного фронту в 1936 році спровокувала військовий заколот."
            image={mapImage}
          />
        </div>
      </section>

      <KeyFigures />
      <Economy />
      <Culture />
      <International />
      <CivilWar />
      
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-center text-gradient-spanish">
              Спадщина епохи
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              <p className="text-center italic text-xl mt-8 text-foreground font-display">
                "Той, хто забуває історію, приречений її повторити"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
