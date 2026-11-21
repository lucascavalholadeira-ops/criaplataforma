import type { SVGProps } from "react";

type P = { className?: string };

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const IconeCheck = ({ className = "h-3.5 w-3.5" }: P) => (
  <svg {...base} strokeWidth={3} className={className}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const IconeSeta = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconeColunas = ({ className = "h-[22px] w-[22px]" }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="4" width="5" height="16" rx="1.5" />
    <rect x="10" y="4" width="5" height="11" rx="1.5" />
    <rect x="17" y="4" width="4" height="7" rx="1.5" />
  </svg>
);

export const IconeDownload = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 20h14" />
  </svg>
);

export const IconeGrafico = ({ className = "h-[22px] w-[22px]" }: P) => (
  <svg {...base} className={className}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);

export const IconeInstagram = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const IconeMais = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2.5} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconeMenu = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconePessoa = ({ className = "h-[22px] w-[22px]" }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="4" />
    <path d="M2 21c0-4 3-6 7-6s7 2 7 6M17 11h5" />
  </svg>
);

export const IconeWhatsapp = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
  </svg>
);

export const IconeFechar = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
