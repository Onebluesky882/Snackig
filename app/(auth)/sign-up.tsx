import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const Example = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <View className="w-full flex-1 items-center justify-center bg-white px-4">
      <View className="w-[90%] max-w-[290px] py-8">
        <Text className="text-2xl font-semibold text-gray-800 dark:text-warmGray-50">
          Welcome
        </Text>
        <Text className="mt-1 text-xs font-medium text-gray-600 dark:text-warmGray-200">
          Sign up to continue!
        </Text>

        <View className="mt-5 space-y-4">
          <View>
            <Text className="mb-1 text-sm text-gray-700">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              className="h-10 border border-gray-300 rounded-lg px-3"
              keyboardType="email-address"
              placeholder="Enter your email"
            />
          </View>

          <View>
            <Text className="mb-1 text-sm text-gray-700">Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className="h-10 border border-gray-300 rounded-lg px-3"
              placeholder="Enter your password"
            />
          </View>

          <View>
            <Text className="mb-1 text-sm text-gray-700">Confirm Password</Text>
            <TextInput
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry
              className="h-10 border border-gray-300 rounded-lg px-3"
              placeholder="Confirm your password"
            />
          </View>

          <TouchableOpacity className="mt-4 bg-indigo-500 rounded-lg h-10 justify-center items-center">
            <Text className="text-white font-medium">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Example;
