import React from "react";
import { Container } from "./Background";
import { EmoWheel } from "./EmoWheel";
import { View, Image, SafeAreaView, Text } from "react-native";
import { Colors } from "./Colors";
import logo from "./EmoWheelLogo.png"
const Header = () => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: Colors.Background,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ height: 50, width: 50 }}
        source={logo}
      />
      <Text style={{ fontSize: 25, marginLeft: 20, color: Colors.Text }}>Emotion Wheel</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Background }}>
        <Header />
        <Container style={{  height: 300, width: "100%", backgroundColor: "white" }}>
          <EmoWheel />
        </Container>
    </SafeAreaView>
  );
}
