import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen 
      name="index" 
      options={{title: "Home"}}
    />
    <Stack.Screen 
      name="details" 
      options={{
        title: "Details",
        headerBackButtonDisplayMode: "default",
        presentation: "formSheet",
        sheetAllowedDetents: [.3, .5, .7],
        sheetGrabberVisible: true,
        sheetCornerRadius: 50,
      }}
    />
  </Stack>;
}
