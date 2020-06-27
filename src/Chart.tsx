import React, { useState } from "react";
import { View, Text } from "react-native";
import { useMachine } from "@xstate/react";
import { emotionStateMachine } from "./xstate/stateMachine";
import { EmoObjects } from "./xstate/actions";
import { Button, ThemeProvider } from 'react-native-elements'
import styled from "styled-components/native";
const getEmotions = (state) => {
  return Object.values(EmoObjects[state]);
};

const Container = styled.View`
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Emotion = ({...props}) => <Button {...props} buttonStyle={{height: 60}} containerStyle={{
 width: "40%",
 marginBottom: 40,
}}/>


export const EmotionChart = () => {
  const [current, send] = useMachine(emotionStateMachine);
  const emotions = getEmotions(current.value);

  return (
    <Container>
      {emotions.map(each => <Emotion raised title={each}/>)}
    </Container>
  );
};
