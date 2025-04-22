import React from "react";
import LottieView from "lottie-react-native";

export const emoji = {
  smile: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/lottie.json",
};

export function EmojiAnimation({ uri }: { uri: string }) {
  return (
    <LottieView
      source={{
        uri,
      }}
      autoPlay
      loop
      style={{ width: 100, height: 100, margin: 20 }}
    />
  );
}
