import React from 'react';
import styled from 'styled-components';

const MarqueeText = () => {
  return (
    <Section>
      <div class='wrapper'>
        <div class='itemLeft item1'>web </div>
        <div class='itemLeft item2'>design</div>
        <div class='itemLeft item3'>video</div>
        <div class='itemLeft item4'>branding</div>
        <div class='itemLeft item5'>ui/ux</div>
        <div class='itemLeft item6'>app</div>
        <div class='itemLeft item7'>video</div>
        <div class='itemLeft item8'>branding</div>
      </div>
      <div class='wrapper'>
        <div class='itemRight item1'></div>
        <div class='itemRight item2'></div>
        <div class='itemRight item3'></div>
        <div class='itemRight item4'></div>
        <div class='itemRight item5'></div>
        <div class='itemRight item6'></div>
        <div class='itemRight item7'></div>
        <div class='itemRight item8'></div>
      </div>
    </Section>
  );
};

export default MarqueeText;
const Section = styled.div`
  .wrapper {
    margin-top: 2rem;
    width: 100%;
    max-width: 1536px;
    margin-inline: auto;
    height: 15rem;
    position: relative;
    display: flex;
    gap: 10px;
    overflow: hidden;
    background-color: red;
    /* mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    ); */
  }

  @keyframes scrollLeft {
    to {
      left: -700px;
    }
  }

  @keyframes scrollRight {
    to {
      right: -200px;
    }
  }

  .itemLeft,
  .itemRight {
    /* width: 200px; */
    /* height: 100px; */
    height: auto;
    background-color: #e11d48;
    /* border-radius: 6px; */
    /* position: absolute; */
    animation-timing-function: linear;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10rem;
    font-weight: 700;
  }

  .itemLeft {
    left: max(calc(200px * 8), 100%);
    animation-name: scrollLeft;
  }

  .itemRight {
    right: max(calc(200px * 8), calc(100% + 200px));
    animation-name: scrollRight;
  }

  .item1 {
    animation-delay: calc(30s / 8 * (8 - 1) * -1);
  }

  .item2 {
    animation-delay: calc(30s / 8 * (8 - 2) * -1);
  }

  .item3 {
    animation-delay: calc(30s / 8 * (8 - 3) * -1);
  }

  .item4 {
    animation-delay: calc(30s / 8 * (8 - 4) * -1);
  }

  .item5 {
    animation-delay: calc(30s / 8 * (8 - 5) * -1);
  }

  .item6 {
    animation-delay: calc(30s / 8 * (8 - 6) * -1);
  }

  .item7 {
    animation-delay: calc(30s / 8 * (8 - 7) * -1);
  }

  .item8 {
    animation-delay: calc(30s / 8 * (8 - 8) * -1);
  }
`;
