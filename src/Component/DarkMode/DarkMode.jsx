import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (darkMode) {
      setIsDarkMode(darkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newIsDarkMode));
    document.body.classList.toggle("dark-mode", newIsDarkMode);
    document.querySelector('body').setAttribute('data-theme', isDarkMode)
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
    </button>
  );
}

export default DarkModeToggle