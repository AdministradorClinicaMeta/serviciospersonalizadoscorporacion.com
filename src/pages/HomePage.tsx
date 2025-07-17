import { motion } from "framer-motion";
import { Users, Target, Award, MapPin, Mail, Phone } from "lucide-react";
import { companies, mainCompany } from "@/constants/index";
import { Card, CardContent } from "@/components/ui/card";

export function HomePage() {
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

  const companyList = (companies || [])
    .map((c) => c.name.toUpperCase())
    .join(", ");

  const cardClass =
    "bg-white/80 backdrop-blur-md rounded-lg border border-white/20";

  return (
    <motion.section
      key="home"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={containerVariants}
      className="space-y-16"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase leading-tight tracking-tighter">
          {mainCompany.name.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      <motion.div variants={itemVariants}>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl whitespace-pre-line leading-relaxed">
          {`${mainCompany.description}\n\n${companyList}`}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl"
        variants={itemVariants}
      >
        <Card className={cardClass}>
          <CardContent className="p-4 md:p-6 text-center">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-black mx-auto mb-3" />
            <span className="text-2xl md:text-3xl font-bold text-black">
              {companies.length}
            </span>
            <p className="text-sm text-gray-500">Empresas del Grupo</p>
          </CardContent>
        </Card>

        <Card className={cardClass}>
          <CardContent className="p-4 md:p-6 text-center">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-black mx-auto mb-3" />
            <span className="text-2xl md:text-3xl font-bold text-black">
              {mainCompany.experienceYears}
            </span>
            <p className="text-sm text-gray-500">Años de Experiencia</p>
          </CardContent>
        </Card>

        <Card className={cardClass}>
          <CardContent className="p-4 md:p-6 text-center">
            <Award className="w-8 h-8 md:w-10 md:h-10 text-black mx-auto mb-3" />
            <span className="text-2xl md:text-3xl font-bold text-black">
              {mainCompany.successfulProjects}
            </span>
            <p className="text-sm text-gray-500">Proyectos Exitosos</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="text-center" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 uppercase">
          Grupo Empresarial
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 md:gap-12 place-items-center">
          {(companies || []).map((company) => (
            <motion.div
              key={company.id}
              className="flex justify-center items-center w-full h-full"
            >
              {company.logo && (
                <img
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  className="h-28 w-auto object-contain hover:scale-110 transition-all duration-300"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 uppercase text-center">
          Contacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {mainCompany.contact.map((data, index) => (
            <Card className={cardClass} key={index}>
              <CardContent className="p-4 md:p-6 text-center flex flex-col items-center justify-center">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 text-black mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-black">
                  {data.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {data.info}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
