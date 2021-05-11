import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { ScrollView } from 'react-native-gesture-handler';
import MovieListHorizontal from '@organisms/MovieListHorizontal';
import MyList from '@organisms/MyList';
// import HeadingBanner from '@organisms/HeadingBanner';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import { colors } from 'app/themes';
import { homeScreenActions } from './reducer';
import {
  selectGenre,
  selectGenreIsLoading,
  selectGenreErrorMessage,
  selectMovieList,
  selectMyList
} from './selectors';

const HomeScreen = ({ navigation, fetchGenre, genre, movieList, myList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Movie App',
      headerTitleStyle: styles.headerTitleStyle
    });
  }, []);

  useEffect(() => {
    fetchGenre();
  }, []);

  const onItemTitlePress = movieDetails => {
    const shallowMyList = [...myList];
    const isMovieAlreadyInTheList = myList.find(
      movie => movie.id === movieDetails?.id
    );
    if (!isMovieAlreadyInTheList) {
      shallowMyList.push(movieDetails);
    }

    dispatch(homeScreenActions.addToMyList(shallowMyList));
  };

  const onRemoveItem = movieItem => {
    const shallowMyList = [...myList];
    const updatedList = shallowMyList.filter(
      item => item?.id !== movieItem?.id
    );
    dispatch(homeScreenActions.removeFromMyList(updatedList));
  };
  const getMovieList = () => {
    if (genre?.length > 0) {
      return genre.map(genreItem => (
        <MovieListHorizontal
          key={genreItem?.id}
          {...{ genreItem, onTitlePress: onItemTitlePress }}
          data={movieList}
        />
      ));
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <HeadingBanner /> */}
        <MyList key={myList} data={myList} showDelete {...{ onRemoveItem }} />
        {getMovieList()}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  genre: selectGenre(),
  userIsLoading: selectGenreIsLoading(),
  userErrorMessage: selectGenreErrorMessage(),
  movieList: selectMovieList(),
  myList: selectMyList()
});

const mapDispatchToProps = dispatch => ({
  fetchGenre: () => dispatch(homeScreenActions.requestFetchGenre())
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, injectIntl)(HomeScreen);
HomeScreen.propTypes = {
  navigation: PropTypes.object,
  fetchGenre: PropTypes.func,
  genre: PropTypes.array,
  movieList: PropTypes.array,
  myList: PropTypes.array
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  headerTitleStyle: {
    color: colors.boulder,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
