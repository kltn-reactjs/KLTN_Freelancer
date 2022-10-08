import React from "react";
import { Route, useParams, Routes, BrowserRouter } from "react-router-dom";
import OnBoard from "../Screens/OnBoard";

const Navigator: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
