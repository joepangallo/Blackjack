# Blackjack

A classic Blackjack card game built with React Native and Expo, featuring user authentication via Firebase.

## Features

- Classic Blackjack gameplay
- User authentication and login
- Firebase integration for user management
- Persistent storage with AsyncStorage
- Cross-platform support (iOS, Android, Web)
- Realistic card deck implementation

## Tech Stack

- **React Native** - Mobile UI framework
- **Expo** - Cross-platform development framework
- **Firebase** - Authentication and backend services
- **AsyncStorage** - Local data persistence

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Firebase account and project (for authentication)
- For iOS development: Xcode
- For Android development: Android Studio

## Installation

1. Clone the repository:
```bash
git clone https://github.com/joepangallo/Blackjack.git
cd Blackjack
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication in your Firebase project
   - Update `firebaseConfig.js` with your Firebase credentials

## Running the App

Start the development server:
```bash
npm start
```

### Run on specific platforms:

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Web:**
```bash
npm run web
```

## Project Structure

```
Blackjack/
├── App.js                  # Main app component
├── index.js                # App entry point
├── components/             # Reusable components
│   ├── cardImages.js      # Card image assets
│   └── deck.js            # Deck management logic
├── screens/               # App screens
│   ├── GameScreen.js      # Main game screen
│   └── LoginScreen.js     # User authentication screen
├── styles/                # Styling
│   └── GameStyles.js      # Game screen styles
├── firebaseConfig.js      # Firebase configuration
├── app.json              # Expo configuration
└── package.json          # Dependencies and scripts
```

## How to Play

1. Log in with your credentials
2. Place your bet
3. Receive your initial two cards
4. Choose to "Hit" (take another card) or "Stand" (keep your current hand)
5. Try to get as close to 21 as possible without going over
6. Beat the dealer to win!

## Game Rules

- Face cards (Jack, Queen, King) are worth 10 points
- Aces can be worth 1 or 11 points
- Number cards are worth their face value
- Get closer to 21 than the dealer without going over to win
- Going over 21 is a "bust" and you lose

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
