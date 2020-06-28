import React, { useState } from "react";
import { View, Text } from "react-native";
import { useMachine } from "@xstate/react";
import { emotionStateMachine } from "./xstate/stateMachine";
import { EmoObjects, EmoStates } from "./xstate/actions";
import { Button, ThemeProvider } from "react-native-elements";
import styled from "styled-components/native";

const getEmotions = (state) => {
  return EmoObjects[state] ? Object.values(EmoObjects[state]) : [];
};

const Container = styled.View`
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Emotion = ({ containerStyle = {}, buttonStyle = {}, ...props }) => (
  <Button
    {...props}
    buttonStyle={{ height: 60, ...buttonStyle }}
    containerStyle={{
      width: "40%",
      ...containerStyle
    }}
  />
);

export const EmotionChart = () => {
  const [{value}, send] = useMachine(emotionStateMachine);
  if(!value) return null
  if (value === EmoStates.INIT) {
    return <Button data-test-id="StartBtn" onPress={() => send(EmoStates.START)} title={"START"}/>
  }
  const emotions = getEmotions(value);

  return (
    <Container>
      {emotions.map((each) => (
        <Emotion onPress={() => send(each)} data-test-id={each} containerStyle={{marginBottom: 40}} raised title={each} />
      ))}
    </Container>
  );
};
