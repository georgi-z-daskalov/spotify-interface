import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {LIGHT_GREY_COLOR} from '../../styles/theme';

export default () => (
  <Svg width="80" height="80" viewBox="0 0 512 512">
    <Path
      fill={LIGHT_GREY_COLOR}
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"
    />
  </Svg>
);
