import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { emotionStateMachine, initialActions } from "./xstate/stateMachine";
import { useMachine } from "@xstate/react";
import { Container } from "./Background";
import { send } from "xstate";

const baseEmotions = ["Disgust", "Fear", "Joy", "Surprise", "Anger", "Sadness"];
const angerEmotions = [
  "LetDown",
  "Humiliated",
  "Bitter",
  "Mad",
  "Aggressive",
  "Frustrated",
  "Distant",
  "Critical",
];

const Switch = () => {
  const [current, send] = useMachine(emotionStateMachine);
  console.log("Current.value", current.value);

  switch (current.value) {
    case "init":
      return <Start send={send} />;
    case "selecting":
      return <Selecting send={send} />;
    case "anger":
    case "disgust":
    case "fear":
    case "joy":
    case "surprise":
    case "sadness":
  }
};

const Start = ({ send }) => {
  return (
    <EmoButton data-test-id="startBtn" onPress={() => send("START")}>
      Start
    </EmoButton>
  );
};

const Selecting = ({ send }) => {
  return (
    <>
      {baseEmotions.map((emotion) => {
        return (
          <EmoButton
            data-test-id={`${emotion}Btn`}
            onPress={() => send(emotion.toUpperCase())}
          >
            {emotion}
          </EmoButton>
        );
      })}
    </>
  );
};

const EmoButton = ({ children, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <Container>
      <Switch />
    </Container>
  );
}
