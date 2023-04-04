import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { theme } from "../../styles/Theme";

export default function GlobalState(props) {
  const host = "http://localhost:5000";
  const categories = ["general", "Webdevelopment", "Cryptography"];
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  return (
    <GlobalContext.Provider
      value={{
        host,
        progress,
        setProgress,
        categories,
        loading,
        setLoading,
        theme,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
