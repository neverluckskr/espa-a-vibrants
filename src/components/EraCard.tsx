import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface EraCardProps {
  title: string;
  period: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const EraCard = ({ title, period, description, image, reverse = false }: EraCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-20`}
    >
      <div className="w-full md:w-1/2">
        <Card className="overflow-hidden shadow-spanish hover:shadow-spanish/50 transition-shadow duration-300">
          <img 
            src={image} 
            alt={title}
            className="w-full h-80 object-cover"
          />
        </Card>
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="inline-block bg-secondary/20 text-spanish-red px-4 py-2 rounded-lg font-bold mb-4">
          {period}
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
