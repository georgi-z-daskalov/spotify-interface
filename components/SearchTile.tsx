import React from 'react';
import {View, Text, Image, ViewStyle, ImageStyle, TextStyle, ImageSourcePropType} from 'react-native';
import {theme} from '../styles/theme';
import {ITileProps} from './Tile';

interface ISearchTileProps extends ITileProps {
  album: string;
}

export const SearchTile = ({text, image, album}: ISearchTileProps): JSX.Element => (
  <View style={theme.searchtile as ViewStyle}>
    <Image style={theme.searchtile.tileimage as ImageStyle} source={image} />
    <View style={theme.searchtile.info as ViewStyle}>
      <Text style={theme.searchtile.info.song as TextStyle}>{text}</Text>
      <Text style={theme.searchtile.info.artist as TextStyle}>{album}</Text>
    </View>
  </View>
);
