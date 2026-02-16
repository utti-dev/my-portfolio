module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "rgb(var(--color-brand-dark) / <alpha-value>)",
          accent: "rgb(var(--color-brand-accent) / <alpha-value>)",
          light: "rgb(var(--color-brand-light) / <alpha-value>)",
        },
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        grow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-6px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        pulseSoft: {
          "0%": { transform: "scale(0.85)", opacity: "0.6" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "float-in": "floatIn 0.9s ease-out both",
        grow: "grow 0.9s ease-out both",
        drift: "drift 3s ease-in-out infinite alternate",
        blink: "blink 1.1s steps(2, start) infinite",
        "pulse-soft": "pulseSoft 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};

