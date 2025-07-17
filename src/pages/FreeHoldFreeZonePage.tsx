import { motion } from "framer-motion";
import { Anchor, FileText, MapPin, TrendingUp } from "lucide-react";
import { freeholdData } from "@/constants/index";
import DetailCard from "@/components/freeHoldFreeZone/DetailCard";
import PhaseCard from "@/components/freeHoldFreeZone/PhaseCard";

export default function FreeHoldFreeZonePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <motion.section
      key="freehold"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={containerVariants}
      className="space-y-16"
    >
      <motion.div className="text-center" variants={itemVariants}>
        <h1 className="text-4xl md:text-6xl font-black text-black mb-4 uppercase">
          {freeholdData.title}
        </h1>
        <h2 className="text-2xl font-black text-black mb-4 uppercase">
          {freeholdData.subtitle}
        </h2>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          {freeholdData.summary}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <DetailCard
          icon={MapPin}
          title="Ubicación Estratégica"
          content={freeholdData.details.location}
        />
        <DetailCard
          icon={FileText}
          title="Registro Legal"
          content={freeholdData.details.legal}
        />
        <DetailCard
          icon={Anchor}
          title="Proximidad a Puerto Moín"
          content={freeholdData.details.portProximity}
        />
        <DetailCard
          icon={TrendingUp}
          title="Oportunidad de Mercado"
          content={freeholdData.details.marketOpportunity}
        />
      </div>

      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          {freeholdData.detailsTitle}
        </h2>

        <p className="text-gray-700 text-lg whitespace-pre-line text-center max-w-6xl mx-auto">
          {freeholdData.detailsContent}
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-4xl font-black text-black mb-12 text-center uppercase">
          {freeholdData.phasesTitle}
        </h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {freeholdData.phases.map((phase, index) => (
            <PhaseCard key={index} phase={phase} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
