import { Pressable, Text } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  action?: () => void;
}

const Button = ({ title, action }: ButtonProps) => {
  return (
    <Pressable
      className="bg-blue-700 rounded-3xl justify-center items-center py-5 w-3/4"
      onPress={action}
    >
      <Text className="text-white font-bold text-lg">{title}</Text>
    </Pressable>
  );
};

export default Button;
