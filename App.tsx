import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  color: red;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Text>Emotion Wheel</Text>
    </Container>
  );
}