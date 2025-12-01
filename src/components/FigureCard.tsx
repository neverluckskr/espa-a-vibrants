import { Card } from "@/components/ui/card";
import type { Figure } from "@/data/figures";

type FigureCardProps = {
  figure: Figure;
};

const FigureCard = ({ figure }: FigureCardProps) => {
  return (
    <Card className="p-6 h-full hover:shadow-spanish transition-all duration-300 hover:-translate-y-2 bg-[#2a2118]/80 border-amber-900/30">
      {figure.avatar ? (
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-spanish ring-2 ring-spanish-gold/70">
          <img
            src={figure.avatar}
            alt={figure.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-24 h-24 bg-gradient-to-br from-spanish-red to-spanish-gold rounded-full mb-4 flex items-center justify-center shadow-spanish">
          <span className="text-3xl font-display font-bold text-white">{figure.name.charAt(0)}</span>
        </div>
      )}
      <h3 className="text-xl font-display font-bold mb-2 text-amber-100">{figure.name}</h3>
      <div className="text-sm text-spanish-red font-semibold mb-2">{figure.role}</div>
      <div className="text-xs text-amber-200/60 mb-3 font-mono">{figure.period}</div>
      <p className="text-sm text-amber-200/70 leading-relaxed">{figure.description}</p>
    </Card>
  );
};

export default FigureCard;
