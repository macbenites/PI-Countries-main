import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import styled from "styled-components";
import Form from "./components/Form";
import Detail from "./components/Detail";

export default function App() {
  return (
    <ContentWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Form />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  min-height: 100vh;
  padding: 1rem 1rem;
`;
