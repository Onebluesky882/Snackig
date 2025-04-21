import React from "react";
import Gradient from "@/assets/Icons/Gradient";
import DocumentData from "@/assets/Icons/DocumentData";
import LightBulbPerson from "@/assets/Icons/LightbulbPerson";
import Rocket from "@/assets/Icons/Rocket";
import Logo from "@/assets/Icons/Logo";
import { Box } from "@/components/ui/box";
import { ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";

import { Link, Redirect } from "expo-router";

export default function Home() {
  return (
    <View>
      <Redirect href={"/(tabs)"} />
    </View>
  );
}
