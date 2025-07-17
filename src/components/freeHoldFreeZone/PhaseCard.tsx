import type { FreeHoldPhase } from "@/types/freeHold.types";
import { motion } from "framer-motion";

type PhaseCardProps = {
  phase: FreeHoldPhase;
};

export default function PhaseCard({ phase }: PhaseCardProps) {
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
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex-1 flex flex-col"
    >
      <h3 className="text-3xl font-bold text-black mb-6 text-center">
        {phase.title}
      </h3>
      <ul className="space-y-4">
        {phase.features.map((feature, featureIndex) => {
          const Icon = feature.icon;

          return (
            <li key={featureIndex} className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4">
                <Icon className="w-5 h-5 text-white" />
              </div>

              <div>
                <span className="font-semibold text-gray-800">
                  {feature.title}:
                </span>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
