import { useState } from "react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  function handleClick() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <body className={darkMode?"body":"light-body"}>
      <NavBar darkMode={darkMode} handleClick={handleClick}></NavBar>
      <Content darkMode={darkMode}></Content>
    </body>
  );
}
