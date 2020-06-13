import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { emotionStateMachine } from "./xstate/stateMachine";
import { useMachine } from "@xstate/react";
import { Container } from "./Background";
import { send } from "xstate";
import { Basic, Anger, LetDown, EmoActions, EmoObjects } from "./xstate/actions";
import Donut from "./Chart";

const Switch = () => {
  const [current, send] = useMachine(emotionStateMachine);
  console.log("Current.value", current.value);
  // throw "You done fucked up"
  const emotions = getEmotions(current.value)
  switch (current.value) {
    case "INIT":
      return <Start send={send} />;
      default:
        return <EmoComponent emotions={emotions} send={send}/>
    // case "SELECTING":
    //   return <EmoComponent emotions={Basic} send={send} />
    // case EmoActions.ANGER:
    //   return <EmoComponent emotions={Anger} send={send} />
    // case EmoActions.LET_DOWN:
    //   return <EmoComponent emotions={LetDown} send={send} />
    // case "disgust":
    // case "fear":
    // case "joy":
    // case "surprise":
    // case "sadness":
  }
};

const getEmotions = (state) => {
  return EmoObjects[state]
}

const Start = ({ send }) => {
  return (
    <EmoButton data-test-id="StartBtn" onPress={() => send(EmoActions.START)}>
      Start
    </EmoButton>
  );
};

const EmoComponent = ({ emotions, send }) => {
  return (
    <>
      {Object.values(emotions).map((emotion) => {
        return (
          <EmoButton data-test-id={emotion} onPress={() => send(emotion)}>
            {emotion}
          </EmoButton>
        );
      })}
    </>
  )
}

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
      <Donut />
    </Container>
  );
}
