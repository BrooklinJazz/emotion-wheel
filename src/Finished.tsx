import styled from "styled-components/native";
export const Finished = styled.Text.attrs(({ value }) => ({
  children: `
  You're feeling ${value.toLowerCase()}.

  Take a moment to acknowledge that feeling.
  No feelings are bad - they simply "are"
  `,
}))`
  text-align: center;
  font-size: 20px;
`;
