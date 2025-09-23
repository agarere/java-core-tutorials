import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./style.css";

const MarkdownReader = ({ text }) => {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
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

export default MarkdownReader