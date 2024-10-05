import "../styles/global.css";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="step/index" options={{ headerShown: false }} />
      <Stack.Screen name="create/index" options={{ headerShown: false }} />
    </Stack>
  );
}
