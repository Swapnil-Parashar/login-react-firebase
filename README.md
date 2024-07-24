# React Firebase Authentication Template

This is a React application template that includes simple authentication using Firebase. The template features a landing page with a navigation bar, where users can sign up, log in, and sign out. 

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js installed on your machine
- npm or yarn installed on your machine

### Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Navigate to the **Authentication** section and enable Email/Password authentication.
3. Go to **Project Settings** and find your Firebase configuration (API key, Auth domain, etc.).

### Project Setup

1. Clone this repository:

    ```bash
    git clone https://github.com/Swapnil-Parashar/login-react-firebase.git
    cd login-temp
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. Create a file named `firebase.js` in the `src` directory and paste your Firebase configuration:

    ```javascript
    // src/firebase.js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    ```

4. Run the application:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

## Project Structure

- `src/`
  - `App.js`: Main application component with routes and navigation bar.
  - `Login.js`: Login form component.
  - `SignUp.js`: Sign-up form component.
  - `LandingPage.js`: Simple landing page component.
  - `firebase.js`: Firebase configuration file (to be created).

## Usage

1. Open the application in your browser. The landing page will be displayed.
2. Use the navigation bar to navigate to the Login or Sign Up page.
3. Sign up or log in using an email and password.
4. Once authenticated, the navigation bar will show a Sign Out button instead of the Login and Sign Up buttons.
5. Click Sign Out to log out of the application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

