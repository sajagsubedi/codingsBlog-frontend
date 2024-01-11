import React, { useEffect, useState, useContext } from "react";
import { Header, Footer, Alert, ScrollTopBtn } from "./Components/index";
import {
  Home,
  BlogsPage,
  ErrorPage,
  Login,
  Signup,
  Profile,
} from "./Pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogContext, GlobalContext } from "./context/index";
import LoadingBar from "react-top-loading-bar";
import GlobalStyle from "./styles/GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";

export default function App() {
  const { globalBlogs, fetchGlobalBlogs } = useContext(BlogContext);
  const { progress, theme } = useContext(GlobalContext);
  useEffect(() => {
    fetchGlobalBlogs();
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoadingBar
          height={3}
          progress={progress}
          color={theme.colors.secondaryTheme}
        />
        <section className="globalSection">
          <ScrollTopBtn />
          <Header />
          <Alert />
          <Routes>
            <Route exact path="/" element={<Home fetchType="static" />} />

            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact path="profile" element={<Profile />} />
                <Route
                  exact
                  path="/:category/:blogId/"
                  element={<BlogsPage/>}
                />
                <Route
                  exact
                  path="/:category"
                  element={<Home fetchType="dynamic"/>}
                />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </section>
      </ThemeProvider>
    </BrowserRouter>
  );
}
