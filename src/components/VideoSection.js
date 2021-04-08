import React from 'react';
import ReactPlayer from 'react-player';

import {
  Container,
  PresentacionSection,
  VideoPresentacion,
  SoloVideo,
  SoloTextos,
  TitleImg,
  TitleP,
  TitleSpan,
  TitleBtn,
} from '../styles/componentStyles/VideoSectionStyle';
import ensembleImg from '../assets/title.png';
// import video from '../assets/vídeo miradas final2.mp4';

const VideoSection = () => {
  return (
    <Container>
      <PresentacionSection>
        <SoloTextos>
          <TitleImg src={ensembleImg} />
          <TitleP>
            Queremos dejar una marca <br />
            positiva en el mundo
          </TitleP>
          <TitleSpan>¿Te sumás?</TitleSpan>
          <TitleBtn>QUIERO SABER MAS</TitleBtn>
        </SoloTextos>
      </PresentacionSection>
      <VideoPresentacion>
        <SoloVideo>
          {/* <Videito src={video}></Videito> */}
          <ReactPlayer
            // url={video}
            url="https://www.youtube.com/watch?v=KmOBzrjFnKY&list=RDKmOBzrjFnKY&start_radio=1&ab_channel=LosTabaleros"
            className="react-player"
            playing
            width="100%"
            height="100%"
          />
        </SoloVideo>
      </VideoPresentacion>
    </Container>
  );
};

export default VideoSection;
