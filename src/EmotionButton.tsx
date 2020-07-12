import React from "react";
import { Button } from "react-native-elements";
import { Colors } from "./Colors";
export const EmotionButton = ({ containerStyle = {}, buttonStyle = {}, ...props }) => (
  <Button
    {...props}

    buttonStyle={{ height: 60, backgroundColor: Colors.Background, ...buttonStyle }}
    titleStyle={{color: Colors.Text}}
    containerStyle={{
      ...containerStyle,
      minWidth: 150
    }} />
);
