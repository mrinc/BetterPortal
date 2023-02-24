import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "cloud.betterportal.mobile",
  appName: "BetterPortal",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
