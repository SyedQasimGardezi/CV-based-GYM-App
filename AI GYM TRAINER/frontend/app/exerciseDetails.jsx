import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function exerciseDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();
  const squat = "squat";
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-white rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-8 right-0"
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* details */}

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Equipment{" "}
          <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Secondary Muscles{" "}
          <Text className="font-bold text-neutral-800">
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Target{" "}
          <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          Instructions
        </Animated.Text>

        {item.instructions?.split(",").map((instruction, index) => {
          return (
            <Animated.Text
              entering={FadeInDown.delay((index + 5) * 100)
                .duration(300)
                .springify()}
              key={instruction}
              style={{ fontSize: hp(1.7) }}
              className="text-neutral-800"
            >
              {instruction}
            </Animated.Text>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={() => router.push("squats")}
        style={{ height: hp(7), width: wp(80) }}
        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
      >
        <Text
          style={{ fontSize: hp(3) }}
          className="text-white font-bold tracking-widest"
        >
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
}
