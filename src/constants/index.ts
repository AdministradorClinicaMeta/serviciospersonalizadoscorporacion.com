import type { Company, MainCompany } from "@/types/companies.types";
import type { FreeHold } from "@/types/freeHold.types";
import {
  Home,
  Info,
  Building2 as BuildingIcon,
  ShieldCheck,
  DollarSign,
  Building,
  Clock,
  Truck,
} from "lucide-react";

export const navItems = [
  { path: "/", label: "Inicio", icon: Home },
  { path: "/nosotros", label: "Nosotros", icon: Info },
  { path: "/empresas", label: "Empresas", icon: BuildingIcon },
  { path: "/freehold", label: "FREE HOLD FREE ZONE", icon: ShieldCheck },
];

export const companies: Company[] = [
  {
    id: 1,
    name: "FREE HOLD FREE ZONE",
    sector: "Zona Franca",
    description:
      "Primera zona franca en zona de Limón.",
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

export const mainCompany: MainCompany = {
  name: "SPI SERVICIOS PERSONALIZADOS CORPORACIÓN",
  description:
    "SPI es un grupo empresarial fundado en Costa Rica en el año 2003. Desde entonces, ha evolucionado y diversificado su portafolio con la incorporación de distintas empresas, consolidándose como una organización sólida con presencia en Centroamérica. A lo largo de estos años, SPI ha incursionado en múltiples sectores, abarcando desde servicios hasta desarrollos inmobiliarios, lo que le ha permitido generar oportunidades de empleo y crecimiento para cientos de personas en la región. Actualmente, SPI alberga las siguientes empresas:",
  mission:
    "Nuestra misión es desarrollar y fortalecer empresas innovadoras y sostenibles en diversos sectores, generando valor económico y social en Centroamérica. Trabajamos con integridad, compromiso y visión de largo plazo, promoviendo el crecimiento de nuestros colaboradores, aliados y comunidades.",
  vision:
    "Impulsar el progreso y el bienestar en Centroamérica a través de nuestras diversas unidades de negocio, generando valor para nuestros clientes, colaboradores y accionistas.",
  presidentMessage:
    "Como Presidente y fundador de SPI, es un honor liderar este grupo empresarial que desde el año 2003 ha trabajado con determinación, visión y compromiso para construir una organización sólida, diversa y con profundo impacto en Centroamérica. Nuestro crecimiento ha sido el resultado de un enfoque constante en la innovación, la sostenibilidad y la creación de oportunidades para muchas personas. En SPI creemos en el poder de transformar ideas en realidades que generen valor económico y social. Seguiremos trabajando con pasión para fortalecer nuestras empresas, ampliar nuestro alcance regional y dejar una huella positiva en cada comunidad donde operamos.",
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

export const freeholdData: FreeHold = {
  title: "Zona Franca de Propiedad Libre",
  subtitle: "Resumen Ejecutivo",
  summary:
    "La Zona Franca de Propiedad Libre (Freehold Free Zone S.A.) es un ambicioso proyecto de desarrollo inmobiliario de 588,793 m² (145.5 acres), ubicado estratégicamente en Siquirres, Limón, sobre la Ruta 32, conectando la capital con el Puerto de Moín.",
  details: {
    location:
      "Cantón de Siquirres, provincia de Limón, Costa Rica. A 46 millas del Aeropuerto Internacional Juan Santamaría.",
    legal:
      "ID# 3-101-704055, folio real 7-108.626-000, plano catastral L-825983-2002.",
    portProximity:
      "A solo 31 millas del Puerto de Moín, el más grande del país.",
    marketOpportunity:
      "Impulsado por la operación de APM Terminals ($1.000M de inversión) y la creciente necesidad de infraestructura comercial y logística.",
  },
  detailsTitle: "Infraestructura y Oportunidad",
  detailsContent:
    "Este desarrollo busca aprovechar la creciente necesidad de infraestructura comercial, derivada de la construcción y operación de APM Terminals, un puerto de clase mundial que inició operaciones en febrero de 2019, con capacidad para manejar buques de hasta 8,500 TEUs, operando 24/7 los 365 días del año. Gracias a este tipo de megaproyectos de infraestructura, los desarrollos de zonas francas se vuelven vitales, ya que ofrecen incentivos fiscales atractivos para atraer inversión extranjera directa y nacional.",
  phasesTitle: "Desarrollo del Proyecto",
  phases: [
    {
      title: "Fase 1",
      features: [
        {
          title: "Inversión inicial",
          description: "$16.2 millones por parte del desarrollador",
          icon: DollarSign,
        },
        {
          title: "Capital privado o deuda",
          description: "$50 millones adicionales",
          icon: DollarSign,
        },
        {
          title: "Edificios de oficinas",
          description: "Dos de 3000 m² cada uno (36 oficinas)",
          icon: Building,
        },
        {
          title: "Bloques comerciales",
          description: "Diez de 5000 m² cada uno",
          icon: Building,
        },
      ],
    },
    {
      title: "Fase 2",
      features: [
        {
          title: "Período de desarrollo",
          description: "24 meses",
          icon: Clock,
        },
        {
          title: "Inversión estimada",
          description: "$150 millones",
          icon: DollarSign,
        },
        {
          title: "Parque industrial y logístico",
          description: "Tamaño cuatro veces mayor que Fase 1",
          icon: Truck,
        },
      ],
    },
  ],
};
