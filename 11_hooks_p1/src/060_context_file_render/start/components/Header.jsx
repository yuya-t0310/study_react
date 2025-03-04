import { useTheme, useUpdateTheme } from "../context/ThemeContext";

const Header = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();
  console.log("header");

  const THEMES = ["light", "dark", "red"];

  const changeTheme = (e) => setTheme(e.target.value);

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label key={_theme}>
            <input
              type="radio"
              value={_theme}
              checked={theme === _theme}
              onChange={changeTheme}
            />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
