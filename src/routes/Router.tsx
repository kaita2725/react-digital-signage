import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignagePage from "../pages/signage/Signage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
