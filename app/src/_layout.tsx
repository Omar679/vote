import AuthProvider from "@/Providers/AuthContext";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider >
      <Stack />
    </AuthProvider>
  );
}
