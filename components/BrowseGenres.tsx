import React from 'react';
import {Text, ScrollView, View, ViewStyle, TextStyle} from 'react-native';
import {Button} from 'react-native-elements';
import genresList from '../assets/mock_server/genres';
import {navPushTo} from './navigation';
import {theme} from '../styles/theme';
import SearchIcon from './svg/SearchIcon';
import {Tile} from './Tile';

export const BrowseGenres = ({componentId}: {componentId: string}) => {
  const goToSearch = (): void => {
    navPushTo(componentId, 'Search');
  };

  return (
    <ScrollView contentContainerStyle={theme.browsegenres.container as ViewStyle}>
      <View style={theme.browsegenres.top}>
        <Text style={theme.browsegenres.top.text as TextStyle}>Search</Text>
        <Button
          buttonStyle={theme.browsegenres.top.button}
          containerStyle={theme.browsegenres.top.buttonContainer}
          titleStyle={theme.browsegenres.top.search}
          type="outline"
          icon={<SearchIcon />}
          title="Artists, songs or pocasts"
          onPress={goToSearch}
        />
      </View>
      {genresList.genres.map((genre: string) => {
        const image = require('../assets/img/album.jpg');
        return <Tile key={genre} text={genre} image={image} />;
      })}
    </ScrollView>
  );
};
