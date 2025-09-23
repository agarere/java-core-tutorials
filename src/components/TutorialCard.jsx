import { useEffect, useState } from "react";
import MarkdownReader from './MarkdownReader';

const COL_SIGN = "....."

function TutorialCard({ tutorial }) {
  const [readme, setReadme] = useState(null);
  const [code, setCode] = useState(null);
  const [readmeClasssName, setReadmeClassName] = useState("column is-4");
  const [codeClassName, setCodeClassName] = useState("column is-8");

  useEffect(() => {
    if (tutorial.readme) {
      const readmePath = `${import.meta.env.BASE_URL}/tutorials/${tutorial.path}/${tutorial.readme}`;
      fetch(readmePath) // todo: add cache mechanism
        .then((res) => res.text())
        .then((text) => {
          let t = text.split(COL_SIGN)
          setReadme(t[0])
          if (t.length > 1) {
            setCode(t[1])
            setReadmeClassName("column is-4");
            setCodeClassName("column is-8");
          } else {
            setReadmeClassName("column is-12");
            setCodeClassName("is-hidden");
          }
        });
    }

  }, [tutorial]);

  return (
    <div className="card m-3">
      <header className="card-header">
        <p className="card-header-title">
          {tutorial.title}
        </p>
      </header>

      <div className="card-content">
        <div className="columns">
          <div className={readmeClasssName}>
            <div className="content prose">
              <MarkdownReader text={readme} />
            </div>
          </div>
          <div className={codeClassName}>
            <div className="content prose">
              <MarkdownReader text={code} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialCard