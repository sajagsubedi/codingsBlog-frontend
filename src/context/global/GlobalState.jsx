import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { theme } from "../../styles/Theme";

export default function GlobalState(props) {
  const host = "https://codings-blog-backend-2mqjv0ec4-sajagsubedi03.vercel.app";
  const categories = ["general", "Webdevelopment", "appdevelopment","cybersecurity"];
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
