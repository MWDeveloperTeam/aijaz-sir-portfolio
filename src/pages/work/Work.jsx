import React from "react";
import styled from "styled-components";
import { Color } from "../../assets/Colors";
import WorkHeader from "../../components/WorkHeader";
import GraphicDesign from "../../components/Graphic Design/GraphicDesign";
import GraphicPhoto from "../../components/Graphic Design/Photos.js";
import ProductPhoto from "../../components/Product_Packing/Photos.js";
import VisualPhoto from "../../components/3D Visualisation/Photos.js";

const Work = () => {
  return (
    <WorkSection>
      <WorkHeader />
      <div className="my_work_gallery_container">
        <div className="graphic_design_header_wrapper">
          <h1>
            <span>Graphic</span> <span>Desiging</span>
          </h1>
        </div>
        <GraphicDesign Photoss={GraphicPhoto} />
      </div>

      <div className="my_work_gallery_container">
        <div className="graphic_design_header_wrapper">
          <h1>
            <span>3D</span> <span>Visualisation</span>
          </h1>
        </div>
        <GraphicDesign Photoss={VisualPhoto} />
      </div>

      <div className="my_work_gallery_container">
        <div className="graphic_design_header_wrapper">
          <h1>
            <span>Product &</span> <span>Packaging</span>
          </h1>
        </div>
        <GraphicDesign Photoss={ProductPhoto} />
      </div>
    </WorkSection>
  );
};

export default Work;

const WorkSection = styled.section`
  color: #fff;
  padding: 4rem 0;

  .my_work_gallery_container {
    padding: 2rem 0;

    .graphic_design_header_wrapper {
      padding: 4rem 0;
      h1 {
        font-size: 6rem;

        @media only screen and (max-width: 768px) {
          font-size: 4rem;
        }

        @media only screen and (max-width: 450px) {
          font-size: 3rem;
        }
        span:first-child {
          font-weight: 300;
        }

        span:last-child {
          font-weight: 900;
        }
      }
    }
  }

  .my_work_gallery_container:nth-child(3),
  .my_work_gallery_container:nth-child(4) {
    padding: 0;
    border-top: 0.2rem solid #ffffff6f;
    margin-top: 8rem;
  }
`;
