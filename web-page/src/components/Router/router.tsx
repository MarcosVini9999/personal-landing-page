import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { PageLayout } from "components";
import { Home } from "pages";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
