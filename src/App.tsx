import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { emotionStateMachine, initialActions } from "./stateMachine";
import { useMachine } from '@xstate/react';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const [current, send] = useMachine(emotionStateMachine)
  return (
    <Container>
      <TouchableOpacity onPress={() => send(initialActions.bad)}>Bad</TouchableOpacity>
      <Text data-test-id="work">Emotion Wheel</Text>
      <Text data-test-id="work">state: {current.value}</Text>
    </Container>
  );
}