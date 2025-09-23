import { useState, createContext } from 'react'

const AppContext = createContext();

function AppProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const valueToShare = {
    isMenuOpen: isMenuOpen,
    setIsMenuOpen: (value) => {
      setIsMenuOpen(value);
    }
  }

  return (
    <AppContext.Provider value={valueToShare}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };
export default AppContext;