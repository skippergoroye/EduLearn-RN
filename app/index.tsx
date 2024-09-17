import { View, Text } from "react-native";
import React, { useRef } from "react";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import Button from "@/components/Button";
import { router } from "expo-router";
import LottieView from "lottie-react-native";

const Index = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View className="bg-white  p-4 flex-1 w-full justify-center items-center">
      <Animated.View
        className="w-full"
        entering={FadeInDown.duration(300).springify()}
      >
        <LottieView
          ref={animation}
          source={require("../assets/animation/learner.json")}
          loop
          autoPlay
          style={{ width: "100%", height: 300 }}
        />
      </Animated.View>

      <Animated.View
        className="w-full"
        entering={FadeInDown.duration(300).delay(200).springify()}
      >
        <View className="w-full">
          <Text
            className="text-5xl text-center leading-[3.5rem]"
            style={{ fontFamily: "BarLowExtraBold" }}
          >
            Discover and improve your skills.
          </Text>
        </View>
      </Animated.View>
      <Animated.View
        className="w-full"
        entering={FadeInDown.duration(300).delay(400).springify()}
      >
        <View className="w-full mb-4">
          <Text
            className="text-xl text-center leading-[2rem]"
            style={{ fontFamily: "BarLowSemiBold" }}
          >
            Learn from the best courses & tutorials. 🚀
          </Text>
        </View>
      </Animated.View>

      {/* Button  */}
      <Animated.View
        className="w-full justify-center items-center"
        entering={FadeInDown.duration(300).delay(600).springify()}
      >
        <Button title="Get Started" action={() => router.push("/(tabs)")} />
      </Animated.View>
    </View>
  );
};

export default Index;
