import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import { colors } from 'app/themes';

const { width } = Dimensions.get('window');

const MovieListHorizontal = ({ data }) => (
  <View>
    <View style={styles.headerContainer}>
      <Text style={styles.headerTextStyle}>My List</Text>
    </View>

    <FlatList
      horizontal
      keyExtractor={({ id }) => `${id}`}
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item?.backdrop_path}`
            }}
            style={styles.imageStyle}
          />
          <View style={styles.cardBottomContainer}>
            <Text style={styles.titleText}>{item?.title}</Text>
          </View>
        </View>
      )}
      ListEmptyComponent={
        <Text style={styles.titleText}>
          Nothing here! Scroll to discover more
        </Text>
      }
    />
  </View>
);

export default MovieListHorizontal;

MovieListHorizontal.propTypes = {
  data: PropTypes.array
};
const styles = StyleSheet.create({
  headerContainer: { marginHorizontal: 20, marginTop: 5 },
  headerTextStyle: { fontSize: 16, fontWeight: 'bold', color: colors.boulder },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: width - 100,
    height: 200,
    margin: 15,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowColor: colors.shadow,
    elevation: 5,
    shadowRadius: 5
  },
  imageStyle: {
    flex: 1,
    borderRadius: 30
  },
  cardBottomContainer: { padding: 10, paddingHorizontal: 15 },
  titleText: {
    textAlign: 'left',
    flexWrap: 'wrap',
    color: colors.boulder
  }
});
