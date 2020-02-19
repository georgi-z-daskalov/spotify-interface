import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {LIGHT_GREY_COLOR} from '../../styles/theme';

export default () => (
  <Svg width="80" height="80" viewBox="0 0 512 512">
    <Path
      fill={LIGHT_GREY_COLOR}
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
    />
  </Svg>
);
