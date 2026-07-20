import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths : [path.join(__dirname, "app/styles")],
  },
  images : {
    remotePatterns :[
      {
        protocol: "https",
        hostname:"image.tmdb.org",
        pathname : "/t/p/**",
      }
    ]
  },
  typescript : {
    ignoreBuildErrors : true,
  },
  
};

export default nextConfig;
