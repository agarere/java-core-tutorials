import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/androidstudio.css";

function TutorialCard({ tutorial }) {
  const [readme, setReadme] = useState(null);
  const [code, setCode] = useState(null);
  const [readmeClasssName, setReadmeClassName] = useState("column is-4");
  const [codeClassName, setCodeClassName] = useState("column is-8");

  useEffect(() => { // todo: add cache mechanism
    if (tutorial.readme) {
      const readmePath = `${import.meta.env.BASE_URL}/tutorials/${tutorial.id}/${tutorial.readme}`;
      fetch(readmePath)
        .then((res) => res.text())
        .then((text) => setReadme(text));
    }

    if (tutorial.code) {
      const codePath = `${import.meta.env.BASE_URL}/tutorials/${tutorial.id}/${tutorial.code}`;
      fetch(codePath)
        .then((res) => res.text())
        .then((text) => setCode(text));
    }

    if (tutorial.readme && tutorial.code) {
      setReadmeClassName("column is-4");
      setCodeClassName("column is-8");
    } else if (tutorial.readme && !tutorial.code) {
      setReadmeClassName("column is-12");
      setCodeClassName("is-hidden");
    } else if (!tutorial.readme && tutorial.code) {
      setReadmeClassName("is-hidden");
      setCodeClassName("column is-12");
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
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {readme}
              </ReactMarkdown>
            </div>
          </div>

          <div className={codeClassName}>
            <SyntaxHighlighter
              language="java"
              style={codeTheme}
              showLineNumbers
              codeTagProps={{ style: {
                fontSize: "20px",
                fontFamily: "Consolas !important"
              }}}
              customStyle={{
                borderRadius: "8px",
                padding: "16px"
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialCard