import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function TutorialCard({ tutorial }) {
  const [readme, setReadme] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => { // todo: add cache mechanism
    const readmePath = `/tutorials/${tutorial.id}/${tutorial.readme}`;
    fetch(readmePath)
      .then((res) => res.text())
      .then((text) => setReadme(text));

    const codePath = `/tutorials/${tutorial.id}/${tutorial.code}`;
    fetch(codePath)
      .then((res) => res.text())
      .then((text) => setCode(text));
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
          <div className="column is-4">
            <div className="content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {readme}
              </ReactMarkdown>
            </div>
          </div>

          <div className="column is-8">
            <SyntaxHighlighter
              language="java"
              style={codeTheme}
              showLineNumbers
              codeTagProps={{ style: {
                fontSize: "24px",
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