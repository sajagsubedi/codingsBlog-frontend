import React, { useEffect, useState, useContext } from "react";
import { Header, Footer, Alert } from "./Components/index";
import { Home, BlogsPage, ErrorPage, Login, Signup } from "./Pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogContext, GlobalContext } from "./context/index";
import LoadingBar from "react-top-loading-bar";
import GlobalStyle from "./styles/GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";

export default function App() {
  const { globalBlogs, fetchGlobalBlogs } = useContext(BlogContext);
  const { progress, categories, theme } = useContext(GlobalContext);
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
        <section
          style={{ background: theme.colors.themecolor, minHeight: "90vh" }}
        >
          <Header />
          <Alert />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />

            {globalBlogs.blogs.map((data) => {
              return (
                <Route
                  exact
                  path={`${data.category}/${data._id}`}
                  element={<BlogsPage blogData={data} />}
                  key={data._id}
                />
              );
            })}
            {categories.map((data, i) => {
              return (
                <Route
                  exact
                  path={data}
                  element={<Home category={data} />}
                  key={i}
                />
              );
            })}
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </section>
      </ThemeProvider>
    </BrowserRouter>
  );
}
