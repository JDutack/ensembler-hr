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
import videoPresentacion from '../assets/presentacion.mp4';
import ensembleImg from '../assets/title.png';

const VideoSection = () => {
  console.log(ReactPlayer);
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
          <ReactPlayer
            // url={video}
            url={videoPresentacion}
            className="react-player"
            playing
            controls
            width="100%"
            height="100%"
          />
        </SoloVideo>
      </VideoPresentacion>
    </Container>
  );
};

export default VideoSection;
