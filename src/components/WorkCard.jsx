import React from "react";
import styled from "styled-components";

const WorkCard = () => {
  return (
    <Card>
      <div className="animation_text_wrapper">Hello World</div>
      <div className="card_content_wrapper">
        <div className="img_wrapper">
          <img
            src="https://puzzlerbox.com/templatekits-free/personal/#"
            alt="Image"
          />
        </div>
        <div className="content_wrapper"></div>
      </div>
    </Card>
  );
};

export default WorkCard;

const Card = styled.div`
  height: 50rem;
  background-color: red;
`;
