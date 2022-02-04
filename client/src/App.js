import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import styled from "styled-components";
import Form from "./components/Form";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <ContentWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
`;
