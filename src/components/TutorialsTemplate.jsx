import { useState, useContext } from 'react'
import { PageConfig } from '../config/PageConfig'
import NavBar from './NavBar';
import AppContext from '../context/AppContext';

const TutorialsTemplate = ({ children, title, onClickedMenu = () => {} }) => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const { isMenuOpen } = useContext(AppContext);

  const handleMenuClick = (id) => {
    setSelectedMenuId(id);
    onClickedMenu(id);
  }

  return (
    <>
      <NavBar />
      <div className="columns" style={{ minHeight: "100vh" }}>
        <div
          className="column is-2 has-background-white-ter"
          style={{
            transition: "width 0.3s ease",
            overflow: "hidden",
            width: isMenuOpen ? "16%" : "0px",
            padding: isMenuOpen ? "" : "0px",
          }}>
          <aside className="menu p-3">
            {/* <p className="menu-label">{title}</p> */}
            <ul className="menu-list">
              {PageConfig.map((section, index) => (
                <li
                  key={section.id} 
                  className='mb-2'
                  onClick={() => handleMenuClick(section.id)}
                >
                  <a
                    href={`#${section.id}`}
                    className={selectedMenuId === section.id ? 'mb-2 has-background-primary' : 'mb-2'}
                  >
                    {section.menuTitle}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="column">
          { children }
        </div>
      </div>
    </>
  )
}

export default TutorialsTemplate