import React, { useState } from 'react';
import styled from 'styled-components';
import Photos from './Photos.js';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/columns.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import './style.css';

const GraphicDesign = ({ photo }) => {
  const [index, setIndex] = useState(-1);

  return (
    <GraphicSection>
      <ColumnsPhotoAlbum
        photos={Photos}
        targetRowHeight={500}
        onClick={({ index }) => setIndex(index)}
        spacing={20}
        columns={containerWidth => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          if (containerWidth < 1000) return 3;
          return 4;
        }}
      />
      <Lightbox
        slides={Photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails]}
      />
    </GraphicSection>
  );
};

export default GraphicDesign;

const GraphicSection = styled.div`
  /* color: red; */
  width: 100%;
  height: auto;
  /* background-color: maroon; */
`;
