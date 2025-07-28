import { News } from "./components/NewsListing/News.tsx";
import { Advisors } from "./components/AdvisorsListing/Advisors.tsx";
import { Header } from "./components/Header/Header.tsx";
import React, { useState } from "react";

import "./App.css";

type ActiveSection = "home" | "news" | "advisors";

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("home"); // Default to 'home'
  const handleSectionClick = (sectionName: ActiveSection) => {
    setActiveSection(sectionName);
  };

  return (
    <>
      <Header onSectionClick={handleSectionClick} />
      {activeSection === "news" && <News />}
      {activeSection === "advisors" && <Advisors />}
    </>
  );
}

export default App;
