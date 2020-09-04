import React from 'react';
import Loader from 'react-loader-spinner';

import {
  dodgerBlue,
  loaderHeight,
  loaderWidth,
} from '../../style/common/_constants.scss';

const CustomLoader = () => (
  <Loader
    type="ThreeDots"
    color={dodgerBlue}
    height={loaderHeight}
    width={loaderWidth}
  />
);

export default CustomLoader;
