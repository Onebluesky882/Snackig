import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text } from "react-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} {...props} />;
}
const profile = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  );
};
export default profile;
