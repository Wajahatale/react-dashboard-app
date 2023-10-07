import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import "../assets/scss/Dashboard.scss";
import { useTheme } from "../services/ThemeContext";

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("system");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedFontSize, setSelectedFontSize] = useState("Medium");
  const { theme, toggleTheme } = useTheme();

  const [selectedLight, setSelectedLight] = useState(theme === "light");
  const [selectedDark, setSelectedDark] = useState(theme === "dark");
  const [selectedWhite, setSelectedWhite] = useState(theme === "white");

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setSelectedFontSize(e.target.value);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleThemeChange = (theme) => {
    if (theme === "light") {
      setSelectedLight(true);
      setSelectedDark(false);
      setSelectedWhite(false);
    } else if (theme === "dark") {
      setSelectedLight(false);
      setSelectedDark(true);
      setSelectedWhite(false);
    } else {
      setSelectedLight(false);
      setSelectedDark(false);
      setSelectedWhite(true);
    }
    toggleTheme();
  };

  const themeClass = `theme-${theme}`;

  return (
    <div className={`dashboard-container ${themeClass}`}>
      <Navbar onLogout={logout} />
      <div className="dashboard-card">
        <div className="dashboard-menu">
          <h2>Settings</h2>
          <ul>
            <li
              className={selectedTab === "system" ? "active" : ""}
              onClick={() => handleTabChange("system")}
            >
              <Link>System</Link>
            </li>
            <li
              className={selectedTab === "branding" ? "active" : ""}
              onClick={() => handleTabChange("branding")}
            >
              <Link>Branding</Link>
            </li>
          </ul>
        </div>
        <div className="dashboard-content">
          {selectedTab === "system" && (
            <div>
              <h2>System</h2>
              {/* Language and Fontsize selection */}
              <div className="options">
                <div className="dropdown-section">
                  <h3>Language</h3>
                  <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="dropdown"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                </div>
                <div className="dropdown-section">
                  <h3>Fontsize</h3>
                  <select
                    value={selectedFontSize}
                    onChange={handleFontSizeChange}
                    className="dropdown"
                  >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>
              </div>

              {/* Theme selection */}
              <div className="theme-section">
                <h3>Theme</h3>
                <div className="theme-toggle">
                  <label>
                    <input
                      type="radio"
                      value="light"
                      checked={selectedLight}
                      onChange={() => handleThemeChange("light")}
                    />
                    Light
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="dark"
                      checked={selectedDark}
                      onChange={() => handleThemeChange("dark")}
                    />
                    Dark
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="white"
                      checked={selectedWhite}
                      onChange={() => handleThemeChange("white")}
                    />
                    White
                  </label>
                </div>
              </div>
            </div>
          )}
          {selectedTab === "branding" && (
            <div>
              <h2>Branding Tab Content</h2>
              <p>This is the Branding tab content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
