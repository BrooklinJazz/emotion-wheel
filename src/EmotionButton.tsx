import React from "react";
import { Button } from "react-native-elements";
export const EmotionButton = ({ containerStyle = {}, buttonStyle = {}, ...props }) => (
  <Button
    {...props}
    buttonStyle={{ height: 60, ...buttonStyle }}
    containerStyle={{
      width: "45%",
      ...containerStyle,
    }} />
);
