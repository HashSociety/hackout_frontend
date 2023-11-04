import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.stafford.vite.capacitor",
  appName: "vite-and-capacitor",
  webDir: "dist",
  server: {
    androidScheme: "http",
    cleartext: true,
    allowNavigation: ["http://127.0.0.1:8000*"],
  },
};

export default config;
