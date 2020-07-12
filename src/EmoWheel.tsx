import { useMachine } from "@xstate/react";
import React from "react";
import { Button } from "react-native-elements";
import styled from "styled-components/native";
import { EmoObjects, EmoStates } from "./xstate/actions";
import { emotionStateMachine } from "./xstate/stateMachine";

const getEmotions = (state) => {
  return EmoObjects[state] ? Object.values(EmoObjects[state]) : [];
};

const Container = styled.View`
  width: 90%;
  max-width: 700px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Emotion = ({ containerStyle = {}, buttonStyle = {}, ...props }) => (
  <Button
    {...props}
    buttonStyle={{ height: 60, ...buttonStyle }}
    containerStyle={{
      width: "45%",
      ...containerStyle,
    }}
  />
);

const Finished = styled.Text.attrs(({ value }) => ({
  children: `
  You're feeling ${value.toLowerCase()}.

  Take a moment to acknowledge that feeling.
  No feelings are bad - they simply "are"
  `,
}))`
  text-align: center;
  font-size: 20;
`;

export const EmoWheel = () => {
  const [{ value }, send] = useMachine(emotionStateMachine);
  if (!value) return null;
  if (value === EmoStates.INIT) {
    return (
      <Button
        data-test-id="StartBtn"
        onPress={() => send(EmoStates.START)}
        title={"START"}
      />
    );
  }

  const emotions = getEmotions(value);

  // !emotions is an implicit way of knowing if the user
  // is on the last step of the emotion wheel
  if (emotions.length === 0) {
    return <Finished data-test-id={"Finished"} value={value as string} />;
  }

  return (
    <Container>
      {emotions.map((each) => (
        <Emotion
          key={each}
          onPress={() => send(each)}
          data-test-id={each}
          containerStyle={{ marginBottom: 40 }}
          raised
          title={each}
        />
      ))}
    </Container>
  );
};
