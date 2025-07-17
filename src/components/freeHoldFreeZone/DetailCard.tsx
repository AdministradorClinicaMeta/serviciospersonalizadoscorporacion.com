import { motion } from "framer-motion";

type DetailCardProps = {
  icon: React.ElementType;
  title: string;
  content: string;
};

export default function DetailCard({ icon, title, content }: DetailCardProps) {
  const IconComponent = icon;
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
    >
      <IconComponent className="w-10 h-10 text-black mx-auto mb-4" />
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>

      <p className="text-gray-700 whitespace-pre-line">{content}</p>
    </motion.div>
  );
}
