import { css } from "styled-components";
import { breakpoints } from './_Variables';

export const up = device => {
  return (...args) => css`
    @media screen and (min-width: ${breakpoints[device] - 1}px) {
      ${css(...args)};
    }
  `; 
}

export const down = device => {
  return (...args) => css`
    @media screen and (max-width: ${breakpoints[device]}px) {
      ${css(...args)};
    }
  `; 
}

export const flex = (col = false, padding = false) => {
  return (...args) => css`
    display: flex;
    flex-wrap: wrap;

    > * {
      ${col && `width: ${100 / col}%;`};
      ${padding && `padding: ${padding};`};
      ${css(...args)};
    }
  `; 
}