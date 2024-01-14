import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { theme } from "../../styles/Theme";

export default function GlobalState(props) {
  const host = "https://codings-blog-backend.vercel.app/";
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        host,
        progress,
        setProgress,
        loading,
        setLoading,
        theme,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
