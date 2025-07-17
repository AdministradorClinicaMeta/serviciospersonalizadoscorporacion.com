import type { LucideProps } from "lucide-react";

export type FreeHold = {
  title: string;
  subtitle: string;
  summary: string;
  details: FreeHoldDetails;
  detailsTitle: string;
  detailsContent: string;
  phasesTitle: string;
  phases: FreeHoldPhase[];
};

type FreeHoldDetails = {
  location: string;
  legal: string;
  portProximity: string;
  marketOpportunity: string;
};

export type FreeHoldPhase = {
  title: string;
  features: {
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  }[];
};
