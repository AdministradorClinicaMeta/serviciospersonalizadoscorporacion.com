import { motion } from "framer-motion";
import { companies } from "@/constants/index";

export default function CompaniesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
      key="companies"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={containerVariants}
      className="space-y-12"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl md:text-6xl font-black text-black mb-4 uppercase">
          Nuestras Empresas
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Las unidades de negocio que impulsan nuestro grupo.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
        variants={containerVariants}
      >
        {companies.map((company) => (
          <motion.div
            key={company.id}
            variants={itemVariants}
            className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 flex flex-col"
          >
            <div className="flex-grow flex flex-col">
              <div
                className={`relative mb-4 h-16 md:h-20 flex items-center justify-center`}
              >
                <img
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="text-left space-y-2 flex-grow flex flex-col">
                <>
                  <h3 className="text-base md:text-xl font-bold text-black">
                    {company.name}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm font-medium uppercase">
                    {company.sector}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm mt-auto">
                    {company.description}
                  </p>
                </>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
