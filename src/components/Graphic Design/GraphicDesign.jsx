import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../assets/Colors.js";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// =================
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./style.css";

const GraphicDesign = ({ Photoss }) => {
  const [index, setIndex] = useState(-1);
  const [newPhoto, SetNewPhoto] = useState(Photoss.slice(0, 10));
  const photoHander = () => {
    SetNewPhoto(Photoss.slice(0, Photoss.length));
  };

  return (
    <GraphicSection>
      <ColumnsPhotoAlbum
        photos={newPhoto}
        targetRowHeight={500}
        onClick={({ index }) => setIndex(index)}
        spacing={20}
        lazy={true}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          if (containerWidth < 1000) return 3;
          return 4;
        }}
      />
      <Lightbox
        slides={newPhoto}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails]}
      />
      <div className="see_more_wrapper">
        <button onClick={photoHander}>See More</button>
      </div>
    </GraphicSection>
  );
};

export default GraphicDesign;

const GraphicSection = styled.div`
  /* color: red; */
  width: 100%;
  height: auto;
  /* background-color: maroon; */

  .see_more_wrapper {
    margin-top: 6rem;
    text-align: center;

    button {
      padding: 1.6rem 6rem;
      background-color: ${Color.seconderyColor};
      border-radius: 5rem;
      cursor: pointer;
      transition: ease-in-out 0.3s;
      font-size: 2rem;
      border: none;

      @media only screen and (max-width: 520px) {
        padding: 1.2rem 3.6rem;
      }

      &:hover {
        border: 0.1rem solid ${Color.seconderyColor};
        background-color: ${Color.primaryColor};
        color: ${Color.seconderyColor};
      }
    }
  }
`;
