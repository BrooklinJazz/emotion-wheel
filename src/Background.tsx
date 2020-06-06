import styled from "styled-components/native";
const Background = '#F1ECCF';

export const Container = styled.View(({color}) => `
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Background};
`);
