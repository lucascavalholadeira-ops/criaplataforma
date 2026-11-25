import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 30 = miniaturas borradas da prévia dos materiais; 75 = padrão
    qualities: [30, 75],
  },
};

export default nextConfig;
