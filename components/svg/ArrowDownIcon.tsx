import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {LIGHT_GREY_COLOR} from '../../styles/theme';

export default () => (
  <Svg width="15" height="15" viewBox="0 0 576 512">
    <Path
      fill={LIGHT_GREY_COLOR}
      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
    />
  </Svg>
);
