import { motion } from "framer-motion";
import { mainCompany } from "@/constants/index";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const { values, presidentMessage, mission, vision } = mainCompany;

  const cardClass =
    "bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20";

  return (
    <motion.section
      key="about"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={containerVariants}
      className="space-y-12"
    >
      <motion.div className="text-center" variants={itemVariants}>
        <h1 className="text-4xl md:text-6xl font-black text-black mb-4 uppercase">
          Sobre Nosotros
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nuestra misión, visión y valores son el motor que impulsa nuestro
          crecimiento.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className={cardClass}>
          <CardContent className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 text-center">
              <img
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                alt="Portrait of Luis Diego Garro"
                src="/images/founder.png"
              />
              <h3 className="text-2xl font-bold text-black mt-4">
                Luis Diego Garro
              </h3>
              <p className="text-gray-500">Presidente & Fundador</p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-black mb-4">
                Un Líder con Visión
              </h2>

              <p className="text-gray-700 text-lg whitespace-pre-line">
                {presidentMessage}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={itemVariants}>
          <Card className={cardClass}>
            <CardContent>
              <h2 className="text-2xl font-bold text-black mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-700 text-lg">{mission}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className={cardClass}>
            <CardContent>
              <h2 className="text-2xl font-bold text-black mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gray-700 text-lg">{vision}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card className={cardClass}>
          <CardContent>
            <h2 className="text-2xl font-bold text-black mb-6">
              Nuestros Valores
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/50 rounded-lg p-4 text-center border border-gray-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <span className="text-black font-semibold">{value}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
