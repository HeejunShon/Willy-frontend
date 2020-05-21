import React, { useState } from "react";
import styled from "styled-components";

import Banner from "./Banner/Banner";
import UserInfo from "./UserInfo/UserInfo";
import Summary from "./Summary/Summary";
import Recommendations from "./Recommendations/Recommendations";
import ButtonCart from "./ButtonCart/ButtonCart";
import NavBar from "../../../Component/NavBar/NavBar";

function Result(props) {
  const [click, setClick] = useState(false);

  return (
    <>
      <NavBar props={props} />
      <ResultWrapper>
        <Banner props={"bad"} />
        <UserInfo setClick={setClick} />
        <Summary click={click} setClick={setClick} />
        <Recommendations recommendations={""} />
        <ButtonCart />
      </ResultWrapper>
    </>
  );
}

export default Result;

const ResultWrapper = styled.div`
  position: relative;
  min-height: 100%;
  padding-bottom: 60px;
  background-color: #fafafa;
`;
