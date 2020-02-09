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

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const [current, send] = useMachine(emotionStateMachine);
  const [state, setState] = useState("");
  return (
    <>
      <TextInput style={{ backgroundColor: "red" }} onChangeText={setState} />
      <TouchableOpacity onPress={() => send(state)}>
        Send State
      </TouchableOpacity>
      <Text data-test-id="work">Emotion Wheel</Text>
      <Text data-test-id="work" onPress={() => console.log(current.value)}>state: {current.value.toString()}</Text>
    </>
  );
}
