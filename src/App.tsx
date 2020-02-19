import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import styled from "styled-components/native";
import { emotionStateMachine, initialActions } from "./stateMachine";
import { useMachine } from "@xstate/react";

const Background = '#F1ECCF';

const Container = styled.View(({color}) => `
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Background};
`);

export default function App() {
  const [current, send] = useMachine(emotionStateMachine);
  const [state, setState] = useState("");
  return (
    <Container>
      <Text data-test-id="work">Emotion Wheel</Text>
    </Container>
  );
}
