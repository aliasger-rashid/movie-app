import React, { useRef } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import {
  useValue,
  onScrollEvent,
  interpolateColor
} from 'react-native-redash/lib/module/v1';
import Slide, { SLIDE_HEIGHT } from '@organisms/Slide';

const BORDER_RADIUS = 30;
const { width } = Dimensions.get('window');

export const slides = [
  {
    title: 'Avengers ',
    color: '#BFEAF5'
  },
  {
    title: 'Captain America',
    color: '#BEECC4'
  },
  {
    title: 'Black Panther',
    color: '#FFE4D9'
  },
  {
    title: 'Iron Man',
    color: '#FFDDDD'
  }
];

const HeadingBanner = () => {
  const x = useValue(0);
  const scroll = useRef(null);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide?.color)
  });

  return (
    <Animated.View style={[styles.slider, { backgroundColor }]}>
      <Animated.ScrollView
        ref={scroll}
        horizontal
        bounces={false}
        decelerationRate="fast"
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        {...{ onScroll }}
      >
        {slides.map(({ title }, index) => (
          <Slide key={index} right={!!(index % 2)} {...{ title }} />
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default HeadingBanner;

const styles = StyleSheet.create({
  container: {},
  slider: {
    margin: 15,
    height: SLIDE_HEIGHT,
    borderRadius: BORDER_RADIUS
  }
});
