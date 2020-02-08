# Getting Started
- clone the project
- install dependencies
```
yarn install
```

## run the project using expo web (Recomended)
```
yarn start --web
```
you should see the project open at http://192.168.169.210:19006/ or http://localhost:19006/ (note that your exact url may be different than mine)
## run the project on ios
```
yarn start
```
open the expo app on your device or simulator. if your device is connected to the same network it should automatically request to open in expo.

## run the project on android
```
yarn start
```
you should see Metro Bundler open on http://localhost:19002/. go directly to http://localhost:19002/ in your browser if it does not.

open the expo app on your device or simulator. scan the QR code provided in Metro Bundler.

# Tech Stack
## Cypress
Cypress is an E2E testing framework that allows you to test your native application using expo web.
see https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file for documentation.

to open cypress make sure that you are running the project using expo web.

then run:
```
npx cypress open
```

from here you should see a cypress dialogue. you can select which test you would like to run from here.

## Quick Tips
- place tests inside the /integration/ folder
- use commands or helper methods for actions that you often repeat.
- use data-test-id instead of classes or other alternative selectors for getting elements. see example.spec.js
## Expo
see https://docs.expo.io/versions/v36.0.0/tutorial/planning/ for documentation.

see https://docs.expo.io/versions/v36.0.0/get-started/installation/ for how to install a simulator.
## React Native
see https://facebook.github.io/react-native/docs/getting-started for documentation
## Styled Components
make sure to import styled from `styled-components/native` instead of `styled-components`.

```tsx
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  color: red;
  align-items: center;
  justify-content: center;
`;
```

for documentation go to https://styled-components.com/docs/basics#react-native.

### Recommended Learnings:
- Passed Props: https://styled-components.com/docs/basics#passed-props
- Adapting Based on Props: https://styled-components.com/docs/basics#adapting-based-on-props
- Extending Styles: https://styled-components.com/docs/basics#extending-styles

### Recommended VSC Extensions
- vscode-styled-components by Julien Poissonnier for styled components syntax highlighting and intellisense.
- TSLint by Microsoft
- Prettier by Esben Petersen

### Nice to have VSC Extensions
- Color Highlight by Sergii Naumov
- Rainbow Brackets by 2gua
- TypeScript Import Sorter by Michael
- Auto Rename Tag by Jun Han
- Auto Close Tag by Jun Han

## Typescript
- for documentation see https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- Recommended to know Enums, Interfaces, Types.
- If a specific type is giving you trouble temporarily using `any` or // @ts-ignore next-line will allow you to ignore ts issues. This should not be overused and ideally removed whenever possible. However when you need a hammer it can be a great tool to let you `temporarily` ignore typescript problems

## Clubhouse
- https://app.clubhouse.io/kealybrook/stories/space/9/everything

## Figma (WIP)