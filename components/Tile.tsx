import React from 'react';
import {View, Text, Image, ViewStyle, ImageStyle, TextStyle, ImageSourcePropType} from 'react-native';
import {theme} from '../styles/theme';

export interface ITileProps {
  text: string;
  image: ImageSourcePropType;
}

export const Tile = ({text, image}: ITileProps): JSX.Element => (
  <View style={theme.browsegenres.tile as ViewStyle}>
    <Text style={theme.browsegenres.tiletext as TextStyle}>{text}</Text>
    <Image style={theme.browsegenres.tileimage as ImageStyle} source={image} />
  </View>
);
