import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KillBoost from "../../public/assets/images/killsboost.png";
import {
  StepOneTitle,
  F1,
  StepOneSLidersWrap,
  InitialRank,
  Slider,
  InputTyped,
  Subtitle
} from "../ProductComponents/ProductElements";
import Legends from "./Legends";
import Image from "next/image";
const Outline = styled.div`
  border: 10px solid #6d00ae;
  border-radius: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
const StepOne = styled(F1)`
  color: #6d00ae;
`;
const SliderDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Bar = styled(Slider).attrs({
  type: "range",
  name: "points",
  step: "10",
  min: "0",
  max: "1000",
})`
  background: ${(props) =>
    `linear-gradient(to right, #6d00ae 0%, #ba58f5 ${props.value / 10}%, #fff ${
      props.value / 10
    }%, #fff 100%);`};
  margin: 1rem;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;

    background-image: radial-gradient(circle, #f7f7fc 40%, #6d00ae 45%);
  }
  ::-moz-range-thumb {
    background-image: radial-gradient(circle, #f7f7fc 40%, #6d00ae 45%);
  }
`;
const SliderContainer = styled(StepOneSLidersWrap)`
  display: flex;
  justify-content: center;
  @media (min-width: 1px) {
    height: auto;
  }
`;
const InputTypedK = styled(InputTyped)`
  border: 2px solid #6d00ae;
  text-align: center;
  padding: 0;
`;
const SliderBody = () => {
  const [kills, setKills] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(kills * 0.35);
  }, [kills]);
  return (
    <Outline>
      <SliderDiv>
        <StepOneTitle>
          <StepOne></StepOne> Select Kills to Boost
        </StepOneTitle>
        <SliderContainer>
          <InitialRank style={{ height: "auto" }}>
            <Subtitle id="current-rank" style={{ borderBottom: "#6d00ae 4px solid" }}>
              Set your desired kills
            </Subtitle>
            <div className="rank">
              <Image src={KillBoost} alt="rank"></Image>
            </div>
            <Bar value={kills} onChange={(e) => setKills(e.target.value)}></Bar>
            <InputTypedK
              fontSize="80px"
              height="100px"
              width="300px"
              value={kills}
              onChange={(e) => setKills(e.target.value)}
            ></InputTypedK>
            <p style={{ textAlign: "center", fontSize: "45.23px" }}>Kills</p>
          </InitialRank>
        </SliderContainer>
      </SliderDiv>
      <Legends price={price} kills={kills}></Legends>
    </Outline>
  );
};

export default SliderBody;
