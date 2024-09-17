import React, { useState } from "react";
import { HelloWave } from "@/components/HelloWave";
import { View, Text, Pressable, ScrollView } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { Category, SearchResponse } from "@/types";
import { categories } from "@/constants/data";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios"
import { useQuery } from "@tanstack/react-query";
// import { password, username } from "@/utils/apikeys";




const fetchCourse = async (searchTerm: string): Promise<SearchResponse> => {
  const response = await axios.get(`https://www.udemy.com/api-2.0/courses/`, {
    params: { search: searchTerm},

    auth: {
      username: process.env.EXPO_PUBLIC_API_USERNAME as string,
      password: process.env.EXPO_PUBLIC_API_PASSWORD as string,
    }
  })

  return response.data
}



export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("business");

  const { data, error, isLoading} = useQuery({
    queryKey: ["searchCourse", selectedCategory], 
    queryFn: () => fetchCourse(selectedCategory), 
    enabled: true
  })



  console.log("marker", data)

  const renderCategory = ({ item }: { item: Category }) => {
    return (
      <Pressable
        onPress={() => setSelectedCategory(item.id)}
        className="mr-4 p-2 rounded-full items-center flex-col gap-4"
      >
        <View className={`p-4 rounded-full flex-row item-center ${selectedCategory === item.id ? "border-2 border-blue-700" : "border  border-gray-400"}`}>
          <Ionicons name={item.icon as any} size={24} color={selectedCategory === item.id ? "#1d4ed8" : "gray"} />
        </View>
          <Text style={{ fontFamily: selectedCategory === item.id ? "BarLowBold" : "BarLowMeduim"}}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Greetings */}
      <View className="pt-8 pb-6 px-6 bg-[#2563eb]">
        <Animated.View className="flex-row justify-between items-center">
          <View>
            <View className="flex-row items-end gap-2">
              <Text
                className="text-white text-lg"
                style={{ fontFamily: "BarLowSemiBold" }}
              >
                Good Morning
              </Text>

              <HelloWave />
            </View>

            <Text
              className="text-white text-2xl mt-1"
              style={{ fontFamily: "BarLowBold" }}
            >
              Oluwatosin Adegoroye
            </Text>
          </View>

          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={30}
            color="white"
          />
        </Animated.View>

        {/* Search Area */}
        <Pressable onPress={() => router.push("/explore")}>
          <View className="flex-row items-center bg-white/20 rounded-2xl p-4 mt-4 mb-2">
            <MaterialCommunityIcons name="magnify" size={20} color="white" />
            <Text
              className="text-white ml-2"
              style={{ fontFamily: "BarLowMedium" }}
            >
              What do you want to learn
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1 bg-white gap-4">
        <Animated.View
          entering={FadeInDown.duration(500).delay(200).springify()}
        >
          <View className="flex-row justify-between pt-4 px-6 items-center">
            <Text className="text-xl" style={{ fontFamily: "BarLowBold" }}>
              Explore Topics
            </Text>
            <Text
              className="text-blue-500"
              style={{ fontFamily: "BarLowSemiBold" }}
            >
              See More
            </Text>
          </View>

          {/* category list  */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4 pl-4">
            {categories.map((category) => (
              <View key={category.id}>
                {renderCategory({ item: category })}
              </View>
            ))}
          </ScrollView>


        </Animated.View>
      </ScrollView>
    </View>
  );
}
