import ContainerWrapper from "src/components/Container";
import React, { useState, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import "../styles/index.scss";
import {
  useGetLocalStorage,
  useSetLocalStorage,
} from "src/customhooks/getLocalStorage";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setLoading(false);
    console.log(theme, useGetLocalStorage());
  }, [theme]);
  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <div>hello</div>
        </React.Fragment>
      ) : (
        <ContainerWrapper themeSwitcher={(theme) => setTheme(theme)}>
          <Component {...pageProps} />
        </ContainerWrapper>
      )}
    </React.Fragment>
  );
}

export default MyApp;
