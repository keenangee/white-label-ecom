import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { CarouseAslItemProps } from "../types/commonTypes";

const { width, height } = Dimensions.get("screen");

const StoryCarouselItem = ({ item }: CarouseAslItemProps) => {
  return (
    <View>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
    </View>
  );
};

export default StoryCarouselItem;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 8,
  },
});
