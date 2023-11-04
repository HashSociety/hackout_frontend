import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.stafford.vite.capacitor",
  appName: "vite-and-capacitor",
  webDir: "dist",
  server: {
    androidScheme: "http",
    cleartext: true,
    allowNavigation: ["http://192.168.29.208:8000*"],
  },
};

export default config;
