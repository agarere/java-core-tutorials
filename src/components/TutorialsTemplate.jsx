import { useState } from 'react'
import { PageConfig } from '../config/PageConfig'

const TutorialsTemplate = ({ children, title, onClickedMenu = () => {} }) => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleMenuClick = (id) => {
    setSelectedMenuId(id);
    onClickedMenu(id);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="columns" style={{ minHeight: "100vh", overflowY: "auto" }}>
      <div
        className={`column is-2 has-background-white-ter ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
        style={{
          transition: "width 0.3s ease",
          overflow: "hidden",
          width: isMenuOpen ? "16.6667%" : "70px",
          position: "relative",
        }}
      >
        <aside className="menu pl-3" style={{ display: isMenuOpen ? "block" : "none" }}>
          <h3 className="subtitle is-3 mt-3 mb-0">{title}</h3>
          <hr style={{ border: "1px solid #ddd", margin: "1rem 0" }} />
          <ul className="menu-list mt-2">
            {PageConfig.map((section, index) => (
              <li
                key={section.id}
                className="mb-2"
                onClick={() => handleMenuClick(section.id)}
              >
                <a
                  href={`#${section.id}`}
                  className={
                    selectedMenuId === section.id
                      ? "mb-2 has-background-primary"
                      : "mb-2"
                  }
                >
                  {section.menuTitle}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <button
          className="button is-primary is-outlined"
          onClick={toggleMenu}
          style={{
            position: "absolute",
            top: "18px",
            right: isMenuOpen ? "30px" : "5px",
            transform: isMenuOpen ? "translateX(50%)" : "none",
            zIndex: 10,
            borderRadius: "4px",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
          }}
        >
          {isMenuOpen ? (
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"<<"}</span>
          ) : (
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>{">>"}</span>
          )}
        </button>
      </div>

      <div className="column">
        {children}
      </div>
    </div>
  );
}

export default TutorialsTemplate