import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f1115",
        surface: "#ffffff",
        muted: "#6b7280",
        line: "#e7e7e4",
        brand: "#185fa5",
        brandsoft: "#e6f1fb",
        good: "#0f6e56",
        warn: "#854f0b",
      },
      borderRadius: { lg: "12px", xl: "16px" },
    },
  },
  plugins: [],
};
export default config;
