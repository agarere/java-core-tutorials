import { useState } from 'react'
import TutorialsTemplate from './components/TutorialsTemplate'
import { PageConfig } from './config/PageConfig';
import TutorialPage from './components/TutorialPage';

function App() {
  const [tutorials, setTutorials] = useState(null);

  const handleMenuClick = (id) => {
    const tutorials = PageConfig.find(s => s.id === id)?.tutorials ?? null;
    setTutorials(tutorials);
  }

  return (
    <>
      <TutorialsTemplate
        title="Java Konuları"
        onClickedMenu={handleMenuClick}
      >
        <TutorialPage
          tutorials={tutorials}
        />
      </TutorialsTemplate>
    </>
  )
}

export default App
