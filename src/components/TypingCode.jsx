import React, { useState, useEffect } from "react";

const TypingCode = ({ code, speed = 60 }) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    setDisplayedCode("");
    setHasStarted(false);
    setPhase("idle");
  }, [code]);

  useEffect(() => {
    if (hasStarted) return;

    const timeout = setTimeout(() => {
      setHasStarted(true);
      setPhase("typing");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [hasStarted, code]);

  useEffect(() => {
    if (phase === "idle") return;

    if (phase === "typing") {
      if (displayedCode.length < code.length) {
        const timeout = setTimeout(() => {
          setDisplayedCode(code.slice(0, displayedCode.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setPhase("deleting");
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "deleting") {
      if (displayedCode.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedCode(code.slice(0, displayedCode.length - 1));
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setPhase("typing");
        }, 800);
        return () => clearTimeout(timeout);
      }
    }
  }, [phase, displayedCode, code, speed]);

  return (
    <code className="typing-code">
      {displayedCode}
      <span className="typing-cursor blinking"></span>
    </code>
  );
};

export default TypingCode;
