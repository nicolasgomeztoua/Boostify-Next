import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import fusey from "../../public/assets/images/fusy.jpg";
const PlayerWrapper = styled.div`
  position: relative;
  height: 100vh;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;
const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
const Hero = ({ videoUrl }) => {
  return (
    <PlayerWrapper>
      <VideoPlayer
        light={"/assets/images/Ash.jpg"}
        playing={true}
        controls={true}
        width="100%"
        height="90vh"
        url={videoUrl}
      ></VideoPlayer>
    </PlayerWrapper>
  );
};

export default Hero;
