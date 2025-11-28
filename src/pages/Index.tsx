import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import EraCard from "@/components/EraCard";
import KeyFigures from "@/components/KeyFigures";
import CivilWar from "@/components/CivilWar";
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
            title="Кризис монархии"
            period="1918-1923"
            description="После Первой мировой войны Испания столкнулась с серьезными социальными и экономическими проблемами. Рост анархистского и социалистического движений, колониальные войны в Марокко и политическая нестабильность подрывали авторитет монархии Альфонсо XIII."
            image={mapImage}
          />
          
          <EraCard
            title="Диктатура и падение"
            period="1923-1931"
            description="Генерал Мигель Примо де Ривера установил военную диктатуру при поддержке короля. Несмотря на первоначальную стабильность и экономический рост, режим не смог решить структурные проблемы страны. Экономический кризис 1929 года привел к падению диктатуры и отречению короля."
            image={republicImage}
            reverse
          />
          
          <EraCard
            title="Вторая республика"
            period="1931-1936"
            description="Провозглашение республики принесло надежды на демократические реформы. Были проведены аграрная реформа, секularизация образования, предоставлены права женщинам. Однако поляризация общества между левыми и правыми силами только усиливалась, приведя к политической нестабильности."
            image={mapImage}
          />
        </div>
      </section>

      <KeyFigures />
      <CivilWar />
      
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-gradient-spanish">
            Наследие эпохи
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Период 1918-1939 годов стал переломным в истории Испании. От монархического кризиса через надежды республики к трагедии гражданской войны — эти события определили судьбу страны на десятилетия вперед и оставили глубокий след в мировой истории.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
