import {
  Home,
  Info,
  Building2 as BuildingIcon,
  ShieldCheck,
} from "lucide-react";

export const navItems = [
  { path: "/", label: "Inicio", icon: Home },
  { path: "/nosotros", label: "Nosotros", icon: Info },
  { path: "/empresas", label: "Empresas", icon: BuildingIcon },
  { path: "/freehold", label: "FREE HOLD FREE ZONE", icon: ShieldCheck },
];

export const companies = [
  {
    id: 1,
    name: "FREE HOLD FREE ZONE",
    sector: "Zona Franca",
    description:
      "Soluciones estratégicas para empresas que buscan operar bajo un régimen de zona franca, optimizando sus operaciones y beneficios fiscales.",
    logo: "/images/freehold.png",
  },
  {
    id: 2,
    name: "ADDIUVA",
    sector: "Red de Asistencia",
    description:
      "Somos una red de asistencia que ayuda a crear y proveer soluciones asistenciales para empresas y personas a través de la tecnología.",
    logo: "/images/addiuva.png",
  },
  {
    id: 3,
    name: "BIOMICROTECH",
    sector: "Suministros Médicos",
    description:
      "Distribuye suministros médicos desechables en Costa Rica. También vende a empresas privadas y al gobierno costarricense (CCSS). La lista de productos comprende equipos médicos, kits de pruebas de drogas, jeringas, etc.",
    logo: "/images/bmt.png",
  },
  {
    id: 4,
    name: "ENVIROMENTAL PARTNERS",
    sector: "Créditos de Carbono",
    description:
      "Empresa ubicada en International Environmental Partners, LLC, con oficinas en Nueva York. Los países centroamericanos incluyen Honduras, Nicaragua, Panamá y Costa Rica. El negocio se basa en la comercialización de créditos de carbono para protección ambiental.",
    logo: "/images/enviromental-partners.png",
  },
  {
    id: 5,
    name: "COWORKING PLACE AND HEALTH",
    sector: "Inmobiliaria",
    description: "Alquiler de espacios y de oficina.",
    logo: "/images/coworking-place-and-health.png",
  },
  {
    id: 6,
    name: "META 360",
    sector: "Educación Técnica",
    description:
      "Academia virtual que nace como la extensión académica de una corporación con más de 20 años de trayectoria. Nuestro compromiso es formar líderes integrales a través de programas actualizados en áreas clave como negocios, contabilidad y salud mental. Además de ofrecer formación profesional técnica, brindamos atención y capacitación especializada en salud mental, promoviendo el bienestar como parte esencial del crecimiento personal y empresarial.",
    logo: "/images/meta-360.png",
  },
  {
    id: 7,
    name: "SEMBRADORES UNIDOS",
    sector: "Inmobiliaria",
    description:
      "Alquiler de espacios de feria de agricultores, emprendedores y artesanos.",
    logo: "/images/sembradores-unidos.png",
  },
  {
    id: 8,
    name: "IKI CR KRAV MAGA",
    sector: "Defensa Personal",
    description:
      "IKI es una empresa que se especializa en la enseñanza y promoción del Krav Maga, un sistema de defensa personal desarrollado en Israel. El Krav Maga se distingue por su enfoque práctico y efectivo, diseñado para enseñar a las personas a defenderse en situaciones de peligro real.",
    logo: "/images/krav-maga.png",
  },
];

export const mainCompany = {
  name: "SPI SERVICIOS PERSONALIZADOS CORPORACIÓN",
  description:
    "SPI es un grupo empresarial fundado en Costa Rica, con un portafolio diversificado y una sólida presencia en Centroamérica.",
  mission:
    "Ser el grupo empresarial líder en la región, reconocido por nuestra innovación, compromiso con la excelencia y el desarrollo sostenible de las comunidades donde operamos.",
  vision:
    "Impulsar el progreso y el bienestar en Centroamérica a través de nuestras diversas unidades de negocio, generando valor para nuestros clientes, colaboradores y accionistas.",
  presidentMessage:
    "Con una trayectoria de más de 15 años, nuestro grupo se ha consolidado como un referente de confianza y solidez. Miramos hacia el futuro con el compromiso de seguir innovando y generando un impacto positivo en la sociedad.",
  logo: "/images/logo.png",
  experienceYears: 15,
  successfulProjects: "+100",
  values: ["Integridad", "Innovación", "Excelencia", "Compromiso"],
  contact: [
    {
      title: "Ubicación",
      info: "Costa Rica",
    },
    {
      title: "Correo Electrónico",
      info: "administracion@freeholdfreezone.com",
    },
    {
      title: "Teléfono",
      info: "+506 2101-2006",
    },
  ],
};
