import { useEffect } from 'react'
import TutorialCard from './TutorialCard'

const TutorialPage = ({ tutorials }) => {
  useEffect(() => {
  }, [tutorials]);

  return (
    <div style={{ maxHeight: '98vh', overflowY: 'auto' }}>
      { 
        tutorials?.map(tutorial => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
          />
        ))
      }
    </div>
  )
}

export default TutorialPage