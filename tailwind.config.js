/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        "ink-soft": "#111214",
        silver: "#C0C0C0",
        "silver-dim": "#8A8D93",
        kgreen: { DEFAULT: "#6DBE45", dark: "#4f9430", glow: "#8fe06a" }
      },
      fontFamily: {
        display: ["Orbitron", "system-ui", "sans-serif"],
        body: ["Rajdhani", "system-ui", "sans-serif"]
      },
      boxShadow: { glow: "0 0 24px rgba(109,190,69,.35)" },
      backgroundImage: {
        grid: "linear-gradient(rgba(192,192,192,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(192,192,192,.05) 1px,transparent 1px)"
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite"
      }
    }
  },
  plugins: []
};
