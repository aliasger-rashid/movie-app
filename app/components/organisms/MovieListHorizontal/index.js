import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { colors } from 'app/themes';

const { width } = Dimensions.get('window');

const MovieListHorizontal = ({ genreItem, data, onTitlePress }) => (
  <View>
    <View style={styles.headerContainer}>
      <Text style={styles.headerTextStyle}>{genreItem?.name}</Text>
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
              uri: `https://image.tmdb.org/t/p/w500${item?.backdropPath}`
            }}
            style={styles.imageStyle}
          />
          <TouchableOpacity
            onPress={() => {
              onTitlePress(item);
            }}
            style={styles.cardBottomContainer}
          >
            <Text style={styles.titleText}>{item?.originalTitle}</Text>
          </TouchableOpacity>
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
  data: PropTypes.array,
  onTitlePress: PropTypes.func,
  genreItem: PropTypes.object
};

const styles = StyleSheet.create({
  headerContainer: { marginHorizontal: 20, marginTop: 5 },
  headerTextStyle: { fontSize: 16, fontWeight: 'bold', color: colors.boulder },
  cardContainer: {
    backgroundColor: colors.white,
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
  cardBottomContainer: {
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
    color: colors.boulder
  }
});
