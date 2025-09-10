import { useEffect } from 'react'
import TutorialCard from './TutorialCard'

const TutorialPage = ({ tutorials }) => {
  useEffect(() => {
  }, [tutorials]);

  return (
    <>
      { 
        tutorials?.map(tutorial => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
          />
        ))
      }
    </>
  )
}

export default TutorialPage