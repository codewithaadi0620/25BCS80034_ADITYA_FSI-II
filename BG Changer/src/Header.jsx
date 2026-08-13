import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Header() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const applyTheme = (theme) => {
    setCurrentTheme(theme);
  };

  const themeStyles = {
    backgroundColor: currentTheme === "light" ? "#f4f4f4" : "#111827",
    color: currentTheme === "light" ? "#111827" : "#f9fafb",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyles}>
      <h2>Theme: {currentTheme}</h2>

      <button onClick={() => applyTheme(currentTheme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
        <button onClick={() => applyTheme("light")}>Light</button>
        <button onClick={() => applyTheme("dark")}>Dark</button>
        <button onClick={() => applyTheme("red")}>Red</button>
        <button onClick={() => applyTheme("green")}>Green</button>
        <button onClick={() => applyTheme("blue")}>Blue</button>
      </div>
    </div>
  );
}

export default Header;