import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import mermaid from "mermaid";
import React, { useEffect, useRef } from "react";
import "./style.css";

const DEFAULT_CONFIG = {
  startOnLoad: true,
  theme: 'default',
  logLevel: 'fatal',
  securityLevel: 'strict',
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    curve: 'linear',
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 120,
    height: 30,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false,
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 16,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 4,
    axisFormat: '%Y-%m-%d',
  },
};

const MermaidChart = ({ children }) => {
  mermaid.initialize(DEFAULT_CONFIG);

  useEffect(() => {
    mermaid.contentLoaded();
  }, [children]);

  return (
    <div className="mermaid" style={{ textAlign: 'center' }}>
      {children}
    </div>
  );
};

const MarkdownReader = ({ text }) => {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            if (!inline && match && match[1] === "mermaid") {
              return <MermaidChart>{String(children).replace(/\n$/, "")}</MermaidChart>;
            }
            return !inline && match ? (
              <SyntaxHighlighter
                style={codeTheme}
                language={match[1]}
                PreTag="pre"
                {...props}
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
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {text}
      </ReactMarkdown>
    </>
  )
}

export default MarkdownReader;