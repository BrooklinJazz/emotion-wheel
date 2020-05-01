import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput
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
  "Critical"
];

const EmotionButton = ({ emotion, send }) => (
  <View data-test-id={emotion.toLowerCase()}>
    <Button title={emotion} onPress={() => send(emotion.toLowerCase())} />
  </View>
);

const AngerEmotions = () => (
  <View>
    {angerEmotions.map(emotion => (
      <EmotionButton emotion={emotion.toLowerCase()} />
    ))}
  </View>
);

export default function App() {
  const [current, send] = useMachine(emotionStateMachine);
  const [isStarted, setIsStarted] = useState();

  return (
    <Container>
      {!isStarted && (
        <TouchableOpacity onPress={() => setIsStarted(true)}>
          <Text data-test-id="startBtn">Start</Text>
        </TouchableOpacity>
      )}
      <View>
        {isStarted && current.value === 'init' &&
          baseEmotions.map(emotion => (
            <EmotionButton emotion={emotion} send={send} />
          ))}
      </View>
      {current.value === "anger" && <AngerEmotions />}
    </Container>
  );
}
