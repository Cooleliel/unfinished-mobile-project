# React Native Project
This is a React Native project, bootstrapped using @react-native-community/cli.

# Getting Started
Note: Ensure that you have completed the React Native - Environment Setup guide until the "Creating a new application" step before proceeding.

# Step 1: Start the Metro Server
To start the Metro bundler, run the following command from the root of your project:

# using npm
npm start

# OR using Yarn
yarn start

# Step 2: Launch Your Application
With Metro running, open a new terminal and run the following command to start the app:

# For Android
npm run android
# OR using Yarn
yarn android

# For IOS
npm run ios
# OR using Yarn
yarn ios


Once set up correctly, the app should appear on your Android Emulator or iOS Simulator. You can also run it directly from Android Studio or Xcode.


# Project Structure
Here is an overview of the project's folder structure:

/sangimmoApp
├── /android               # Native Android code for configuration and builds.
├── /ios                   # Native iOS code for configuration and builds.
├── /src                   # Application source code.
│   ├── /assets            # Static files like images and fonts.
│   ├── /components        # Reusable UI components.
│   ├── /screens           # Main application views.
│   ├── /navigation        # App navigation setup (e.g., React Navigation).
│   ├── /services          # API calls and integrations.
│   ├── /context           # Global state management (React Context or Redux).
│   ├── /hooks             # Custom React hooks (optional).
│   └── /utils             # Utility functions and helpers.
├── /node_modules          # Project dependencies.
├── App.tsx                # Main entry point of the app.
├── package.json           # Project metadata and dependency management.
├── .eslintrc.js           # ESLint configuration.
├── .prettierrc            # Prettier configuration (if used).
└── tsconfig.json          # TypeScript configuration (if TypeScript is used).


# Modifying Your App
Open App.tsx in your text editor and make changes.
Android: Press <kbd>R</kbd> twice or use <kbd>Ctrl</kbd> + <kbd>M</kbd> (or <kbd>Cmd</kbd> + <kbd>M</kbd> on macOS) to open the Developer Menu, then choose "Reload".
iOS: Press <kbd>Cmd</kbd> + <kbd>R</kbd> to reload in the iOS Simulator.

# Troubleshooting
If you run into issues, check out the React Native Troubleshooting Guide. (https://reactnative.dev/docs/troubleshooting)

# Learn More
React Native Website - Learn more about React Native. (https://reactnative.dev/)
Getting Started - Set up your React Native environment. (https://reactnative.dev/docs/environment-setup)
Learn the Basics - A guided introduction to React Native. (https://reactnative.dev/docs/getting-started)
React Native Blog - Stay updated with the latest posts. (https://reactnative.dev/blog)