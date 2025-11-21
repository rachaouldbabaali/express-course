module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff", // Light background
          100: "#e0f2fe", // Very light blue
          200: "#bae6fd", // Light blue
          300: "#7dd3fc", // Medium light blue
          400: "#38bdf8", // Bright blue
          500: "#0ea5e9", // Primary blue
          600: "#0284c7", // Hover state
          700: "#0369a1", // Active state
          800: "#075985", // Dark blue
          900: "#0c4a6e", // Very dark blue
        },
        accent: {
          500: "#f59e0b", // Amber for CTAs
          600: "#d97706",
        },
        success: {
          500: "#10b981", // Green for completion
          600: "#059669",
        },
      },
      boxShadow: {
        // soft shadow based on primary-500 (14,165,233)
        card: "0 8px 24px rgba(14,165,233,0.06)",
      },
    },
  },
  plugins: [],
};
