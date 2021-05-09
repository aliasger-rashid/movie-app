import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import MovieListHorizontal from '@organisms/MovieListHorizontal';
// import HeadingBanner from '@organisms/HeadingBanner';
import { colors } from 'app/themes';
import { ScrollView } from 'react-native-gesture-handler';

const MyList = [
  {
    adult: false,
    backdrop_path: '/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg',
    genre_ids: [16, 28, 12, 14, 18],
    id: 635302,
    original_language: 'ja',
    original_title: '劇場版「鬼滅の刃」無限列車編',
    overview:
      "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    popularity: 1621.079,
    poster_path: '/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
    release_date: '2020-10-16',
    title: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
    video: false,
    vote_average: 8.4,
    vote_count: 843
  },
  {
    adult: false,
    backdrop_path: '/lHhc60NXYzswU4TvKSo45nY9Jzs.jpg',
    genre_ids: [16, 35, 10751, 12],
    id: 726684,
    original_language: 'fr',
    original_title: 'Miraculous World Shanghai, la légende de Ladydragon',
    overview:
      'To join Adrien in Shanghai, Marinette is going to visit her uncle Wang who is celebrating his anniversary. But, as soon as she arrives in China, her purse gets stolen with Tikki inside, whom she needs to secretly transform into Ladybug! Without money and alone in the immense city, Marinette accepts the help of a young and resourceful girl, Fei. The two girls will ally and discover the existence of a new magical jewel, the Prodigious. Hawk Moth, also present in Shanghai, seeks to finding it since a long time...',
    popularity: 1470.251,
    poster_path: '/xt2EwFW5cxcmbDnVmH8izSftUtE.jpg',
    release_date: '2021-04-04',
    title: 'Miraculous World: Shanghai – The Legend of Ladydragon',
    video: false,
    vote_average: 7.8,
    vote_count: 259
  }
];
const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Movie App',
      headerTitleStyle: styles.headerTitleStyle
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <HeadingBanner /> */}
        <MovieListHorizontal data={MyList} showDelete />
        <MovieListHorizontal data={MyList} />
        <MovieListHorizontal data={MyList} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

HomeScreen.propTypes = {
  navigation: PropTypes.object
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
