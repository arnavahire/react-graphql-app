import React from "react";
import "./Header.css";

interface HeaderProps {
  onSectionClick: (sectionName: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSectionClick }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => onSectionClick("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onSectionClick("advisors")}>
              Advisors
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onSectionClick("news")}>
              News
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
