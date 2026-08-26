
export const theme = {
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', sans-serif"
  },

  colors: {
    bg: "#181822",
    bgNavBar: "#0a0a0eeb",
    brandColor: "#d900ff",
    brandColor2: "#7fffd4",
  },
}

export const styles = {

  main: {
    background: theme.colors.bg,
    minHeight: "100vh",
    border: "none",
    overflowX: "hidden"
  },

  footer: {
    padding: "2rem",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center",
    fontFamily: theme.fonts.body,
    fontSize: "0.8rem",
    color: "#ffffff40",
  }
}