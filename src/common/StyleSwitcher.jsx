import React, { useEffect, useState } from "react";
import "./StyleSwitcher.css";

const themes = [
  {  colorClass: "color-1" },
  { colorClass: "color-2" },
  {  colorClass: "color-3"},
  {  colorClass: "color-4"},
  {  colorClass: "color-5" },
];

const StyleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("color-1");

  const toggleSwitcher = () => {
    setIsOpen((prev) => !prev);
  };

  const setActiveStyle = (color) => {
    setActiveTheme(color);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    themes.forEach((theme) => {
      let linkTag = document.querySelector(`link[title="${theme.title}"]`);
      if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.rel = "stylesheet";
        linkTag.href = theme.href;
        linkTag.title = theme.title;
        linkTag.disabled = theme.title !== activeTheme;
        document.head.appendChild(linkTag);
      } else {
        linkTag.disabled = theme.title !== activeTheme;
      }
    });
  }, [activeTheme]);

  return (
    <div className={`style-switcher ${isOpen ? "open" : ""}`}>
      <div className="s-icon style-switcher-toggler" onClick={toggleSwitcher}>
        <i className="fas fa-cog fa-spin"></i>
      </div>

      <h4>Theme Colors</h4>
      <div className="colors">
        {themes.map((theme) => (
          <span
            key={theme.title}
            className={theme.colorClass}
            onClick={() => setActiveStyle(theme.title)}
            style={{ cursor: "pointer" }}
            title={theme.title}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;
