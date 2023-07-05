import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {imageSlider} from '../../data/Data';
import {SliderBox} from 'react-native-image-slider-box';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <SliderBox
        images={imageSlider}
        autoplay={true}
        circleLoop={true}
        sliderBoxHeight={250}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>
          Categories
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  titleContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  }
});
