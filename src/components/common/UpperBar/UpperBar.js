import React from 'react';
import { func, string } from 'prop-types';

import 'components/common/UpperBar/upper-bar.scss';
import backImage from 'assets/back.png';

const UpperBar = ({ goBackFunction, titleText }) => (
  <div className="upper-bar">
    <div className="upper-bar__back">
      <input
        className="upper-bar__back-img"
        type="image"
        src={backImage}
        onClick={goBackFunction}
        alt="Back button"
      />
    </div>
    <div className="upper-bar__title-text">
      <p>{titleText}</p>
    </div>
  </div>
);

UpperBar.propTypes = {
  goBackFunction: func,
  titleText: string,
};

export default UpperBar;
