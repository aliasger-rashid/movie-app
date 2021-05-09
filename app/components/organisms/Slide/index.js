import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.21 * height;

const styles = StyleSheet.create({
  container: {
    width
  },
  titleContainer: {},
  title: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    lineHeight: 80
  }
});

const Slide = ({ title }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: -width / 2 + 150 }
  ];
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.titleContainer,
          {
            transform
          }
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

Slide.propTypes = {
  title: PropTypes.string
};
export default Slide;
