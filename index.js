import { AppRegistry, Platform } from "react-native";
import App from "./src/App";
// import { name as appName } from "./app.json";
const appName = "main"
AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root")
  });
}
