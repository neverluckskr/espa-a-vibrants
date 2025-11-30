import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface EraCardProps {
  title: string;
  period: string;
  description: string;
  image: string;
  reverse?: boolean;
  presenter?: string;
}

const EraCard = ({ title, period, description, image, reverse = false, presenter }: EraCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-20`}
    >
      <div className="w-full md:w-1/2">
        <Card className="relative overflow-hidden shadow-spanish hover:shadow-spanish/50 transition-shadow duration-300">
          <img 
            src={image} 
            alt={title}
            className="w-full h-80 object-cover"
          />
        </Card>
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="inline-block px-4 py-2 rounded-lg font-bold bg-[#2a1f18]/70 text-spanish-red border border-amber-900/30 backdrop-blur-sm">
            {period}
          </div>
          {presenter && (
            <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#302419]/80 backdrop-blur-sm border border-amber-900/30 shadow-soft text-sm font-medium text-amber-100/90">
              <span className="w-2 h-2 rounded-full bg-spanish-red shadow-spanish/40" />
              <span className="text-foreground/90">
                {presenter}
              </span>
            </div>
          )}
        </div>
        <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient-spanish">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default EraCard;
