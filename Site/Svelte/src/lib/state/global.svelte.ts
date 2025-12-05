export const globalState: {
  devMode: boolean,
  theme: "dark" | "light",
  sound: boolean
} = $state({
  devMode: false,
  theme: "dark",
  sound: false
})