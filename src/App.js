import React from "react";

import styled from "@emotion/styled";
import Left from "./Sections/section-left";
function App() {
  const Navbar = styled.nav`
    text-align: center;
    font-size: large;
    background-color: #333;
    padding-bottom: 2rem;
  `;
  const Brand = styled.div`
    font-size: 3rem;
    color: greenyellow;
  `;
  const Footer = styled.footer`
    background-color: greenyellow;
    text-align: center;
  `;

  return (
    <div className="main">
      <Navbar>
        <Brand>CV-Generator</Brand>
      </Navbar>
      <Left />
      <Footer>&#169;Copyright. All Rights Reserved. Yan Jiang</Footer>
    </div>
  );
}

export default App;
