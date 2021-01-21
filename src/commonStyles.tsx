import { css } from "@emotion/react";
import colors from "./colors";

const selectable = css`
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
`;

const unselectable = css`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const hiddenInput = css`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const multiSelectInput = css`
  display: inline-block;
  position: relative;

  margin: 1rem 0.5rem 0 0;
  border: whitesmoke 0.2rem solid;

  background-color: whitesmoke;
  transition: background-color 200ms;
`;

const textInputs = css`
  display: inline-block;
  width: min(20rem, 90%);
  height: 100%;
  min-height: 2rem;

  background: whitesmoke;

  color: black;
  padding: 0.15rem 1rem 0 1rem;
  font: inherit;

  margin-bottom: 0;

  border: 0.1rem solid black;
  border-radius: 8px;
`;

const invalidStyles = css`
  .invalid-box {
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 10px ${colors.error};
    box-shadow: 0 0 10px ${colors.error};
    border: none;
  }
`;

const containerStyles = css`
  margin: auto;
  width: 50%;

  text-align: center;
  font-size: 1.5rem;

  > div {
    display: inline-block;
    margin: 2rem auto;
    width: 50%;
  }

  @media (max-width: 850px) {
    width: 100%;

    > div {
      display: flex;
      justify-content: center;

      margin: 0 auto;
    }
  }

  .return_button {
    text-align: left;
  }

  .return_button.closed {
    text-align: center;
  }
`;

const separatorStyles = css`
  height: 0;
  display: none;

  @media (max-width: 850px) {
    display: block;
  }
`;

const returnStyles = css`
  padding: 0.5rem 2rem;
  border-radius: 8px;

  color: white;
  text-decoration: none;
  white-space: nowrap;

  background-color: ${colors.greyple};
  transition: background-color 300ms;

  :hover {
    background-color: ${colors.darkerGreyple};
  }
`;

export {
    selectable,
    unselectable,
    hiddenInput,
    multiSelectInput,
    textInputs,
    invalidStyles,
    containerStyles,
    separatorStyles,
    returnStyles
};
