import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { emotionStateMachine, initialActions } from "./xstate/stateMachine";
import { useMachine } from "@xstate/react";
import { Container } from "./Background";

export default function App() {
  const [current, send] = useMachine(emotionStateMachine);
  return (
    <Container>
      <Text data-test-id="work">Emotion Wheel</Text>
    </Container>
  );
}
