import '../styles/globals.css'
import { useState, useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      {/* <div className="p-4 flex justify-end bg-base-200">
        <button className="btn btn-sm" onClick={() => setDark(!dark)}>
          {dark ? "Light" : "Dark"}
        </button>
      </div> */}
      <Component {...pageProps} />
    </>
  );
}
