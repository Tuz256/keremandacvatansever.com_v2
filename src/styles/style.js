import theme from '../js/theme';

const styles = {
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

export default styles;