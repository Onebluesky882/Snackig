import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {} from "./ui/form-control";
import { useState } from "react";
import { Link } from "expo-router";
import { emoji, EmojiAnimation } from "@/assets/animation/emoji";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const handleValidation = () => {
    if (!email) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-white px-4 ">
      <EmojiAnimation uri={emoji.smile} />
      <View className="w-full max-w-sm p-6 bg-white rounded-lg border border-gray-200 shadow-xs">
        <Text className="text-2xl font-semibold text-gray-800">Welcome</Text>
        <Text className="mt-1 text-sm text-gray-600">Sign in to continue!</Text>

        <View className="mt-5 space-y-4">
          {/* Email */}
          <View>
            <Text className="text-sm text-gray-700 mb-1">Email ID</Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              onBlur={handleValidation}
              placeholder="Enter your email"
              className="h-10 border border-gray-300 rounded-lg px-3"
              keyboardType="email-address"
            />
          </View>

          {/* Password */}
          <View>
            <Text className="text-sm text-gray-700 mb-1">Password</Text>
            <TextInput
              className="h-10 border border-gray-300 rounded-lg px-3"
              secureTextEntry
              placeholder="Enter your password"
            />
            <TouchableOpacity className="mt-1 self-end">
              <Text className="text-xs text-indigo-500 font-medium">
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Sign in button */}
          <TouchableOpacity className="bg-indigo-600 py-2 rounded-lg items-center">
            <Text className="text-white font-semibold">Sign In</Text>
          </TouchableOpacity>

          {/* Sign up */}

          <Text className="text-sm text-gray-600">I'm a new user. </Text>
          <TouchableOpacity>
            <Text className="text-sm text-indigo-500 font-medium">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginForm;
