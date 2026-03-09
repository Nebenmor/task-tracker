# Task Tracker

A simple mobile task management app built with React Native, Expo, and TypeScript.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Expo Go](https://expo.dev/client) app installed on your phone, or an iOS/Android simulator

### Running the app

```bash
npm install
npx expo start
```

Then scan the QR code with **Expo Go** (Android) or the Camera app (iOS).

To run on a specific platform:

```bash
npx expo start --android
npx expo start --ios
```

---

## Libraries Used

| Library | Reason |
|---|---|
| `expo` (~51) | Managed workflow for zero-config React Native development |
| `expo-router` (~3.5) | File-based routing — keeps navigation declarative and scalable |
| `@react-native-async-storage/async-storage` | Simple, reliable local key-value persistence — the standard choice for Expo apps |
| `typescript` | Type safety throughout — improves code quality and developer experience |

No additional UI or state management libraries were added intentionally. `useState`/`useEffect` is sufficient for this scope, and adding Redux or Zustand would be overengineering.

---

## Project Structure

```
task-tracker/
├── app/
│   └── index.tsx          # Main screen entry point (Expo Router)
├── components/
│   ├── TaskInput.tsx       # Text input + Add button
│   ├── TaskItem.tsx        # Individual task row with checkbox and delete
│   ├── TaskList.tsx        # FlatList wrapper with empty state handling
│   └── FilterBar.tsx       # All / Active / Completed filter tabs
├── hooks/
│   └── useTasks.ts         # All task business logic + AsyncStorage persistence
├── types/
│   └── index.ts            # Shared TypeScript types
├── constants/
│   └── storage.ts          # AsyncStorage key constant
```

### Key architectural decision: `useTasks` hook

All business logic (add, toggle, delete, filter, load/save) lives in a single custom hook. This keeps the screen component clean and makes the logic independently testable.

---

## What I Would Improve With More Time

- **Swipe-to-delete** — more natural mobile interaction using `react-native-gesture-handler`
- **Edit task titles** — tap to edit inline with optimistic update
- **Drag to reorder** — using `react-native-draggable-flatlist`
- **Unit tests** — test the `useTasks` hook with Jest and `@testing-library/react-hooks`
- **Haptic feedback** — light haptics on task completion using `expo-haptics`
- **Due dates** — optional due date per task with an overdue indicator
- **Animations** — smooth entry/exit animations for task items using `react-native-reanimated`
