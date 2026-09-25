"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Academic", "#academic"],
  ["Skills", "#skills"],
  ["Goals", "#goals"],
  ["CV", "#cv"],
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" className="wordmark" aria-label="Suanh Sawm Tung home">
          <span>
            <img src="/profile-circle.png" alt="" />
          </span>
          <span className="wordmark-name">Suanh Sawm Tung</span>
        </a>
        <nav
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
