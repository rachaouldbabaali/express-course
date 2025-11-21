import React, { useState } from "react";

export default function CodeBlock({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback method
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (_) {
        // ignore
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className={`relative rounded-md overflow-hidden ${className ?? ""}`}>
      <pre className="bg-black text-white rounded p-3 overflow-auto whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded"
        title="Copy"
      >
        {/* simple copy icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            d="M8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="8"
            y="3"
            width="13"
            height="13"
            rx="2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {copied && (
        <div className="absolute top-10 right-2 bg-white text-slate-900 text-xs px-2 py-1 rounded shadow">
          Copied
        </div>
      )}
    </div>
  );
}
