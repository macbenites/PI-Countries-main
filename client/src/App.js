import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import Detail from "./components/Detail";

export default function App() {
  return (
    <ContentWrapper>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/home" element={<NavBar />} /> */}
          <Route exact path="/home" element={<Home />} />
          <Route path="/home/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div``;
