import { css } from 'emotion';

export const formTemplate = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 35px;

  button {
    max-width: fit-content;
    grid-row: 2 / 3;
  }
`;
