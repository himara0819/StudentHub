# 🎓 StudentHub – Mini Student Hub Mobile Application

A simple and interactive student mobile application developed using **React Native and Expo** as part of the Mobile Application Development practical tutorial at the University of Kelaniya.

The application demonstrates mobile navigation, reusable UI components, interactive elements, and background task simulation using a live-updating clock.

## 📱 Project Overview

StudentHub is a mini student hub application that provides a dashboard, a digital student ID card, and a live clock through a simple bottom-tab navigation interface.

## ✨ Features

### 1. Home Dashboard
- Welcome screen for students.
- Interactive Digital ID Card navigation button.
- Scrollable interface using `ScrollView`.
- Touch interaction using `Pressable`.

### 2. Digital Student ID Card
- Displays a student profile image.
- Shows student information.
- Uses React Native `Image`, `Text`, and `View` components.
- Local image asset integration.

### 3. Live Clock
- Displays the current system time.
- Automatically updates every second.
- Uses React Hooks for state management.
- Demonstrates timer management and cleanup.

### 4. Navigation
- Bottom Tab Navigation using Expo Router.
- Stack Navigation for the Dashboard and ID Card screens.
- Navigation between Home and Live Clock.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React Native | Mobile application development |
| Expo | Development and testing environment |
| TypeScript | Application programming |
| Expo Router | File-based navigation |
| React Hooks | State and lifecycle management |
| Expo Vector Icons | Navigation icons |
| Git & GitHub | Version control and project hosting |
| Expo Go | Mobile application testing |

## 📂 Project Structure

```text
StudentHub/
│
├── assets/
│   └── images/
│       └── user.png
│
├── Output_Screens/
│   ├── 01_Home.png
│   ├── 02_ID_Card.png
│   └── 03_Live_Clock.png
│
├── src/
│   └── app/
│       ├── (home)/
│       │   ├── _layout.tsx
│       │   ├── index.tsx
│       │   └── details.tsx
│       │
│       ├── _layout.tsx
│       ├── index.tsx
│       └── clock.tsx
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── app.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code
- Expo Go (Android or iOS)
- Git

### Step 1 – Clone the Repository

```bash
git clone https://github.com/himara0819/StudentHub.git
```

### Step 2 – Navigate to the Project

```bash
cd StudentHub
```

### Step 3 – Install Dependencies

```bash
npm install
```

### Step 4 – Install Expo Vector Icons

```bash
npx expo install @expo/vector-icons
```

### Step 5 – Start the Development Server

```bash
npx expo start
```

### Step 6 – Run the Application

1. Install Expo Go on your mobile device.
2. Start the Expo development server.
3. Scan the displayed QR code using Expo Go.
4. Wait for the application to load.

**Note:** Your computer and mobile device should be connected to the same Wi-Fi network when using LAN mode.

## 📸 Application Screenshots

Application screenshots are available in the `Output_Screens/` directory.

| Screen | Screenshot |
|---|---|
| Home Dashboard | `Output_Screens/01_Home.png` |
| Digital ID Card | `Output_Screens/02_ID_Card.png` |
| Live Clock | `Output_Screens/03_Live_Clock.png` |

## 📚 Learning Objectives

This practical demonstrates the following concepts:

- Bottom Tab Navigation.
- Stack Navigation.
- File-Based Routing with Expo Router.
- ScrollView and Pressable components.
- React Native component styling.
- Local image integration.
- `useState` Hook.
- `useEffect` Hook.
- `setInterval()` and `clearInterval()`.
- Background task simulation.

## 🎯 Academic Information

**Module:** Mobile Application Development  
**Practical:** Practical Tutorial 03  
**Project:** Mini Student Hub  
**Department:** Department of Statistics & Computer Science  
**University:** University of Kelaniya  
**Academic Year:** 2024/2025 – Semester 2

## 👨‍💻 Developer

**GitHub:** [@himara0819](https://github.com/himara0819)

## 🔗 Repository

[https://github.com/himara0819/StudentHub](https://github.com/himara0819/StudentHub)

---

⭐ Developed as part of the Mobile Application Development practical coursework.

