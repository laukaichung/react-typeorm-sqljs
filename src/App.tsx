import React, { FunctionComponent } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import BaseLayout from "./component/base-layout";
import "reflect-metadata";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component }) => {
            return (
              <Route
                key={path}
                path={path}
                element={
                  <BaseLayout>
                    <Component />
                  </BaseLayout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
