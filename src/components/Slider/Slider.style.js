import styled from 'styled-components';

export const Wrapper = styled.div`
  .horizontal-slider {
    width: 100%;
    max-width: 500px;
    height: 50px;
  }

  .example-track {
    position: relative;
    background: #000;
  }

  .horizontal-slider .example-track {
    top: 23px;
    height: 4px;
  }

  .horizontal-slider .example-thumb {
    outline: none;
    top: 16px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    line-height: 0;
    font-size: 0;
    margin-left: 2px;
  }

  .example-thumb {
    font-size: 0.9em;
    text-align: center;
    background-color: black;
    color: white;
    cursor: pointer;
    border: 5px solid white;
    box-sizing: border-box;
  }

  .mark-text {
    position: absolute;
    font-size: 14px;
    left: 0;
    bottom: 30px;
    font-weight: 500;
  }

  .horizontal-slider {
    .example-mark:nth-of-type(4) {
      .mark-text {
        right: 0;
        left: unset;
      }
    }
    .example-mark:nth-of-type(3) {
      .mark-text {
        right: -9px;
        left: unset;
      }
    }
  }

  .horizontal-slider .example-mark {
    top: 14px;
    width: 18px;
    height: 18px;
    background: white;
    border: 2px solid black;
    border-radius: 50%;
  }
`;
