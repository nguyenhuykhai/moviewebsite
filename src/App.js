import "./App.css";
// import Coming from "./components/Coming";
// import Newsletter from "./components/Newsletter";
// import Home from "./components/Home";
// import Movies from "./components/Movies";
// import Nativation from "./components/Nativation";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import { Routes, Route, Link } from "react-router-dom";


import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routers";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Helmet>

      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
