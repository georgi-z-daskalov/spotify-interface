import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {LIGHT_GREY_COLOR} from '../../styles/theme';

export default () => (
  <Svg width="20" height="20" viewBox="0 0 576 512">
    <Path
      fill={LIGHT_GREY_COLOR}
      d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
    />
  </Svg>
);
